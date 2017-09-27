<?php
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    exit;
}

function onix_add_cssjs_ver($src)
{
    if (strpos($src, '?ver=')) {
        $src = remove_query_arg('ver', $src);
    }

    $src = add_query_arg('ver', time(), $src);

    return $src;
}
add_filter('style_loader_src', 'onix_add_cssjs_ver', 11, 2);
add_filter('script_loader_src', 'onix_add_cssjs_ver', 11, 2);

function remove_css_js() {
	remove_action('wp_enqueue_scripts', 'jeg_init_style');
}
add_action( 'after_setup_theme', 'remove_css_js' );

/**
 * Add bolton style
 */
function startup_add_scripts_styles() {
	wp_enqueue_style('main', get_stylesheet_directory_uri() . '/css/main.css');
	
	if(!is_page_template( 'page-post-job.php' )) {
		wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/css/custom.css', array('main'));
	}else {
		wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/css/custom-post-job.css', array('main'));
	}

	wp_enqueue_style('style', get_stylesheet_directory_uri() . '/style.css');

	wp_enqueue_script('blazy', get_stylesheet_directory_uri() . '/js/blazy.js');
	wp_enqueue_script('scroll', get_stylesheet_directory_uri() . '/js/scroll.js');
	wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js');

}
add_action( 'wp_enqueue_scripts', 'startup_add_scripts_styles' );

function job_filter_body_class($classes) {
	global $post;
	$classes[] = 'gorgias-loaded';

	if(is_page_template( 'page-post-job.php' ) ) {
		$classes[] = 'path-job-slots';
	}

	if(!is_user_logged_in()) {
		$classes[] = 'page-user-role-anon';
	}else {
		$classes[] = 'user-logged-in';
	}

	if(is_front_page()) {
		$classes[] = 'page-frontpage path-desktop ';
	}

	if(vp_option('joption.job_page') == get_the_ID()) {
		$classes[] = 'page-jobs page-jobs-landing path-desktop';
	}

	if(is_singular( 'job' )) {
		$classes[] = 'path-node page-node-type-job';
	}

	if(is_singular( 'company' )) {
		$classes[] = 'active-slideshow tall-header premium-company user-logged-in path-node page-node-type-company gorgias-loaded';
	}

	return $classes;
}
add_filter( 'body_class', 'job_filter_body_class');