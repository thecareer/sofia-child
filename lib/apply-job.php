<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function job_startup_apply_job()
{
    parse_str($_REQUEST['data'], $data);
    $file_url = '';
    if (isset($data['cv_file'])) {
        $file_url = wp_get_attachment_url($data['cv_file']);
    }

    $args = array(
        'method'      => 'POST',
        'timeout'     => 45,
        'redirection' => 5,
        'httpversion' => '1.0',
        'blocking'    => true,
        'headers'     => array(),
        'body'        => array(
            'api_key'    => '056f5fe90d1a449404e50c498a39c4e102549dd9',
            'job_url'    => get_permalink(absint($data['job_id'])),
            'job_code'   => $data['job_id'],
            'language'   => 1,
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
            'email'      => $data['email'],
            'phone'      => $data['phone'],
            'resume_url' => $file_url,
            // 'about_me' => $data['message'],
            'message'    => $data['message'],

        ),
        'cookies'     => array(),
    );
    $response = wp_remote_post('https://sofia.interviewapp.co/api/v1/progressApply', $args);
    $body     = json_decode($response['body']);
    wp_send_json(array('success' => $body->success));

}
add_action('wp_ajax_apply-job', 'job_startup_apply_job');
add_action('wp_ajax_nopriv_apply-job', 'job_startup_apply_job');
