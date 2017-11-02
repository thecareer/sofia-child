<?php
$base_jazz_url = "https://api.resumatorapi.com/v1/jobs?apikey=9aBEBBNI63Fg2hzuMxQkxv5LSt2zJE53"; // fix ra config sau
add_action( 'save_post', 'published_to_draft'); 
add_action( 'rest_api_init', function () {
  register_rest_route( 'jazz', 'hook_job', array(
    'methods' => 'GET',
    'callback' => 'callback_hook_job',
  ) );

  register_rest_route( 'jazz', 'find_company', array(
    'methods' => 'GET',
    'callback' => 'callback_find_company',
  ) );

  register_rest_route( 'jazz', 'find_job', array(
    'methods' => 'GET',
    'callback' => 'callback_find_job',
  ) );

} );

function callback_find_job() {
  if(isset($_GET['job_id'])) {
    $jobs = get_posts( array(
      'post_type'        => 'job',
      'meta_key'         => 'jazzid',
      'meta_value'       => sanitize_text_field($_GET['job_id']),
    ) );
    
    
    if(count($jobs) > 0) {
      return array_merge((array)$jobs[0], array('job_url' => get_post_permalink($jobs[0]->ID)));
    }
  }
}

function callback_find_company() {
  if(isset($_GET['hiring_lead'])) {
    $companies = get_posts( array(
      'post_type'        => 'company',
      'meta_key' => 'hiring_lead',
      'meta_value'       => sanitize_text_field($_GET['hiring_lead']),
    ) );

    if(count($companies) > 0) {
      return array_merge((array)$companies[0], 
      [
        'logo_url' => get_the_post_thumbnail_url($companies[0]->ID),
        'wp_url' => get_post_permalink($companies[0]->ID)
      ]);
    }
  }
}

function callback_hook_job() {
  
  global $base_jazz_url;
  $jobs = json_decode(file_get_contents($base_jazz_url));
  foreach($jobs as $job) {
    if($job->status != "Open" && $job->status != "Approved")
      continue;
    $posts = get_posts( array(
      'post_type'        => 'job',
      'meta_key' => 'jazzid',
      'meta_value'       => $job->id,
      'post_status' => 'any'
    ) );
      
    if(count($posts) > 0) {
      continue;
    }
    else {

      $companies = get_posts( array(
        'post_type'        => 'company',
        'meta_key' => 'hiring_lead',
        'meta_value'       => $job->hiring_lead,
        'post_status' => 'any'
      ) );

      $company_id = null;
      if(count($companies) > 0)  {
        $company_id = $companies[0]->ID;
      }

      $post_id = wp_insert_post(array(
        'post_author' => 8,
        'post_title' => $job->title,
        'post_content' => $job->description,
        'post_type' => 'job',
        'meta_input' => array(
          'jazzid' => $job->id,
          'jazzcity' => $job->city,
          'jazzstate' => $job->state,
          'jazzzip' => $job->zip,
          'jazzdepartment' => $job->department,
          'jazzminsalary' => $job->minimum_salary,
          'jazzmaxsalary' => $job->maximum_salary,
          'jazztype' => $job->type,
          'jazzstatus' => $job->status,
          'jazzopenday' => $job->original_open_date,
          'hiringlead' => $job->hiring_lead,
          'embedcode' => $job->board_code,
          'jazzcountry' => $job->country_id,
          'company_id' => $company_id,
          'jobplanet_job_fields' => array('company_id', 'featured', 'application_email', 'salary_bottom', 'salary_top', 'salary_range', 'address', 'map_location', 'address', 'closing', 'expire'),
          'jobplanet_jazzhr_fields' => array('jazzid', 'jazzcity', 'jazzstate', 'jazzzip', 'jazzcountry', 'jazzdepartment', 'jazzminsalary', 'jazzmaxsalary', 'jazztype', 'jazzstatus', 'hiringlead', 'embedcode')
        )
      ));

      set_job_expire($post_id, strtotime($job->original_open_date));
      push_to_slack($job->title, $post_id);
    }

    
  }
}

function set_job_expire($job, $current_time)
{
    if ($job instanceof WP_Post) {
        $job_id = $job->ID;
    } else {
        $job    = get_post($job);
        $job_id = $job->ID;
    }

    if ($job && $job->post_type === 'job') {
        
        $expire       = strtotime('+30 days', $current_time);
        update_post_meta($job_id, 'expire', gmdate("Y-m-d", $expire));
        update_post_meta($job_id, 'closing', gmdate("Y-m-d", $expire));
    }
}


function push_to_slack($title, $id) {

      $fields = array(
          'text' => 'New Job (<https://startup.jobs/wp-admin/post.php?post='.$id.'&action=edit|'.$title.'>) posted, check in wordpress'
      );

  $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, 'https://hooks.slack.com/services/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');
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
      curl_setopt($ch, CURLOPT_HEADER, FALSE);
      curl_setopt($ch, CURLOPT_POST, TRUE);
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

      $response = curl_exec($ch);
      curl_close($ch);
      return $response;
}

function published_to_draft( $post_id ) { 
  
      $status = get_post_status($post_id);
      $post_type = get_post_type($post_id);
      if($post_type == 'job')
      {
          if($status == 'publish')
          {
              remove_action('save_post', 'published_to_draft');
              $publish = get_post_meta($post_id, 'sent_mail', true);
              if($publish != '1') {

                $hiring_lead = get_post_meta($post_id, 'hiringlead', true);
                if($hiring_lead != null && $hiring_lead != "") {
                  $mod = wp_get_current_user();
                  
                  $user_jazz = json_decode(file_get_contents("https://api.resumatorapi.com/v1/users/".$hiring_lead."?apikey=9aBEBBNI63Fg2hzuMxQkxv5LSt2zJE53"));
                  
                  $post = get_post($post_id);
                  $post_url = get_post_permalink($post_id);

                  $to = $user_jazz->email;
                  $subject = "Congratulations! Your job is now published.";

                  $open_day = get_post_meta($post_id, 'jazzopenday', true);
                  $closing_day = get_post_meta($post_id, 'closing', true);
                  $message = file_get_contents(dirname(__FILE__) . '/../template/email/2.html');
                  $message = str_replace(array('{{mod_name}}', '{{mod_mail}}', '{{open_day}}', '{{closing_day}}', '{{job_title}}', '{{job_url}}'), 
                  array($mod->display_name, $mod->user_email, $open_day, $closing_day, $post->post_title, $post_url), $message);

                  wp_mail($to, $subject, $message, array('Content-Type: text/html; charset=UTF-8', 'BCC: monitor@interviewapp.com'));
  
                  update_post_meta($post_id, 'sent_mail', 1);
                }
                
              }
              
              add_action( 'save_post', 'published_to_draft'); 
          }    
      }
      
  
  }