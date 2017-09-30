<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Bo sung tinh nang dang luu field of operations
 */

/**
 * Add action init to remove action form handler
 */
function dakachi_change_edit_company_init()
{
    if (class_exists('Jeg_Company')) {
        $Jeg_Company = Jeg_Company::getInstance();
        remove_action('wp_loaded', array($Jeg_Company, 'form_handler'), 20);
        remove_filter('manage_company_posts_columns', array($Jeg_Company, 'company_columns'));
        remove_filter('build_company_seach_query', array($Jeg_Company, 'build_company_seach_query'), 10, 3);
    }
}
add_action('init', 'dakachi_change_edit_company_init');
/**
 * Company Post Type
 */

class Dakachi_Jeg_Company
{
    private static $instance;

    public static function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    public function __construct()
    {
        if (!session_id()) {
            session_start();
        }
        add_action('wp_loaded', array($this, 'form_handler'), 20);

        add_filter('manage_company_posts_columns', array($this, 'company_columns'), 20);
        add_action('manage_company_posts_custom_column', array($this, 'render_company_columns'), 2);
        add_filter('build_company_seach_query', array($this, 'build_company_seach_query'), 10, 3);

        add_action('restrict_manage_posts', array(&$this, 'restrict_manage_posts'), 12);
    }

    public function restrict_manage_posts()
    {
        if (isset($_REQUEST['post_type']) && $_REQUEST['post_type'] === 'company') {
            jeg_get_template_part('admin/filter-company-tag');
        }
    }

    public function company_columns($existing_columns)
    {
        if (empty($existing_columns) && !is_array($existing_columns)) {
            $existing_columns = array();
        }

        unset($existing_columns['comments'], $existing_columns['date']);

        $columns                     = array();
        $columns['cb']               = '<input type="checkbox" />';
        $columns['title']            = 'Company Name';
        $columns['company_industry'] = 'Industry';
        $columns['location']         = 'Location';
        $columns['posted']           = 'Posted';

        return array_merge($columns, $existing_columns);
    }

    public function render_company_columns($column)
    {
        global $post, $wpdb;

        switch ($column) {
            // case 'posted':
            //     echo '<strong>' . date_i18n(get_option('date_format'), strtotime($post->post_date)) . '</strong>';
            //     echo '<br/>' . sprintf(esc_html(__('đăng bởi %s', 'jobplanet-plugin')), '<a title="' . esc_html(__('Show job only from this user', 'jobplanet-plugin')) . '" href="' . esc_url(add_query_arg('author', $post->post_author)) . '">' . get_the_author() . '</a>');
            //     break;
            case 'company_industry':
                $categoryarray = array();
                $categories    = get_the_terms(get_the_ID(), 'company-industry');
                if ($categories) {
                    foreach ($categories as $category) {
                        $categoryarray[] = edit_term_link($category->name, '', '', $category, false);
                    }
                    echo implode(', ', $categoryarray);
                } else {
                    echo '&ndash;';
                }
                break;
            case 'location':
                $categoryarray = array();
                $categories    = get_the_terms(get_the_ID(), 'job-location');
                if ($categories) {
                    foreach ($categories as $category) {
                        $categoryarray[] = edit_term_link($category->name, '', '', $category, false);
                    }
                    echo implode(', ', $categoryarray);
                } else {
                    echo '&ndash;';
                }
                break;
        }
    }

    public function setup_endpoint($endpoint)
    {
        $endpoint['managecompany'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_manage_company', 'manage-company'), 'account_manage_company');
        $endpoint['createcompany'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_create_company', 'create-company'), 'account_create_company');
        $endpoint['editcompany']   = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_edit_company', 'edit-company'), 'account_edit_company');
        return $endpoint;
    }

    public function add_permastruct_post_type()
    {
        $slug = vp_option('joption.company_slug', 'company');
        add_permastruct('company', '/' . $slug . '/%company%', array(
            'with_front'  => false,
            'ep_mask'     => EP_NONE,
            'paged'       => false,
            'feed'        => false,
            'forcomments' => false,
            'walk_dirs'   => true,
            'endpoints'   => false,
        ));
    }

    public function resume_company_title($additional, $wp, $endpoint)
    {
        if (isset($wp->query_vars[$endpoint['createcompany']])) {
            $additional = esc_html(__('Create Company', 'jobplanet-plugin'));
        } elseif (isset($wp->query_vars[$endpoint['editcompany']])) {
            $additional = esc_html(__('Edit Company', 'jobplanet-plugin'));
        } elseif (isset($wp->query_vars[$endpoint['managecompany']])) {
            $additional = esc_html(__('Manage Company', 'jobplanet-plugin'));
        }
        return $additional;
    }

    public function template_company_employer($template, $wp, $endpoint)
    {
        if (isset($wp->query_vars[$endpoint['managecompany']])) {
            $template = jeg_get_template_part('account/company-list', null, null, false);
        }
        if (isset($wp->query_vars[$endpoint['createcompany']])) {
            $template = jeg_get_template_part('account/create-company', null, null, false);
        }
        if (isset($wp->query_vars[$endpoint['editcompany']])) {
            $this->get_company_id($wp, $endpoint);
            $template = jeg_get_template_part('account/edit-company', null, null, false);
        }

        return $template;
    }

    public function get_company_id($wp, $endpoint)
    {
        add_filter('jeg_company_id', function () use (&$wp, &$endpoint) {
            return $wp->query_vars[$endpoint['editcompany']];
        });
    }

    public function is_company_listing_page()
    {
        if (get_the_ID() == vp_option('joption.company_list_page')) {
            return true;
        }
        return false;
    }

    public function template_include($template)
    {
        if ($this->is_company_listing_page()) {
            $template = jeg_get_template_part('job/company-list', null, null, false);
        }

        return $template;
    }

    public function search_join_filter($where, &$wp_query)
    {
        global $wpdb;
        $keyword = false;
        if (get_query_var('search')) {
            $keyword = esc_sql(trim(get_query_var('search')));
        }
        if (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword'])) {
            $keyword = $_REQUEST['keyword'];
        }
        if ($keyword) {
            $where .= " AND ( {$wpdb->posts}.post_title LIKE '%" . esc_sql($wpdb->esc_like($keyword)) . "%'
                        OR {$wpdb->posts}.post_content LIKE '%" . esc_sql($wpdb->esc_like($keyword)) . "%' )";
        }
        return $where;
    }

    public function build_company_seach_query($result, $perpage, $currentpage)
    {
        $query = array(
            'post_status'    => 'publish',
            'post_type'      => 'company',
            'posts_per_page' => $perpage,
            'paged'          => $currentpage,
        );

        if (get_query_var( 'sortby') == 'popular') {
            $query['orderby'] = 'menu_order';
            $query['order'] = 'DESC';
        }

        $meta_query = array();
        $tax_query =  array();
        // filter by location
        if (!empty(get_query_var( 'size'))) {
            $tax_query[] = array(
                'taxonomy' => 'company-size',
                'field'    => 'slug',
                'terms'    => get_query_var( 'size'),
                // 'compare'  => 'IN',
            );
        }

        // filter by category
        if (!empty(get_query_var( 'type'))) {
            $tax_query[] = array(
                'taxonomy' => 'company-industry',
                'field'    => 'slug',
                'terms'    => get_query_var( 'type'),
                // 'compare'  => 'IN',
            );
        }

        // if (!empty(get_query_var( 'size'))) {
        //     $sizes = explode(',', get_query_var( 'size'));
        //     $query_size = array();
        //     foreach ($sizes as $value) {
        //         $size = dakachi_get_size_by_slug($value);
        //         $query_size[] = $size['value'];
        //     }

        //     $meta_query[] = array(
        //         'key'   => 'company_size',
        //         'compare'    => 'IN',
        //         'value' => $query_size,
        //     );
        // }

        if (!empty(get_query_var( 'tag'))) {
            $tax_query[] = array(
                'taxonomy' => 'company-tag',
                'field'    => 'slug',
                'terms'    => explode(',', get_query_var('tag')),
                // 'compare'  => 'IN',
            );
        }

        if (!empty(get_query_var( 'funding'))) {
            $tax_query[] = array(
                'taxonomy' => 'company-funding',
                'field'    => 'slug',
                'terms'    => get_query_var( 'funding'),
                // 'compare'  => 'IN',
            );
        }

        if(!empty($tax_query)) {
            $tax_query['relation'] = 'AND';
        }

        $query['tax_query'] = $tax_query;
        $query['meta_query'] = $meta_query;

        add_filter('posts_where', array(&$this, 'search_join_filter'), 10, 2);

        $result = new WP_Query($query);
        return $result;
    }

    public function form_handler()
    {
        if (isset($_POST['jeg_action']) && !empty($_POST['jobplanet_nonce']) && wp_verify_nonce($_POST['jobplanet_nonce'], 'jobplanet')) {
            $action = $_POST['jeg_action'];

            switch ($action) {
                case "create-company":
                    $this->create_company_handler();
                    break;
                case "edit-company":
                    $this->edit_company_handler();
                    break;
                case "delete-company":
                    $this->delete_company_handler();
                    break;
            }
        }
    }

    public function delete_company_handler()
    {
        $user_id    = get_current_user_id();
        $company_id = $_POST['company_id'];
        $company    = get_post($company_id);

        try {

            if ($company->post_type != 'company') {
                throw new Exception(esc_html(__('Invalid post type', 'jobplanet-plugin')));
            }

            if ($company->post_author != $user_id) {
                throw new Exception(esc_html(__('Unable to delete company', 'jobplanet-plugin')));
            }

            wp_delete_post($company_id);

            jeg_flash_message('message', esc_html(__('Company successfully deleted', 'jobplanet-plugin')), 'alert-success');

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function create_company_handler()
    {
        $user_id = get_current_user_id();

        try {
            if ($_POST['company_title'] === '') {
                throw new Exception(esc_html(__('Please enter your company name', 'jobplanet-plugin')));
            }

            $company_id = wp_insert_post(array(
                'post_title'   => sanitize_text_field($_POST['company_title']),
                'post_type'    => 'company',
                'post_status'  => 'publish',
                'post_author'  => $user_id,
                'post_content' => wp_kses_post($_POST['description']),
            ));

            if (is_wp_error($company_id)) {
                throw new Exception($company_id->get_error_message());
            } else {

                // update meta
                $fields = array('company_size', 'website', 'official_facebook', 'official_twitter', 'official_linked_in', 'official_instagram');
                foreach ($fields as $field) {
                    if (isset($_POST[$field])) {
                        update_post_meta($company_id, $field, sanitize_text_field($_POST[$field]));
                    }
                }
                update_post_meta($company_id, 'jobplanet_company_fields', $fields);

                // spoken_language, categories, dress code
                $taxonomies = array(
                    'spoken_language'     => 'company-language',
                    'categories'          => 'company-industry',
                    'field_of_operations' => 'field-of-operations',
                );
                foreach ($taxonomies as $field => $taxonomy) {
                    if (isset($_POST[$field])) {
                        wp_set_post_terms($company_id, $_POST[$field], $taxonomy);
                    }
                }

                // set logo as featured
                if (isset($_POST['company_logo'])) {
                    $logo_id = $_POST['company_logo'];
                    set_post_thumbnail($company_id, $logo_id);
                }

                // set parent to galleries
                if (isset($_POST['company_gallery'])) {
                    $counter   = 0;
                    $galleries = $_POST['company_gallery'];
                    foreach ($galleries as $gallery) {
                        wp_update_post(array(
                            'ID'          => $gallery,
                            'post_parent' => $company_id,
                            'menu_order'  => $counter++,
                        ));
                    }
                }

                if (isset($_POST['save_session']) && $_POST['save_session'] === '1') {
                    $_SESSION[Jeg_Job::SESSION_COMPANY] = $company_id;
                    if (isset($_SESSION[Jeg_Job::SESSION_JOB])) {
                        update_post_meta($_SESSION[Jeg_Job::SESSION_JOB], 'company_id', sanitize_text_field($company_id));
                    }
                }

                // redirect
                if ($_POST['with_flash_msg']) {
                    jeg_flash_message(
                        'message',
                        esc_html(__('New company detail successfully created', 'jobplanet-plugin')),
                        'alert-success'
                    );
                }

                $redirect = jeg_get_account_url('manage-company');
                if (isset($_REQUEST['redirect']) && !empty($_REQUEST['redirect'])) {
                    $redirect = $_REQUEST['redirect'];
                }
                wp_redirect($redirect);
                exit;

            }
        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function edit_company_handler()
    {
        $user_id    = get_current_user_id();
        $company_id = $_POST['company_id'];
        $company    = get_post($company_id);

        try {

            if ($company->post_type !== 'company') {
                throw new Exception(esc_html(__('Invalid post type', 'jobplanet-plugin')));
            }

            if ($company->post_author != $user_id) {
                throw new Exception(esc_html(__('Unable to edit resume', 'jobplanet-plugin')));
            }

            // edit post
            wp_update_post(array(
                'ID'           => $company_id,
                'post_content' => wp_kses_post($_POST['description']),
                'post_title'   => sanitize_text_field($_POST['company_title']),
            ));

            // update meta option
            $fields = array('company_size', 'website', 'official_facebook', 'official_twitter', 'official_linked_in', 'official_instagram');
            foreach ($fields as $field) {
                if (isset($_POST[$field])) {
                    update_post_meta($company_id, $field, sanitize_text_field($_POST[$field]));
                }
            }

            // spoken_language, categories, field of operation
            $taxonomies = array(
                'spoken_language'     => 'company-language',
                'categories'          => 'company-industry',
                'field_of_operations' => 'field-of-operations',
            );
            wp_delete_object_term_relationships($company_id, $taxonomies);

            foreach ($taxonomies as $field => $taxonomy) {
                if (isset($_POST[$field])) {
                    wp_set_post_terms($company_id, $_POST[$field], $taxonomy);
                }
            }

            // set logo as featured
            delete_post_thumbnail($company_id);
            if (isset($_POST['company_logo'])) {
                $logo_id = $_POST['company_logo'];
                set_post_thumbnail($company_id, $logo_id);
            }

            // set parent to galleries
            $company_gallery = get_children(array(
                'order'          => 'ASC',
                'orderby'        => 'menu_order',
                'post_parent'    => $company_id,
                'post_type'      => 'attachment',
                'post_mime_type' => 'image',
            ));

            $galleries = $this->company_gallery_modify($company_gallery, $_POST['company_gallery']);
            if ($galleries) {
                $counter = 0;
                foreach ($galleries as $gallery) {
                    wp_update_post(array(
                        'ID'          => $gallery,
                        'post_parent' => $company_id,
                        'menu_order'  => $counter++,
                    ));
                }
            }

            // redirect
            jeg_flash_message('message', esc_html(__('Company record successfully edited', 'jobplanet-plugin')), 'alert-success');

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function company_gallery_modify($oldgallery, $newgallery)
    {
        foreach ($oldgallery as $gallery) {
            if (!in_array($gallery->ID, $newgallery)) {
                // remove gallery
                wp_delete_attachment($gallery->ID, true);
                jeg_array_delete($newgallery, $gallery->ID);
            }
        }

        return $newgallery;
    }
}

Dakachi_Jeg_Company::getInstance();
