<?php
/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    exit;
}

require_once dirname(__FILE__) . '/lib/handle-company.php';
require_once dirname(__FILE__) . '/lib/handle-job.php';
require_once dirname(__FILE__) . '/lib/dakachi-upload.php';
require_once dirname(__FILE__) . '/lib/apply-job.php';
require_once dirname(__FILE__) . '/lib/blog.php';

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

function remove_css_js()
{
    remove_action('wp_enqueue_scripts', 'jeg_init_style');
}
add_action('after_setup_theme', 'remove_css_js');

/**
 * Add bolton style
 */
function startup_add_scripts_styles()
{

    wp_enqueue_style('main', get_stylesheet_directory_uri() . '/css/main.css');

    if (!is_page_template('page-post-job.php')) {
        wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/css/custom.css', array('main'));
    } else {
        wp_enqueue_style('custom', get_stylesheet_directory_uri() . '/css/custom-post-job.css', array('main'));
    }

    if (is_404()) {
        wp_enqueue_style('404', get_stylesheet_directory_uri() . '/css/404.css', array('main'));
    }

    // wp_enqueue_style('blog', get_stylesheet_directory_uri() . '/css/blog.css', array('main'));

    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/style.css');

    wp_enqueue_script('jquery');
    wp_enqueue_script('sticky', get_stylesheet_directory_uri() . '/js/jquery.sticky.js');
    wp_enqueue_script('blazy', get_stylesheet_directory_uri() . '/js/blazy.js');
    wp_enqueue_script('scroll', get_stylesheet_directory_uri() . '/js/scroll.js');
    wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array('jquery', 'sticky'));

    wp_enqueue_script('jfileuploader', get_stylesheet_directory_uri() . '/js/jfileuploader.js');

    wp_enqueue_script('jeg-gmap', get_stylesheet_directory_uri() . '/js/gmap.js"');
    wp_enqueue_script('jeg-detail', get_stylesheet_directory_uri() . '/js/map-detail.js"');

    wp_localize_script('jeg-detail', 'global', array('ajax_url' => admin_url('admin-ajax.php')));

}
add_action('wp_enqueue_scripts', 'startup_add_scripts_styles');

function job_filter_body_class($classes)
{
    global $post;
    $classes[] = 'gorgias-loaded';

    if (is_page_template('page-post-job.php')) {
        $classes[] = 'path-job-slots';
    }

    if (!is_user_logged_in()) {
        $classes[] = 'page-user-role-anon';
    } else {
        $classes[] = 'user-logged-in';
    }

    if (is_front_page()) {
        $classes[] = 'page-frontpage path-desktop ';
        return $classes;
    }

    if (is_page_template('search-job.php')) {
        $classes[] = 'page-jobs page-jobs-landing path-desktop';
        return $classes;
    }

    if(is_page_template( 'company-list.php' )) {
        $classes[] = 'path-companies';
    }

    if (is_singular('job')) {
        $classes[] = 'path-node page-node-type-job';
        return $classes;
    }

    if (is_singular('post')) {
        $classes[] = 'path-node page-node-type-blog blog-regular';
        return $classes;
    }

    if (is_singular('company')) {
        $classes[] = 'active-slideshow tall-header  premium-company user-logged-in path-node page-node-type-company gorgias-loaded';
        return $classes;
    }

    return $classes;
}
add_filter('body_class', 'job_filter_body_class');


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
            'label'     => 'Company Head Photo',
            'id'        => 'company-head',
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
        'labels'          => array(
            'name'               => 'All Job',
            'singular_name'      => 'Job',
            'menu_name'          => 'Job Listings',
            'add_new'            => 'Add New Job',
            'add_new_item'       => 'Add New Job',
            'edit_item'          => 'Edit Job Entry',
            'new_item'           => 'New Job Entry',
            'view_item'          => 'View Job',
            'search_items'       => 'Search Jobs',
            'not_found'          => 'No job found',
            'not_found_in_trash' => 'No job found in Trash',
            'parent_item_colon'  => '',
        ),
        'description'     => 'Job Post type',
        'public'          => true,
        'show_ui'         => true,
        'menu_position'   => 6,
        'capability_type' => 'post',
        'hierarchical'    => false,
        'supports'        => array('title', 'editor', 'author', 'revisions'),
        'taxonomies'      => array('job-type', 'job-location', 'job-category'),
        'rewrite'         => array(
            'slug' => $slug,
        ),
    );

    register_post_type('job', $args);

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

    register_taxonomy('company-location', array('company'),
        array(
            'hierarchical'   => true,
            'label'          => __("Company location", "jobplanet-themes"),
            'singular_label' => __("Company location", "jobplanet-themes"),
            'rewrite'        => false,
            'query_var'      => true,
            'public'         => true,
            'show_ui'        => true,
        )
    );
    register_taxonomy('company-size', array('company'),
        array(
            'hierarchical'   => true,
            'label'          => __("Company Size", "jobplanet-themes"),
            'singular_label' => __("Company Size", "jobplanet-themes"),
            'rewrite'        => false,
            'query_var'      => true,
            'public'         => true,
            'show_ui'        => true,
        )
    );

    register_taxonomy('company-tag', array('company'),
        array(
            'hierarchical'   => false,
            'label'          => __("Company Tag", "jobplanet-themes"),
            'singular_label' => __("Company TAg", "jobplanet-themes"),
            'rewrite'        => false,
            'query_var'      => true,
            'public'         => true,
            'show_ui'        => true,
        )
    );

}
add_action('init', 'dakachi_add_company_cover_photo');

remove_action('after_setup_theme', 'jeg_pagemetabox_setup');
function dakachi_jeg_pagemetabox_setup()
{
    if (!class_exists('VP_Metabox')) {
        return;
    }

    if (!defined('JOBPLANET_PLUGIN_DIR')) {
        return;
    }

    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/blog-metabox.php');
    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/page-metabox.php');
    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/page-landing-metabox.php');

    new VP_Metabox(get_stylesheet_directory() . '/lib/metabox/companies-metabox.php');
    new VP_Metabox(get_stylesheet_directory() . '/lib/metabox/job-metabox.php');
    // new VP_Metabox(get_stylesheet_directory() . '/lib/metabox/university-metabox.php');
    // new VP_Metabox(get_stylesheet_directory() . '/lib/metabox/jobfair-metabox.php');

    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/application-metabox.php');
    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/application-status-metabox.php');

    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/resume-metabox.php');
    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/resume-detail-metabox.php');

    new VP_Metabox(JOBPLANET_PLUGIN_DIR . '/lib/metabox/alert-metabox.php');

}

add_action('after_setup_theme', 'dakachi_jeg_pagemetabox_setup', 12);

function dakachi_products_plugin_query_vars($vars)
{
    $vars[] = 'keyword';
    $vars[] = 'category';
    $vars[] = 'type';
    $vars[] = 'level';
    $vars[] = 'tag';

    $vars[] = 'funding';
    $vars[] = 'location';
    $vars[] = 'size';
    $vars[] = 'sortby';

    return $vars;
}
//add plugin query vars (product_id) to wordpress
add_filter('query_vars', 'dakachi_products_plugin_query_vars');

function startup_language_list()
{
    return array(
        'en' => 'Global',
        'vn' => "Vietnam",
        'sg' => "Singapore",
    );
}

function search_filter($query)
{

    if (isset($query->query_vars['post_type']) && !in_array($query->query_vars['post_type'], array('post', 'job', 'company'))) {
        return $query;
    }
    if (!is_admin() && ICL_LANGUAGE_CODE == 'en') {

        $query->set('suppress_filters', 1);

    }
    return $query;

}

add_action('pre_get_posts', 'search_filter');

function dakachi_page_array($lang)
{
    if (defined('DAKACHI_DEVELOPMENT') && DAKACHI_DEVELOPMENT) {
        $pages = array(
            'en' => array(
                'job_page'          => 14,
                'company_list_page' => 88,
            ),
            'vn' => array(
                'job_page'          => 154,
                'company_list_page' => 155,
            ),
            'sg' => array(
                'job_page'          => 142,
                'company_list_page' => 144,
            ),

        );
    } else {
        $pages = array(
            'en' => array(
                'job_page'          => 12,
                'company_list_page' => 2,
            ),
            'vn' => array(
                'job_page'          => 204,
                'company_list_page' => 200,
            ),
            'sg' => array(
                'job_page'          => 175,
                'company_list_page' => 158,
            ),

        );
    }

    return $pages[$lang];
}


