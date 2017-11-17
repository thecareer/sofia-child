<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/* Thay doi url cua job noi them ten company */
function dakachi_save_job_name($post_ID, $post, $update) {
	global $wpdb;
	$data = $_POST;
	if ( !empty($data['post_title']) && !empty($data['post_status']) ) {
		$post_name = wp_unique_post_slug( sanitize_title( $data['post_title'], $post_ID ), $post_ID, $data['post_status'], $post->post_type, $post->post_parent );

		$company_id = $data['jobplanet_job']['company_id'];
		if(!$company_id) {
			$company_id = get_post_meta( $post_ID, 'company_id', true );
		}
		$company = get_post($company_id);

		$post_name = $post_name . '-at-' . $company->post_name;

		$post_name = wp_unique_post_slug($post_name,$post_ID, $data['post_status'], $post->post_type, $post->post_parent);

		$where = array( 'ID' => $post_ID );
		$wpdb->update( $wpdb->posts, array( 'post_name' => $post_name ), $where );
		clean_post_cache( $post_ID );
	}

	if(!empty($data['jobplanet_job']['company_id'])) {
		$post_content = $post->post_content;
		$company_id = $data['jobplanet_job']['company_id'];
		$company_name = esc_html( get_the_title( $company_id ) );
		if(strpos($post_content, 'company-hidden')) {
			$post_content = preg_replace('#<span id="company-hidden".*</span>#m', '<span id="company-hidden" style="display:none"> by '.$company_name.'</span>' , $post_content);
		}else {
			$post_content .= '<span id="company-hidden" style="display:none"> by '.$company_name.'</span>';
		}

		$where = array( 'ID' => $post_ID );
		$wpdb->update( $wpdb->posts, array( 'post_content' => $post_content ), $where );
		clean_post_cache( $post_ID );
	}
}
add_action('save_post_job', 'dakachi_save_job_name', 10, 3);

function dakachi_filter_job_link($link, $job) {
	if( !is_admin() && 'job' == $job->post_type && vp_metabox('jobplanet_job.application_url')) {
		return vp_metabox('jobplanet_job.application_url');
	}
	return $link;
}
// add_filter( 'post_type_link', 'dakachi_filter_job_link', 10, 2 );



add_filter( 'wpseo_opengraph_image', 'ag_yoast_seo_fb_share_images', 10, 1 );
function ag_yoast_seo_fb_share_images( $img ) {
	if(is_singular( 'job' )) {
		$company_id = vp_metabox('jobplanet_job.company_id');
		$company_image_id = get_post_thumbnail_id($company_id);
		$company_image_src = wp_get_attachment_image_src($company_image_id, 'post-thumbnail');
		return $company_image_src;
	}
	return $img;
};