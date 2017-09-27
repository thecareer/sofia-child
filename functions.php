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

function dakachi_add_company_cover_photo()
{
    /**
     * add setting cover photo
     */
    if (class_exists('MultiPostThumbnails')) {
        new MultiPostThumbnails(array(
            'label'     => 'Company Cover Photo',
            'id'        => 'company-cover',
            'post_type' => 'company',
        ));

        new MultiPostThumbnails(array(
            'label'     => 'Job Cover Photo',
            'id'        => 'job-cover',
            'post_type' => 'job',
        ));
    }

    $args = array(
        'public' => true,
        'label'  => 'Slider',
    );
    register_post_type('home_slider', $args);

    $slug = apply_filters('jeg_check_ajax_option_save', vp_option('joption.job_slug', 'job'), 'job_slug');
    $args =
        array(
            'labels'    =>
                array(
                    'name'              => 'All Job',
                    'singular_name'     => 'Job',
                    'menu_name'         => 'Job Listings',
                    'add_new'           => 'Add New Job',
                    'add_new_item'      => 'Add New Job',
                    'edit_item'         => 'Edit Job Entry',
                    'new_item'          => 'New Job Entry',
                    'view_item'         => 'View Job',
                    'search_items'      => 'Search Jobs',
                    'not_found'         => 'No job found',
                    'not_found_in_trash'=> 'No job found in Trash',
                    'parent_item_colon' => ''
                ),
            'description'           => 'Job Post type',
            'public'                => true,
            'show_ui'               => true,
            'menu_position'         => 6,
            'capability_type'       => 'post',
            'hierarchical'          => false,
            'supports'              => array('title' , 'editor', 'author', 'revisions'),
            'taxonomies'            => array('job-type', 'job-location', 'job-category'),
            'rewrite'               => array(
                'slug'  =>  $slug
            )
        );

    register_post_type( 'job', $args);

    $labels = array(
        'name'                  => _x('Job Level', 'Taxonomy plural name', 'jobplanet-plugin'),
        'singular_name'         => _x('Job Level', 'Taxonomy singular name', 'jobplanet-plugin'),
        'search_items'          => __('Search job level', 'jobplanet-plugin'),
        'popular_items'         => __('Popular job level', 'jobplanet-plugin'),
        'all_items'             => __('All job level', 'jobplanet-plugin'),
        'parent_item'           => __('Parent job level', 'jobplanet-plugin'),
        'parent_item_colon'     => __('Parent job level', 'jobplanet-plugin'),
        'edit_item'             => __('Edit job level', 'jobplanet-plugin'),
        'update_item'           => __('Update job level ', 'jobplanet-plugin'),
        'add_new_item'          => __('Add New job level ', 'jobplanet-plugin'),
        'new_item_name'         => __('New job level Name', 'jobplanet-plugin'),
        'add_or_remove_items'   => __('Add or remove job level', 'jobplanet-plugin'),
        'choose_from_most_used' => __('Choose from most used enginetheme', 'jobplanet-plugin'),
        'menu_name'             => __('Job Level', 'jobplanet-plugin'),
    );

    $args = array(
        'labels'            => $labels,
        'public'            => true,
        'show_in_nav_menus' => true,
        'show_admin_column' => true,
        'hierarchical'      => true,
        'show_tagcloud'     => true,
        'show_ui'           => true,
        'query_var'         => true,
        'rewrite'           => array(
            'slug' => 'job-level',
        ),
        'query_var'         => true,
        'capabilities'      => array(
            'manage_terms',
            'edit_terms',
            'delete_terms',
            'assign_terms',
        ),
    );

    register_taxonomy('job_level', 'job', $args);
    register_taxonomy('job_tag', 'job');

    add_post_type_support('job', 'thumbnail');
    add_post_type_support('company', 'revisions');

    unregister_taxonomy('dress-code');

    unregister_taxonomy_for_object_type('job-category', 'company');
    register_taxonomy_for_object_type('job-location', 'company');

    register_taxonomy('company-industry', array('company'),
        array(
            'hierarchical'   => true,
            'label'          => __("Company Industry", "jobplanet-themes"),
            'singular_label' => __("Company Industry", "jobplanet-themes"),
            'rewrite'        => false,
            'query_var'      => true,
            'public'         => true,
            'show_ui'        => true,
        )
    );

}
add_action('init', 'dakachi_add_company_cover_photo');