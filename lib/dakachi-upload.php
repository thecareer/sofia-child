<?php
/**
 * @author Jegtheme
 */

/**
 * Upload Mechanism
 */

Class Dakachi_Jeg_Upload
{
    public function __construct()
    {
        add_action('wp_ajax_upload_single_file', array(&$this, 'upload_single_file'));
        add_action('wp_ajax_nopriv_upload_single_file', array(&$this, 'upload_single_file'));

        add_action('wp_ajax_upload_multi_file', array(&$this, 'upload_multi_file'));
        add_action('wp_ajax_nopriv_upload_multi_file', array(&$this, 'upload_multi_file'));
    }

    public function upload_multi_file()
    {
        if( !empty($_REQUEST['nonce']) && wp_verify_nonce($_REQUEST['nonce'], 'jobplanet') )
        {
            $filename = $_REQUEST['filename'];
            $file = $_FILES[$filename];
            $attachment = $this->handle_file($file);

            jeg_get_template_part('additional/multi-file-form', array(
                'image_id' => $attachment['id'],
                'filename' => $filename,
                'close' => true
            ));
        }
        exit;
    }

    public function upload_single_file()
    {
        if( !empty($_REQUEST['nonce']) && wp_verify_nonce($_REQUEST['nonce'], 'jobplanet') )
        {
            $filename = $_REQUEST['filename'];
            $file = $_FILES[$filename];
            $attachment = $this->handle_file($file);

            jeg_get_template_part('additional/single-file-form', array(
                'image_id' => $attachment['id'],
                'filename' => $filename,
                'close' => true
            ));
        }
        exit;
    }

    public function handle_file($file)
    {
        $return = false;
        $uploaded_file = wp_handle_upload($file, array('test_form' => false));

        if(isset($uploaded_file['file'])) {
            $file_loc = $uploaded_file['file'];
            $file_name = basename($file['name']);
            $file_type = wp_check_filetype($file_name);

            $attachment = array(
                'post_mime_type' => $file_type['type'],
                'post_title' => preg_replace('/\.[^.]+$/', '', basename($file_name)),
                'post_content' => '',
                'post_status' => 'inherit'
            );

            $attach_id = wp_insert_attachment($attachment, $file_loc);
            $attach_data = wp_generate_attachment_metadata($attach_id, $file_loc);
            wp_update_attachment_metadata($attach_id, $attach_data);

            update_post_meta($attach_id, '_rml_folder', 9);

            $return = array('data' => $attach_data, 'id' => $attach_id);

            return $return;
        }
        return $return;
    }
}


new Dakachi_Jeg_Upload();