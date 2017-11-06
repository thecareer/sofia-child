<?php
/**
 * @author : Jegtheme
 */

class Dakachi_Jeg_Email
{
    private static $instance;
    private $find;
    private $recipient;
    private $replace;
    private $subject;
    private $template;
    private $variable;
    private $image_path;
    private $attachment;

    public static function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    public function __construct()
    {
        $this->init();

        //add_filter('job_planet_option', array(&$this, 'register_option'), 50);
        add_action('wp_loaded', array($this, 'email_tester'), 20);
    }

    public function email_tester()
    {
        if (isset($_GET['test-email'])) {
            $this->template = 'email/' . $_GET['test-email'];
            switch ($_GET['test-email']) {
                case 'application-status-change':
                    $this->variable = array(
                        'name'           => 'Agung Bayu',
                        'application_id' => '88',
                        'status'         => 'rejected',
                        'color'          => 'e74c3c',
                    );
                    break;
                case 'employer-application-notification':
                    $this->variable = array(
                        'employer_name'  => 'Agung Bayu',
                        'applicant_name' => 'Agung Bayu',
                        'job_name'       => 'Full Stack Web Developer, Internal Tools',
                        'job_link'       => 'http://dinhle.com',
                    );
                    break;
                case 'register-applicant-notification':
                    $this->variable = array(
                        'user_login' => 'jegbagus',
                    );
                    break;
                case 'register-employer-notification':
                    $this->variable = array(
                        'user_login' => 'jegbagus',
                    );
                    break;
                case 'register-social-notification':
                    $this->variable = array(
                        'email'    => 'jegbagus@gmail.com',
                        'password' => 'password',
                    );
                    break;
                case 'reset-password-notification':
                    $this->variable = array(
                        'key'        => 'randomkey',
                        'user_login' => 'jegbagus',
                    );
                    break;
                case 'job-alert':
                    $this->variable = array(
                        'name'  => 'Agung',
                        'jobs'  => Jeg_alert::getInstance()->get_job_by_alert_id(100),
                        'alert' => 100,
                    );
                    break;
                case 'send-job-for-friend':
                    $this->variable = array(
                        'from'    => 'email@master.com',
                        'to'      => 'email@me.com',
                        'comment' => "This is a job fit for you",
                        'job'     => get_post(443),
                    );
                    break;

            }
            echo $this->get_content();
            exit;
        }
    }

    public function init()
    {
        $this->find['blogname']   = '{blogname}';
        $this->find['site-title'] = '{site_title}';

        $this->replace['blogname']   = $this->get_blogname();
        $this->replace['site-title'] = $this->get_blogname();

        $this->image_path = JOBPLANET_PLUGIN_URL . '/assets/img';
    }

    public function get_blogname()
    {
        return wp_specialchars_decode(get_option('blogname'), ENT_QUOTES);
    }

    public function format_string($string)
    {
        return str_replace($this->find, $this->replace, $string);
    }

    public function prepare_email($subject, $template, $to, $var, $attachment)
    {
        $this->subject    = $subject;
        $this->template   = $template;
        $this->variable   = $var;
        $this->recipient  = $to;
        $this->attachment = $attachment;
    }

    public function get_subject()
    {
        return $this->format_string($this->subject);
    }

    public function get_header()
    {
        $header = array("Content-Type: " . "text/html" . "\r\n");
        if(isset($this->variable['applicant_email']))
        {
            $header[] = "Reply-To: ".$this->variable['applicant_name'].' <'.$this->variable['applicant_email'].'>';
        }
        return $header;
    }

    public function get_content_parameter()
    {
        return apply_filters('jeg_email_parameter', array(
            'image_url'   => $this->image_path,
            'blogname'    => $this->get_blogname(),
            'footer'      => vp_option('joption.copyright_footer', '&copy; 2015 - 2016 ByJegtheme'),
            'email'       => vp_option('joption.email_sender'),
            'contact'     => vp_option('joption.contact_page'),
            'header_logo' => vp_option('joption.email_logo'),
        ));
    }

    public function get_content_html()
    {
        $parameter = $this->get_content_parameter();
        ob_start();
        jeg_get_template_part('email/email-header', $parameter);
        jeg_get_template_part($this->template, $this->variable);
        jeg_get_template_part('email/email-footer', $parameter);
        return ob_get_clean();
    }

    public function get_content()
    {
        $content = $this->get_content_html();
        return $this->format_string($content);
    }

    public function get_attachment()
    {
        return $this->attachment;
    }

    public function send()
    {
        return wp_mail($this->recipient, $this->get_subject(), $this->get_content(), $this->get_header(), $this->get_attachment());
    }

    public function register_option($option)
    {
        $newoption = include JOBPLANET_PLUGIN_DIR . '/lib/option/email-option.php';
        return jeg_merge_option($option, $newoption);
    }
}

Dakachi_Jeg_Email::getInstance();

// helper function
function dakachi_jeg_send_email($subject, $template, $to, $var, $attachment = null)
{
    $emailhandler = Dakachi_Jeg_Email::getInstance();
    $emailhandler->prepare_email($subject, $template, $to, $var, $attachment);
    $emailhandler->send();
}

/**
 * them bcc vao email gui di
 */
function dakachi_add_bcc_to_mail($mail)
{
    if (defined('bccMonitoring')) {
        if (!is_array($mail['headers'])) {
            $header          = $mail['headers'];
            $mail['headers'] = array(
                $header, 'BCC : ' . bccMonitoring,
            );
        } else {
            $mail['headers'][] = 'BCC : ' . bccMonitoring;
        }
    }
    return $mail;
}
add_filter('wp_mail', 'dakachi_add_bcc_to_mail');