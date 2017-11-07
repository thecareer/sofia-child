<?php
/**
 * Template Name: Embed Page
 */
$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri_segments = explode('/', $uri_path);

if(isset($uri_segments[2]) && $uri_segments[2] != null) {
	$code = $uri_segments[2];

	$args = array(
		'posts_per_page'   => 1,
		'offset'           => 0,
		'meta_key'         => 'embedcode',
		'meta_value'       => $code,
		'post_type'        => 'job',
		'post_status'      => 'publish',
	);
	$posts_array = get_posts( $args );
	if(count($posts_array) > 0) {
		
		wp_redirect(get_post_permalink($posts_array[0]->ID));
		exit();	
	}
}
wp_redirect(home_url());
exit();
?>