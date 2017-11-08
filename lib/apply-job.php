<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function job_startup_apply_job()
{
    parse_str($_REQUEST['data'], $data);
    $job = get_post($data['job_id']);
    try {
        if ($data['job_id'] == '' && !$job) {
            throw new Exception(esc_html(__('Việc làm không hợp lệ.', 'jobplanet-plugin')));
        }

        if ($data['name'] == '' ) {
            throw new Exception(esc_html(__('Vui lòng nhập vào tên của bạn.', 'jobplanet-plugin')));
        }

        if ($data['email'] == '' || !is_email( $data['email'] )) {
            throw new Exception(esc_html(__('Vui lòng nhập vào địa chỉ email.', 'jobplanet-plugin')));
        }

        if ($data['cv_file'] == '') {
            throw new Exception(esc_html(__('Vui lòng gửi kèm CVs của bạn.', 'jobplanet-plugin')));
        }

        $attach = array(get_attached_file($data['cv_file']));

        dakachi_jeg_send_email(
            sprintf(esc_html(__('%s đã ứng tuyển %s tại {site_title}', 'jobplanet-plugin')), $data['name'], $job->post_title),
            'email/employer-application-notification',
            dakachi_get_employer_email($job->ID),
            array(
                // 'employer_name'  => $employer_name,
                'applicant_name'  => $data['name'],
                'job_name'        => $job->post_title,
                'job_link'        => get_permalink($job->ID),
                'message'         => $data['message'],
                'applicant_email' => $data['email'],
                'phone' => $data['phone'],
                'address' => $data['address'],
            ), $attach
        );

        jeg_send_email(
            sprintf(esc_html(__('Bạn đã ứng tuyển vị trí %s tại {site_title}', 'jobplanet-plugin')), $job->post_title),
            'email/jobseeker-application-notification',
            $data['email'],
            array(
                'applicant_name' => $data['name'],
                'job_name'       => $job->post_title,
                'job_link'       => get_permalink($job->ID),
                'message'        => $data['message'],
                'applicant_email' => $data['email'],
                'phone' => $data['phone'],
                'address' => $data['address'],
            )
        );
        
        wp_send_json(array('success' => true));
    } catch (Exception $e) {
        $message = '<div class="alert alert-danger" role="alert">' . $e->getMessage() . '</div>';
        wp_send_json(array('success' => false, 'msg' => $message));
    }

}
add_action('wp_ajax_apply-job', 'job_startup_apply_job');
add_action('wp_ajax_nopriv_apply-job', 'job_startup_apply_job');

/**
 * copy tu class-jeg-applicant.php de lay employer email
 */
function dakachi_get_employer_email($job_id)
{
    if (vp_metabox('jobplanet_job.application_email', null, $job_id)) {
        return vp_metabox('jobplanet_job.application_email', null, $job_id);
    } else {
        $job = get_post($job_id);
        return get_the_author_meta('user_email', $job->post_author);
    }
}
