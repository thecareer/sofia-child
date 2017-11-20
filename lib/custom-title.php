<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

add_filter('pre_get_document_title', 'dakachi_custom_title', 100);
add_filter( 'wpseo_opengraph_title', 'dakachi_custom_title', 100);
add_filter( 'wpseo_opengraph_desc', 'dakachi_custom_title', 100);

function dakachi_custom_title($title)
{

    $blogname = get_bloginfo('blogname');
    if (is_singular('job')) {
        $company       = vp_metabox('jobplanet_job.company_id');
        $company_title = esc_html(get_the_title($company));
        $job_title     = get_the_title();
        $locations     = get_the_terms(get_the_ID(), 'job-location');
        $loc           = array();
        foreach ($locations as $key => $location) {
            $loc[] = $location->name;
        }
        $location       = join(',', $loc);
        $title = sprintf(__("%s at %s | %s", "jobplanet-themes"), $job_title, $company_title,  $blogname);
        return $title;
    }

    if(is_singular( 'company' )) {
        $company_name = esc_html( get_the_title() );
        $title = sprintf(__("Working at %s. company profile and job opportunities | %s", "jobplanet-themes"), $company_name, $blogname);
        return $title;
    }

    return $title;

    if (is_singular('page') && get_the_ID() == vp_option('joption.job_page')) {

        // title trang tag
        if (get_query_var('tag')) {
            $tag            = get_term_by('slug', get_query_var('tag'), 'job_tag');
            $title = sprintf(__("Việc làm %s - Tìm thấy %d công việc liên quan đến %s", "jobplanet-themes"), $tag->name, $tag->count,$tag->name);
            return $title;
        }
        // title trang search
        if (get_query_var('location') || get_query_var('category') || get_query_var('level')) {
            $result         = apply_filters('build_job_seach_query', null, 1, 1);
            $title = sprintf(__("Có %d việc làm", "jobplanet-themes"), $result->found_posts);
            if (get_query_var('location')) {
                $request_locations = explode(',', get_query_var('location'));
                $loc               = array();
                foreach ($request_locations as $key => $value) {
                    $term  = get_term_by('slug', $value, 'job-location');
                    $loc[] = $term->name;
                }
                $location = implode(',', $loc);
                $title .= sprintf(__(" tại %s", "jobplanet-themes"), $location);
            }

            if (get_query_var('category')) {
                $request_category = explode(',', get_query_var('category'));
                $loc              = array();
                foreach ($request_category as $key => $value) {
                    $term  = get_term_by('slug', $value, 'job-category');
                    $cat[] = $term->name;
                }
                $category = implode(',', $cat);
                $title .= sprintf(__(" trong ngành %s", "jobplanet-themes"), $category);
            }

            if (get_query_var('level')) {
                $request_level = explode(',', get_query_var('level'));
                $loc           = array();
                foreach ($request_level as $key => $value) {
                    $term  = get_term_by('slug', $value, 'job_level');
                    $cat[] = $term->name;
                }
                $level = implode(',', $cat);
                $title .= sprintf(__(" dành cho %s", "jobplanet-themes"), $level);
            }
            return $title;
            wp_reset_query();
        }
    }


    if (is_singular('page') && get_the_ID() == vp_option('joption.company_list_page')) {
        if (get_query_var('tag')) {
            $tag            = get_term_by('slug', get_query_var('tag'), 'company-tag');
            $title = sprintf(__("Khám phá các công ty %s do Career.vn tổng hợp", "jobplanet-themes"), $tag->name);
            return $title;
        }

        // title trang search
        if (get_query_var('location') || get_query_var('industry') || get_query_var('size')) {
            $result         = apply_filters('build_job_seach_query', null, 1, 1);
            $title = sprintf(__("Khám phá các công ty", "jobplanet-themes"), $result->found_posts);
            if (get_query_var('location')) {
                $request_locations = explode(',', get_query_var('location'));
                $loc               = array();
                foreach ($request_locations as $key => $value) {
                    $term  = get_term_by('slug', $value, 'job-location');
                    $loc[] = $term->name;
                }
                $location = implode(',', $loc);
                $title .= sprintf(__(" tại %s", "jobplanet-themes"), $location);
            }

            if (get_query_var('industry')) {
                $request_industry = explode(',', get_query_var('industry'));
                $ind              = array();
                foreach ($request_industry as $key => $value) {
                    $term  = get_term_by('slug', $value, 'company-industry');
                    $ind[] = $term->name;
                }
                $industry = implode(',', $ind);
                $title .= sprintf(__(" trong ngành %s", "jobplanet-themes"), $industry);
            }

            if (get_query_var('size')) {
                $request_level = explode(',', get_query_var('size'));
                $loc           = array();
                foreach ($request_level as $key => $value) {
                    $size = dakachi_get_size_by_slug($value);
                    $cat[] = $size['label'];
                }
                $level = implode(',', $cat);
                $title .= sprintf(__(" với quy mô %s", "jobplanet-themes"), $level);
            }
            return $title;
            wp_reset_query();
        }
    }

    return $title;
}
