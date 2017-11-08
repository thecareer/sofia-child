<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
require('simple_html_dom.php');

/**
 * Add action init to remove action form handler
 */
function dakachi_change_create_edit_job_init()
{
    if (class_exists('Jeg_Job')) {
        $Jeg_Job = Jeg_Job::getInstance(); 
        remove_action('wp_loaded', array($Jeg_Job, 'form_handler'), 20);
        remove_filter('build_job_seach_query', array($Jeg_Job, 'build_job_seach_query'), 10, 3);
        remove_filter('post_row_actions', array($Jeg_Job, 'post_row_actions'), 10, 2);
        remove_filter('manage_job_posts_columns', array($Jeg_Job, 'job_columns'));
    }
}
add_action('init', 'dakachi_change_create_edit_job_init');

/**
 * Review Post Type
 */

class Dakachi_Jeg_Job
{
    private $job_endpoint;
    const SESSION_PACKAGE = 'selected_package';
    const SESSION_JOB     = 'create_vacancy_job';
    const SESSION_COMPANY = 'create_vacancy_company';

    // create-vacancy, choose-package
    const SESSION_CHANNEL = 'select_package_channel';

    public function __construct()
    {
        if (!session_id()) {
            session_start();
        }
        add_action('wp_loaded', array($this, 'form_handler'), 20);
        add_filter('build_job_seach_query', array($this, 'build_job_seach_query'), 10, 3);
        add_filter('manage_job_posts_columns', array($this, 'job_columns'));

        add_action('restrict_manage_posts', array(&$this, 'restrict_manage_posts'), 12);
        add_action( 'save_post', array($this, 'published_to_draft'));
    }

    public function post_row_actions($actions, $post)
    {
        if ($post && 'job' == $post->post_type) {
            return array();
        }
        return $actions;
    }

    public function search_title_filter($where)
    {
        global $wpdb;
        if (isset($_REQUEST['keyword']) && $search_term = $_REQUEST['keyword']) {
            $where .= " AND ( {$wpdb->posts}.post_title LIKE '%" . esc_sql($wpdb->esc_like(trim($search_term))) . "%' OR {$wpdb->posts}.post_content LIKE '%" . esc_sql($wpdb->esc_like(trim($search_term))) . "%' ) ";
        }
        return $where;
    }

    public function search_join_salary_filter($join)
    {
        global $wpdb;

        if (
            isset($_REQUEST['min_salary']) && isset($_REQUEST['max_salary']) && isset($_REQUEST['salary_range'])
            && !empty($_REQUEST['min_salary']) && $_REQUEST['min_salary'] > 0
            && !empty($_REQUEST['max_salary']) && $_REQUEST['max_salary'] > 0
        ) {
            $minsalary   = esc_sql($_REQUEST['min_salary']);
            $maxsalary   = esc_sql($_REQUEST['max_salary']);
            $rangesalary = esc_sql($_REQUEST['salary_range']);

            $bottomtable =
                "SELECT {$wpdb->posts}.ID, {$wpdb->postmeta}.meta_value as bottom
                    FROM {$wpdb->posts}
                LEFT JOIN {$wpdb->postmeta} ON {$wpdb->posts}.ID = {$wpdb->postmeta}.post_id
                WHERE {$wpdb->postmeta}.meta_key = 'salary_bottom'";

            $toptable =
                "SELECT {$wpdb->posts}.ID, {$wpdb->postmeta}.meta_value as top
                    FROM {$wpdb->posts}
                LEFT JOIN {$wpdb->postmeta} ON {$wpdb->posts}.ID = {$wpdb->postmeta}.post_id
                WHERE {$wpdb->postmeta}.meta_key = 'salary_top'";

            $rangetable =
                "SELECT {$wpdb->posts}.ID, {$wpdb->postmeta}.meta_value as metarange
                    FROM {$wpdb->posts}
                LEFT JOIN {$wpdb->postmeta} ON {$wpdb->posts}.ID = {$wpdb->postmeta}.post_id
                WHERE {$wpdb->postmeta}.meta_key = 'salary_range'";

            if (!empty($rangesalary)) {
                $select =
                    "SELECT bottomtable.ID FROM ( $bottomtable ) as bottomtable
                     LEFT JOIN ( $toptable ) as toptable ON bottomtable.ID = toptable.ID
                     LEFT JOIN ( $rangetable ) as rangetable ON bottomtable.ID = rangetable.ID
                     WHERE
                        (( bottom BETWEEN $minsalary and $maxsalary )
                        OR ( top BETWEEN $minsalary and $maxsalary )
                        OR ( bottom <= $minsalary AND top >= $maxsalary ))
                        AND metarange = '$rangesalary'";
            } else {
                $select =
                    "SELECT bottomtable.ID FROM ( $bottomtable ) as bottomtable
                     LEFT JOIN ( $toptable ) as toptable ON bottomtable.ID = toptable.ID
                     WHERE
                        (( bottom BETWEEN $minsalary and $maxsalary )
                        OR ( top BETWEEN $minsalary and $maxsalary )
                        OR ( bottom <= $minsalary AND top >= $maxsalary ))";
            }

            $join .= " RIGHT JOIN ( $select ) as salarytable  on salarytable.ID = $wpdb->posts.ID ";
        }
        return $join;
    }

    public function search_join_location($join)
    {
        global $wpdb;

        if (isset($_REQUEST['place']) && !empty($_REQUEST['place'])) {
            $place  = explode(',', $_REQUEST['place']);
            $places = array();

            $places[]  = esc_sql(trim($place[0]));
            $term      = get_term_by('name', $places[0], 'job-location');
            $termchild = get_term_children($term->term_id, 'job-location');

            if ($termchild) {
                foreach ($termchild as $child) {
                    $term     = get_term($child);
                    $places[] = $term->name;
                }
            }

            $placestringarray = array();
            foreach ($places as $place) {
                $placestringarray[] = " {$wpdb->terms}.name like '%" . trim($place) . "%' ";
            }

            $placestring = " ( " . implode(' OR ', $placestringarray) . " ) ";

            $select =
                "SELECT {$wpdb->posts}.ID
                    FROM {$wpdb->posts}
                INNER JOIN {$wpdb->term_relationships} ON {$wpdb->posts}.ID = {$wpdb->term_relationships}.object_id
                INNER JOIN {$wpdb->terms} ON {$wpdb->terms}.term_id = {$wpdb->term_relationships}.term_taxonomy_id
                INNER JOIN {$wpdb->term_taxonomy} on {$wpdb->terms}.term_id = {$wpdb->term_taxonomy}.term_taxonomy_id
                  WHERE {$placestring}
                  AND {$wpdb->term_taxonomy}.taxonomy = 'job-location'
              ";

            $join .= " RIGHT JOIN ( $select ) as loctable  on loctable.ID = $wpdb->posts.ID ";
        }

        return $join;
    }

    public function search_join_filter($join)
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
            $tag_query = $tag_where = '';

            // normal query
            $normalselect = "SELECT {$wpdb->posts}.ID FROM  {$wpdb->posts}";

            $whereselect =
            " {$wpdb->posts}.post_title LIKE '%" . esc_sql($wpdb->esc_like(trim($keyword))) . "%'
                OR {$wpdb->posts}.post_content LIKE '%" . esc_sql($wpdb->esc_like(trim($keyword))) . "%'
                $tag_where";

            $select = $normalselect . $tag_query . " WHERE " . $whereselect;

            $join .= " INNER JOIN ( $select ) as keywordtable  on keywordtable.ID = $wpdb->posts.ID ";
        }

        return $join;
    }

    public function build_job_seach_query($result, $perpage, $currentpage)
    {
        $tax_query  = array('relation' => 'AND');
        $meta_query = array('relation' => 'AND');

        $query = array(
            'post_status'    => 'publish',
            'post_type'      => 'job',
            'posts_per_page' => $perpage,
            'paged'          => $currentpage,
        );

        if (get_query_var('sortby') == 'popular') {
            $query['orderby'] = 'menu_order';
            $query['order']   = 'DESC';
        }

        if (vp_option('joption.enable_job_featured_sorting', 0)) {
            $query['orderby']  = array('meta_value' => 'DESC', 'date' => 'DESC');
            $query['meta_key'] = 'featured';
        }

        // filter by keyword
        // add_filter('posts_join', array(&$this, 'search_join_filter'));

        // filter by location
        if (!empty(get_query_var('location'))) {
            $tax_query[] = array(
                'taxonomy' => 'job-location',
                'field'    => 'slug',
                'terms'    => get_query_var('location'),
                // 'compare'  => 'IN',
            );
        }

        if (!empty(get_query_var('level'))) {
            $tax_query[] = array(
                'taxonomy' => 'job_level',
                'field'    => 'slug',
                'terms'    => get_query_var('level'),
                // 'compare'  => 'IN',
            );
        }

        if (!empty(get_query_var('category'))) {
            $tax_query[] = array(
                'taxonomy' => 'job-category',
                'field'    => 'slug',
                'terms'    => get_query_var('category'),
                // 'compare'  => 'IN',
            );
        }

        // filter by type
        if (!empty(get_query_var('type'))) {
            $tax_query[] = array(
                'taxonomy' => 'job-type',
                'field'    => 'slug',
                'terms'    => get_query_var('type'),
                // 'compare'  => 'IN',
            );
        }
        $keyword = '';
        if (get_query_var('search')) {
            $keyword = esc_sql(trim(get_query_var('search')));
        }
        if (isset($_REQUEST['keyword']) && !empty($_REQUEST['keyword'])) {
            $keyword = $_REQUEST['keyword'];
        }

        if($keyword != '') {
            $query['s'] = $keyword;
        }
        // filter salary
        // add_filter('posts_join', array(&$this, 'search_join_salary_filter'));

        // filter location
        // add_filter('posts_join', array(&$this, 'search_join_location'));

        if(!empty($tax_query)) {
            $tax_query['relation'] = 'AND';
        }

        $query['tax_query']  = $tax_query;
        $query['meta_query'] = $meta_query;

        $result = new WP_Query($query);
        // jlog($result->request);
        return $result;
    }

    public function filter_backend($query)
    {
        if (!is_admin()) {
            return;
        }

        if (isset($query->query_vars['post_type']) && $query->query_vars['post_type'] === 'job') {
            // Query Relation
            $meta_query = array('relation' => 'AND');
            $tax_query  = array('relation' => 'AND');

            // company
            if (isset($_REQUEST['company_id']) && !empty($_REQUEST['company_id'])) {
                $company      = $_REQUEST['company_id'];
                $meta_query[] = array(
                    'key'     => 'company_id',
                    'value'   => $company,
                    'compare' => 'IN',
                );
            }

            // status
            if (isset($_REQUEST['status']) && !empty($_REQUEST['status'])) {
                $status = $_REQUEST['status'];
                $query->set('post_status', $status);
            }

            $query->tax_query->queries[]       = $tax_query;
            $query->query_vars['meta_query'][] = $meta_query;
        }
    }

    public function restrict_manage_posts()
    {
        if (isset($_REQUEST['post_type']) && $_REQUEST['post_type'] === 'job') {
            jeg_get_template_part('admin/filter-job-tag');
        }
    }

    public function job_columns($existing_columns)
    {
        if (empty($existing_columns) && !is_array($existing_columns)) {
            $existing_columns = array();
        }
        $existing_columns['title'] = 'Position';
        unset($existing_columns['comments'], $existing_columns['date'], $existing_columns['author']);
        $columns         = array();
        $columns['cb']   = '<input type="checkbox" />';
        $columns['type'] = 'Type';
        // $columns['position']  = 'Position';
        $columns['jobcategory'] = 'Job Categories';
        $columns['posted']      = 'Posted';
        $columns['closing']     = 'Closing';
        $columns['company']     = 'Company';
        $columns['application'] = 'Application';
        $columns['status']      = 'Status';
        $columns['action']      = 'Actions';

        return array_merge($existing_columns, $columns);
    }

    public function render_job_columns($column)
    {
        global $post, $wpdb;

        switch ($column) {
            case 'type':
                $jobtype = get_the_terms($post->ID, 'job-type');
                if (!empty($jobtype)) {
                    $jobtype = $jobtype[0];
                    edit_term_link($jobtype->name, '<span class="edit-term-link ' . $jobtype->slug . '" title="' . esc_html(__('Edit Job type', 'jobplanet-plugin')) . '">', '</span>', $jobtype);
                }
                break;
            case 'position':
                echo '<div>';
                echo '<a href="' . get_edit_post_link($post->ID) . '" title="' . esc_html(__('Edit job details', 'jobplanet-plugin')) . '">' . $post->post_title . '</a>';

                $location = get_the_terms($post->ID, 'job-location');
                if (!empty($location)) {
                    echo '<br/><strong>' . esc_html(__('located at ', 'jobplanet-plugin')) . edit_term_link($location[0]->name, '', '', $location[0], false) . '</strong>';
                }
                echo '</div>';
                break;
            case 'jobcategory':
                $categoryarray = array();
                $categories    = get_the_terms($post->ID, 'job-category');
                if ($categories) {
                    foreach ($categories as $category) {
                        $categoryarray[] = edit_term_link($category->name, '', '', $category, false);
                    }
                    echo implode(', ', $categoryarray);
                } else {
                    echo '&ndash;';
                }
                break;
            case 'posted':
                echo '<strong>' . date_i18n(get_option('date_format'), strtotime($post->post_date)) . '</strong>';
                echo '<br/>' . sprintf(esc_html(__('by %s', 'jobplanet-plugin')), '<a title="' . esc_html(__('Show job only from this user', 'jobplanet-plugin')) . '" href="' . esc_url(add_query_arg('author', $post->post_author)) . '">' . get_the_author() . '</a>');
                break;
            case 'closing':
                echo '<strong>' . date_i18n(get_option('date_format'), strtotime(vp_metabox('jobplanet_job.closing', null, $post->ID))) . '</strong>';
                break;
            case 'company':
                $company = vp_metabox('jobplanet_job.company_id', null, $post->ID);
                echo '<a href="' . get_edit_post_link($company) . '" title="' . esc_html(__('Edit this company detail', 'jobplanet-plugin')) . '">' . get_the_title($company) . '</a>';
                break;
            case 'application':
                $application_count = $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type = 'application' AND post_parent = {$post->ID}");
                if ($application_count > 0) {
                    $url_args         = array('s' => '', 'post_status' => 'all', 'post_type' => 'application', 'job' => $post->ID, 'action' => -1, 'action2' => -1);
                    $application_link = esc_url(add_query_arg($url_args, admin_url('edit.php')));
                    echo '<strong><a href="' . $application_link . '">' . $application_count . '</a></strong>';
                } else {
                    echo '&ndash;';
                }
                break;
            case 'status':
                echo esc_html(jeg_get_status($post->post_status, $this->get_status()));
                break;
            case 'action':
                echo '<div class="actions">';
                $admin_actions = array();
                if (in_array($post->post_status, array('pending', 'preview')) && current_user_can('publish_post', $post->ID)) {
                    $url                      = admin_url('admin-ajax.php?jeg_action=job-approve&job_id=' . $post->ID . '&jobplanet_nonce=' . wp_create_nonce('jobplanet'));
                    $admin_actions['approve'] = array(
                        'action' => 'approve',
                        'name'   => esc_html(__('Approve', 'jobplanet-plugin')),
                        'url'    => $url,
                        'icon'   => 'yes',
                    );
                }
                if ($post->post_status !== 'trash') {
                    if (current_user_can('read_post', $post->ID)) {
                        $admin_actions['view'] = array(
                            'action' => 'view',
                            'name'   => esc_html(__('View', 'jobplanet-plugin')),
                            'url'    => get_permalink($post->ID),
                            'icon'   => 'visibility',
                        );
                    }
                    if (current_user_can('edit_post', $post->ID)) {
                        $admin_actions['edit'] = array(
                            'action' => 'edit',
                            'name'   => esc_html(__('Edit', 'jobplanet-plugin')),
                            'url'    => get_edit_post_link($post->ID),
                            'icon'   => 'edit',
                        );
                    }
                    if (current_user_can('delete_post', $post->ID)) {
                        $admin_actions['delete'] = array(
                            'action' => 'delete',
                            'name'   => esc_html(__('Delete', 'jobplanet-plugin')),
                            'url'    => get_delete_post_link($post->ID),
                            'icon'   => 'trash',
                        );
                    }
                }

                foreach ($admin_actions as $action) {
                    printf('<a class="button tips icon-%1$s" href="%2$s" data-tip="%3$s">%4$s</a>', $action['action'], esc_url($action['url']), esc_attr($action['name']), '<i class="dashicons dashicons-' . $action['icon'] . '"></i>');
                }

                echo '</div>';
                break;
        }
    }

    public function clear_session()
    {
        foreach (array(self::SESSION_COMPANY, self::SESSION_JOB, self::SESSION_PACKAGE) as $session) {
            unset($_SESSION[$session]);
        }
    }

    public function vacancy_step()
    {
        if (JOBPLANET_STANDALONE) {
            $step = array(
                'register' => 1,
                'login'    => 1,
                'company'  => 3,
                'vacancy'  => 2,
                'review'   => 4,
            );

            $sequence = vp_option('joption.vacancy_sequence', array(
                '0' => 'company',
                '1' => 'vacancy',
            ));

            if (($key = array_search('package', $sequence)) !== false) {
                unset($sequence[$key]);
            }

            $sequence = array_flip(array_values($sequence));

            foreach ($sequence as $key => $value) {
                $step[$key] = $value + 2;
            }

            return $step;
        } else {
            $step = array(
                'register' => 1,
                'login'    => 1,
                'company'  => 4,
                'vacancy'  => 3,
                'package'  => 2,
                'review'   => 5,
            );

            $sequence = array_flip(vp_option('joption.vacancy_sequence', array(
                '0' => 'company',
                '1' => 'vacancy',
                '2' => 'package',
            )));

            foreach ($sequence as $key => $value) {
                $step[$key] = $value + 2;
            }

            return $step;
        }
    }

    public function vacancy_step_flip()
    {
        return array_flip($this->vacancy_step());
    }

    public function vacancy_step_word()
    {
        return array(
            'login'    => esc_html(__('Login', 'jobplanet-plugin')),
            'register' => esc_html(__('Register', 'jobplanet-plugin')),
            'company'  => esc_html(__('Company', 'jobplanet-plugin')),
            'vacancy'  => esc_html(__('Vacancy', 'jobplanet-plugin')),
            'package'  => esc_html(__('Package', 'jobplanet-plugin')),
            'review'   => esc_html(__('Review', 'jobplanet-plugin')),
        );
    }

    public function setup_job_endpoint($endpoint)
    {
        $endpoint['joblist'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_job_list', 'job-list'), 'account_job_list');
        $endpoint['editjob'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_edit_job', 'edit-job'), 'account_edit_job');
        return $endpoint;
    }

    public function job_additional_title($additional, $wp, $endpoint)
    {
        if (isset($wp->query_vars[$endpoint['joblist']])) {
            $additional = esc_html(__('Job List', 'jobplanet-plugin'));
        } elseif (isset($wp->query_vars[$endpoint['editjob']])) {
            $additional = esc_html(__('Edit Job', 'jobplanet-plugin'));
        } elseif (isset($wp->query_vars[$endpoint['managepackage']])) {
            $additional = esc_html(__('Manage Package', 'jobplanet-plugin'));
        } elseif (isset($wp->query_vars[$endpoint['choosepackage']])) {
            $additional = esc_html(__('Choose Package', 'jobplanet-plugin'));
        }

        return $additional;
    }

    public function template_job_employer($template, $wp, $endpoint)
    {
        if (isset($wp->query_vars[$endpoint['joblist']])) {
            $template = jeg_get_template_part('account/job-list', null, null, false);
        }
        if (isset($wp->query_vars[$endpoint['editjob']])) {
            $this->get_job_id($wp, $endpoint);
            $template = jeg_get_template_part('account/edit-job', null, null, false);
        }
        if (isset($wp->query_vars[$endpoint['managepackage']])) {
            $template = jeg_get_template_part('account/manage-package', null, null, false);
        }
        if (isset($wp->query_vars[$endpoint['choosepackage']])) {
            $template = jeg_get_template_part('account/choose-package', null, null, false);
        }

        return $template;
    }

    public function get_job_id($wp, $endpoint)
    {
        add_filter('jeg_job_id', function () use (&$wp, &$endpoint) {
            return $wp->query_vars[$endpoint['editjob']];
        });
    }

    public function account_title($title)
    {
        if ($this->is_create_job_page()) {
            $split = $title;

            global $wp;
            foreach ($this->vacancy_step_word() as $key => $value) {
                if (isset($wp->query_vars[$this->job_endpoint[$key]])) {
                    $additional = $value;
                }
            }

            global $wp_query;
            $split['title'] = $wp_query->queried_object->post_title;

            if (!empty($additional)) {
                $title['title'] = $additional . ' &#8250; ' . $split['title'];
            }
        }

        return $title;
    }

    public function form_handler()
    {
        if (isset($_REQUEST['jeg_action']) && !empty($_REQUEST['jobplanet_nonce']) && wp_verify_nonce($_REQUEST['jobplanet_nonce'], 'jobplanet')) {
            $action = $_REQUEST['jeg_action'];

            switch ($action) {
                case "choose-company":
                    $this->choose_company_handler();
                    break;
                case "create-job";
                    $this->create_job_handler();
                    break;
                case "edit-job";
                    $this->edit_job_handler();
                    break;
                case "delete-job";
                    $this->delete_job_handler();
                    break;
                case "add-package":
                    $this->add_package();
                    break;
                case "publish-vacancy":
                    $this->publish_vacancy();
                    break;
                case "job-approve":
                    $this->approve_job();
                    break;
            }
        }
    }

    public function get_product_type($id)
    {
        $product_type = wp_get_post_terms($id, 'product_type');
        return $product_type[0]->slug;
    }

    public function publish_vacancy()
    {
        if ($this->user_has_active_package()) {
            $job_id = $_SESSION[self::SESSION_JOB];
            $this->change_job_status($job_id);
            $this->reduce_listing_left($job_id);
            $this->clear_session();

            $vacancy_review = vp_option('joption.vacancy_review', 'no-review');

            if ($vacancy_review === 'no-review') {
                jeg_flash_message('message', esc_html(__('New Job Vacancy Successfully Created', 'jobplanet-plugin')), 'alert-success');
                $redirect = get_permalink($job_id);
            } else {
                jeg_flash_message('message', esc_html(__('New Job Vacancy successfully created, Your Job Vacancy need to be reviewed prior to being published', 'jobplanet-plugin')), 'alert-success');
                $redirect = jeg_get_account_url('job-list');
            }
            wp_redirect($redirect);
            exit;
        } else {
            jeg_flash_message('message', esc_html(__('You currently don\'t have any active package', 'jobplanet-plugin')), 'alert-danger');
        }
    }

    public function package_checkout($order_id)
    {
        // set job id, and enable when order has been paid
        if (isset($_SESSION[self::SESSION_JOB])) {

            if ($_SESSION[self::SESSION_CHANNEL] === 'create-vacancy') {
                update_post_meta($order_id, 'job_id', $_SESSION[self::SESSION_JOB]);
                $this->clear_session();
            } else if ($_SESSION[self::SESSION_CHANNEL] === 'choose-package') {
                delete_post_meta($order_id, 'job_id');
            }
        }

    }

    public function order_paid($order_id)
    {
        $order = new WC_Order($order_id);

        if (get_post_meta($order_id, 'job_package_processed', true)) {
            return;
        }

        foreach ($order->get_items() as $item) {
            $product = wc_get_product($item['product_id']);

            if ($product->is_type('job_package') && $order->customer_user) {
                $user_id = $order->customer_user;

                $package = array(
                    'order_id'      => $order_id,
                    'product_id'    => $product->id,
                    'job_duration'  => absint($product->get_listing_duration()),
                    'job_limit'     => absint($product->get_listing_limit()),
                    'job_featured'  => absint($product->get_feature_job()),
                    'search_resume' => $product->can_view_resume(),
                );

                if ($this->allow_purchase($product->id, $user_id)) {
                    $job_id = get_post_meta($order_id, 'job_id', true);
                    $this->update_user_package($package, $user_id);
                    $this->reduce_listing_left($job_id);
                    $this->change_job_status($job_id);
                }
            }
        }
        update_post_meta($order_id, 'job_package_processed', true);
    }

    public function change_job_status($job_id, $force_publish = false)
    {
        $job = get_post($job_id);

        if ($job && $job->post_type === 'job') {
            $vacancy_review = vp_option('joption.vacancy_review', 'no-review');

            if ($vacancy_review === 'no-review' || $force_publish) {
                wp_update_post(array(
                    'ID'            => $job_id,
                    'post_status'   => 'publish',
                    'post_date'     => current_time('mysql'),
                    'post_date_gmt' => current_time('mysql', 1),
                ));
                $this->set_job_expire($job_id);
            } else {
                wp_update_post(array(
                    'ID'          => $job_id,
                    'post_status' => 'pending',
                ));
            }
        }
    }

    public function approve_job()
    {
        if (!current_user_can('edit_posts')) {
            wp_die(esc_html(__('You do not have sufficient permissions to access this page.', 'jobplanet-plugin')), '', array('response' => 403));
        }

        $job_id = $_REQUEST['job_id'];
        $job    = get_post($job_id);

        if ($job && $job->post_type === 'job') {
            wp_update_post(array(
                'ID'            => $job_id,
                'post_status'   => 'publish',
                'post_date'     => current_time('mysql'),
                'post_date_gmt' => current_time('mysql', 1),
            ));
            wp_safe_redirect(esc_url_raw(remove_query_arg(array('trashed', 'untrashed', 'deleted', 'ids'), wp_get_referer())));
        } else {
            die;
        }

    }

    public function reduce_listing_left($job_id)
    {
        if (!JOBPLANET_STANDALONE) {
            $flag = get_post_meta($job_id, 'finish_process', true);

            if (!$flag) {
                $job = get_post($job_id);
                if ($job && $job->post_type === 'job') {
                    $user_id = $job->post_author;

                    $featured = vp_metabox('jobplanet_job.featured', null, $job_id);
                    if ($featured) {
                        $job_feature = get_user_meta($user_id, 'feature_left', true);
                        if ($job_feature > 0) {
                            update_user_meta($user_id, 'feature_left', $job_feature - 1);
                        }
                    }

                    $job_limit = get_user_meta($user_id, 'listing_left', true);
                    if ($job_limit > 0) {
                        update_user_meta($user_id, 'listing_left', $job_limit - 1);
                        update_post_meta($job_id, 'finish_process', true);
                    }
                }
            }
        }
    }

    public function job_status_change($new_status, $old_status, $job)
    {
        if ($job && $job->post_type === 'job') {
            if ($new_status === 'publish') {
                $this->set_job_expire($job);
            }
        }
    }

    public function set_job_expire($job)
    {
        if ($job instanceof WP_Post) {
            $job_id = $job->ID;
        } else {
            $job    = get_post($job);
            $job_id = $job->ID;
        }

        if ($job && $job->post_type === 'job') {
            $user_id      = $job->post_author;
            $job_duration = get_user_meta($user_id, 'job_duration', true);
            $expire       = strtotime('+' . absint($job_duration) . ' days');
            //update_post_meta($job_id, 'expire', gmdate("Y-m-d", $expire));
        }
    }

    public function update_user_package($package, $user_id)
    {
        $product = wc_get_product($package['product_id']);

        // order
        update_user_meta($user_id, 'order', $package['order_id']);

        // product
        update_user_meta($user_id, 'product', $package['product_id']);

        // add job limit
        $job_limit = get_user_meta($user_id, 'listing_left', true);
        update_user_meta($user_id, 'listing_left', ($package['job_limit'] + $job_limit));

        // add featured job
        $feature_job = get_user_meta($user_id, 'feature_left', true);
        update_user_meta($user_id, 'feature_left', ($package['job_featured'] + $feature_job));

        // replace job duration
        update_user_meta($user_id, 'job_duration', $package['job_duration']);

        // can view resume
        update_user_meta($user_id, 'search_resume', $package['search_resume']);

        // flag free
        if ($product->get_price() == 0) {
            update_user_meta($user_id, 'bought_free', true);
        }
    }

    public function allow_purchase($product_id, $user_id = null)
    {
        if ($user_id === null) {
            $user_id = get_current_user_id();
        }

        $product     = wc_get_product($product_id);
        $bought_free = get_user_meta($user_id, 'bought_free', true);

        if ($product->is_type('job_package')) {
            if (vp_option('joption.allow_repurchase_free', 0)) {
                return true;
            } else {
                if ($bought_free == 1 && $product->get_price() == 0) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return true;
        }
    }

    public function product_added($cart_item_key, $product_id)
    {

        if ($this->allow_purchase($product_id)) {
            foreach (WC()->cart->get_cart() as $key => $cart_item) {
                if ($cart_item['data']->product_type === 'job_package') {
                    if ($product_id == $cart_item['product_id']) {
                        WC()->cart->set_quantity($key, 1);
                    } else {
                        WC()->cart->set_quantity($key, 0);
                    }
                }
            }
        } else {
            WC()->cart->set_quantity($cart_item_key, 0);
        }

        return $cart_item_key;
    }

    public static function user_has_active_package()
    {
        if (JOBPLANET_STANDALONE) {
            return true;
        } else {
            $user_id      = get_current_user_id();
            $listing_left = get_user_meta($user_id, 'listing_left', true);
            if (isset($listing_left) && $listing_left > 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    public static function need_buy_featured_package()
    {
        $job_id = $_SESSION[self::SESSION_JOB];
        if ($job_id) {
            $featured = vp_metabox('jobplanet_job.featured', null, $job_id);
            if ($featured) {
                if (self::user_has_active_package()) {
                    $user_id      = get_current_user_id();
                    $feature_left = get_user_meta($user_id, 'feature_left', true);

                    if (isset($feature_left) && $feature_left > 0) {
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    public static function package_has_featured()
    {
        if (self::need_buy_featured_package()) {
            if (isset($_SESSION[self::SESSION_PACKAGE])) {
                $cart_key = $_SESSION[self::SESSION_PACKAGE];
                if ($cart_key) {
                    $cart = WC()->cart->get_cart();
                    if (isset($cart[$cart_key])) {
                        $cart_item  = $cart[$cart_key];
                        $product_id = $cart_item['product_id'];
                        $package    = wc_get_product($product_id);

                        $featured = $package->get_feature_job();
                        if ($featured) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }

        return false;
    }

    public function add_package()
    {
        $product_id = $_POST['package_id'];
        $product    = get_post($product_id);

        try {
            if ($product->post_type !== 'product') {
                throw new Exception(esc_html(__('Not a Product', 'jobplanet-plugin')));
            }

            if (!$this->allow_purchase($product_id)) {
                throw new Exception(esc_html(__('Free product only purchasable once', 'jobplanet-plugin')));
            } else {
                $cart_key = WC()->cart->add_to_cart($product_id);

                if (empty($cart_key)) {
                    foreach (WC()->cart->get_cart() as $key => $cart) {
                        if ($cart['data']->product_type === 'job_package') {
                            $cart_key = $key;
                            break;
                        }
                    }
                }

                $_SESSION[self::SESSION_PACKAGE] = $cart_key;
                $_SESSION[self::SESSION_CHANNEL] = 'create-vacancy';
                $redirect                        = jeg_create_job_next_url('package');

                if ($_POST['redirect_checkout']) {
                    $redirect                        = wc_get_checkout_url();
                    $_SESSION[self::SESSION_CHANNEL] = 'choose-package';
                }
                wp_redirect($redirect);
                exit;
            }

        } catch (Exception $e) {
            jeg_flash_message('message', $e->getMessage(), 'alert-danger');
        }
    }

    public function delete_job_handler()
    {
        $user_id = get_current_user_id();
        $job_id  = $_POST['job_id'];
        $job     = get_post($job_id);

        try {

            if ($job->post_type != 'job') {
                throw new Exception(esc_html(__('Invalid post type', 'jobplanet-plugin')));
            }

            if ($job->post_author != $user_id) {
                throw new Exception(esc_html(__('Unable to delete job vacancy', 'jobplanet-plugin')));
            }

            wp_delete_post($job_id);

            jeg_flash_message('message', esc_html(__('Job successfully deleted', 'jobplanet-plugin')), 'alert-success');

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function edit_job_handler()
    {
        $user_id = get_current_user_id();
        $job_id  = $_POST['job_id'];
        $job     = get_post($job_id);

        try {

            if (empty($_POST['job_title'])) {
                throw new Exception(esc_html(__('Job title cannot be empty', 'jobplanet-plugin')));
            }

            if (!isset($_POST['categories'])) {
                throw new Exception(esc_html(__('You should choose at least one job category', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_bottom']) || empty($_POST['salary_bottom'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_top']) || empty($_POST['salary_top'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_range']) || empty($_POST['salary_range'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            if ($job->post_type !== 'job') {
                throw new Exception(esc_html(__('Invalid post type', 'jobplanet-plugin')));
            }

            if ($job->post_author != $user_id) {
                throw new Exception(esc_html(__('Invalid User', 'jobplanet-plugin')));
            }

            // wp_update_post(array(
            //     'ID'            => $job_id,
            //     'post_content'  => wp_kses_post($_POST['description']),
            //     'post_title'    => sanitize_text_field($_POST['job_title'])
            // ));

            update_post_meta($job_id, 'pending_job_description', wp_kses_post($_POST['description']));
            update_post_meta($job_id, 'pending_job_title', sanitize_text_field($_POST['job_title']));
            update_post_meta($job_id, '_waiting_approve', 1);

            if (!isset($_POST['featured'])) {
                $_POST['featured'] = 0;
            }

            // update meta
            $fields = array('company_id', 'featured', 'application_email', 'salary_bottom', 'salary_top', 'salary_range', 'address', 'map_location', 'address', 'closing', 'expire');

            if (str_replace('.', '', $_POST['salary_bottom']) > str_replace('.', '', $_POST['salary_top'])) {
                $salarybottom           = $_POST['salary_bottom'];
                $_POST['salary_bottom'] = $_POST['salary_top'];
                $_POST['salary_top']    = $salarybottom;
            }

            foreach ($fields as $field) {
                if (isset($_POST[$field])) {
                    if ($field === 'salary_bottom' || $field === 'salary_top') {
                        $_POST[$field] = str_replace('.', '', $_POST[$field]);
                    }
                    update_post_meta($job_id, $field, sanitize_text_field($_POST[$field]));
                }
            }

            // spoken_language, categories, location
            $taxonomies = array(
                'job_type'   => 'job-type',
                'categories' => 'job-category',
                'location'   => 'job-location',
                'job_skill'  => 'job-skill',
                'levels'     => 'job_level',
            );
            wp_delete_object_term_relationships($job_id, $taxonomies);

            foreach ($taxonomies as $field => $taxonomy) {
                if (isset($_POST[$field])) {
                    wp_set_post_terms($job_id, $_POST[$field], $taxonomy);
                }
            }

            // create additional location
            if (isset($_POST['add_location']) && !empty($_POST['add_location'])) {
                $location_id = wp_insert_term($_POST['add_location'], 'job-location');
                wp_set_post_terms($job_id, $location_id, 'job-location');
            }

            if (isset($_POST['is_create_vacancy']) && $_POST['is_create_vacancy'] == '1') {
                if (isset($_SESSION[self::SESSION_COMPANY])) {
                    update_post_meta($job_id, 'company_id', $_SESSION[self::SESSION_COMPANY]);
                }

                // redirect
                $redirect = jeg_create_job_next_url('vacancy');
                wp_redirect($redirect);
                exit;
            } else {
                jeg_flash_message('message', esc_html(__('Job Vacancy Details Successfully Edited, The Admin will review to approve your new edit.', 'jobplanet-plugin')), 'alert-success');
            }

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }

    }

    public function create_job_handler()
    {
        $user_id = get_current_user_id();

        try {

            if (empty($_POST['job_title'])) {
                throw new Exception(esc_html(__('Job title cannot be empty', 'jobplanet-plugin')));
            }

            if (!isset($_POST['categories'])) {
                throw new Exception(esc_html(__('You should choose at least one job category', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_bottom']) || empty($_POST['salary_bottom'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_top']) || empty($_POST['salary_top'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            if (!isset($_POST['salary_range']) || empty($_POST['salary_range'])) {
                throw new Exception(esc_html(__('You should enter detail of your job salary', 'jobplanet-plugin')));
            }

            $job_id = wp_insert_post(array(
                'post_title'   => sanitize_text_field($_POST['job_title']),
                'post_type'    => 'job',
                'post_status'  => 'preview',
                'post_author'  => $user_id,
                'post_content' => wp_kses_post($_POST['description']),
            ));

            if (is_wp_error($job_id)) {
                throw new Exception($job_id->get_error_message());
            } else {

                if (!isset($_POST['featured'])) {
                    $_POST['featured'] = 0;
                }

                // update meta
                $fields = array('company_id', 'featured', 'application_email', 'salary_bottom', 'salary_top', 'salary_range', 'address', 'map_location', 'address', 'closing', 'expire');

                if (str_replace('.', '', $_POST['salary_bottom']) > str_replace('.', '', $_POST['salary_top'])) {
                    $salarybottom           = $_POST['salary_bottom'];
                    $_POST['salary_bottom'] = $_POST['salary_top'];
                    $_POST['salary_top']    = $salarybottom;
                }

                foreach ($fields as $field) {
                    if (isset($_POST[$field])) {
                        if ($field === 'salary_bottom' || $field === 'salary_top') {
                            $_POST[$field] = str_replace('.', '', $_POST[$field]);
                        }
                        update_post_meta($job_id, $field, sanitize_text_field($_POST[$field]));
                    }
                }

                if (isset($_SESSION[self::SESSION_COMPANY])) {
                    update_post_meta($job_id, 'company_id', $_SESSION[self::SESSION_COMPANY]);
                }

                update_post_meta($job_id, 'jobplanet_job_fields', $fields);

                // spoken_language, categories, location
                $taxonomies = array(
                    'job_type'   => 'job-type',
                    'categories' => 'job-category',
                    'location'   => 'job-location',
                    'job_skill'  => 'job-skill',
                    'levels'     => 'job_level',
                );
                foreach ($taxonomies as $field => $taxonomy) {
                    if (isset($_POST[$field])) {
                        wp_set_post_terms($job_id, $_POST[$field], $taxonomy);
                    }
                }

                // create additional location
                if (isset($_POST['add_location']) && !empty($_POST['add_location'])) {
                    $location_id = wp_insert_term($_POST['add_location'], 'job-location');
                    wp_set_post_terms($job_id, $location_id, 'job-location');
                }

                // save session
                $_SESSION[self::SESSION_JOB] = $job_id;

                // redirect
                $redirect = jeg_create_job_next_url('vacancy');
                wp_redirect($redirect);
                exit;
            }

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function choose_company_handler()
    {
        $user_id    = get_current_user_id();
        $company_id = $_POST['company_id'];
        $company    = get_post($company_id);

        try {

            if ($company && $company->post_type !== 'company') {
                throw new Exception(esc_html(__('Invalid post type', 'jobplanet-plugin')));
            }

            if ($company->post_author != $user_id) {
                throw new Exception(esc_html(__('Unable to edit', 'jobplanet-plugin')));
            }

            $_SESSION[self::SESSION_COMPANY] = $company_id;

            // rubah company
            if (isset($_SESSION[self::SESSION_JOB])) {
                update_post_meta($_SESSION[self::SESSION_JOB], 'company_id', sanitize_text_field($company_id));
            }

            // redirect
            $redirect = jeg_create_job_next_url('company');
            wp_redirect($redirect);
            exit;

        } catch (Exception $e) {

            jeg_flash_message('message', $e->getMessage(), 'alert-danger');

        }
    }

    public function setup_endpoint($endpoint)
    {
        $endpoint['joblist']       = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_job_list', 'job-list'), 'account_job_list');
        $endpoint['editjob']       = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_edit_job', 'edit-job'), 'account_edit_job');
        $endpoint['managepackage'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_manage_package', 'manage-package'), 'account_manage_package');
        $endpoint['choosepackage'] = apply_filters('jeg_check_ajax_option_save', vp_option('joption.account_choose_package', 'choose-package'), 'account_choose_package');
        return $endpoint;
    }

    public function create_job_endpoint()
    {
        return $this->job_endpoint;
    }

    public function setup_endpoint_create_job()
    {
        $this->job_endpoint = array(
            'login'    => vp_option('joption.vacancy_login', 'login'),
            'register' => vp_option('joption.vacancy_register', 'register'),
            'company'  => vp_option('joption.vacancy_company', 'company'),
            'vacancy'  => vp_option('joption.vacancy_vacancy', 'vacancy'),
            'package'  => vp_option('joption.vacancy_package', 'package'),
            'review'   => vp_option('joption.vacancy_preview', 'review'),
        );

        foreach ($this->job_endpoint as $endpoint) {
            add_rewrite_endpoint($endpoint, EP_ROOT | EP_PAGES);
        }
    }

    public function check_step_company()
    {
        if (isset($_SESSION[self::SESSION_COMPANY])) {
            $company_id = $_SESSION[self::SESSION_COMPANY];
            $company    = get_post($company_id);

            if ($company && $company->post_type === 'company') {
                return true;
            } else {
                jeg_flash_message('message', esc_html(__('Please choose / create new company', 'jobplanet-plugin')), 'alert-danger');
                unset($_SESSION[self::SESSION_COMPANY]);
                return false;
            }
        } else {
            jeg_flash_message('message', esc_html(__('Please choose / create new company', 'jobplanet-plugin')), 'alert-danger');
            return false;
        }
    }

    public function check_step_vacancy()
    {
        if (isset($_SESSION[self::SESSION_JOB])) {
            $job_id = $_SESSION[self::SESSION_JOB];
            $job    = get_post($job_id);

            if ($job && $job->post_type === 'job') {
                return true;
            } else {
                jeg_flash_message('message', esc_html(__('Please create job vacancy first', 'jobplanet-plugin')), 'alert-danger');
                unset($_SESSION[self::SESSION_JOB]);
                return false;
            }
        } else {
            jeg_flash_message('message', esc_html(__('Please create job vacancy first', 'jobplanet-plugin')), 'alert-danger');
            return false;
        }
    }

    public function check_step_package()
    {
        if ($this->user_has_active_package()) {
            return true;
        } else if (isset($_SESSION[self::SESSION_PACKAGE])) {
            $cart_key = $_SESSION[self::SESSION_PACKAGE];
            $cart     = WC()->cart->get_cart();

            if (isset($cart[$cart_key])) {
                $cart_item  = $cart[$cart_key];
                $product_id = $cart_item['product_id'];
                $package    = wc_get_product($product_id);

                if ($package && $package->is_type('job_package')) {
                    return true;
                } else {
                    jeg_flash_message('message', esc_html(__('Invalid Job Package', 'jobplanet-plugin')), 'alert-danger');
                    unset($_SESSION[self::SESSION_PACKAGE]);
                    return false;
                }
            } else {
                jeg_flash_message('message', esc_html(__('A Job Package is not in your cart yet, please choose a job package', 'jobplanet-plugin')), 'alert-danger');
                return false;
            }
        } else {
            jeg_flash_message('message', esc_html(__('Job package still empty. Please choose one Job Package', 'jobplanet-plugin')), 'alert-danger');
            return false;
        }
    }

    public function check_step($step)
    {
        $step_flip = $this->vacancy_step_flip();
        $function  = "check_step_" . $step_flip[$step + 1];

        if (is_user_logged_in() && current_user_can(Jeg_Account::EMPLOYER)) {
            if ($step === 1) {
                return $this->$function();
            } else if ($step === 2) {
                if ($this->check_step(1)) {
                    return $this->$function();
                } else {
                    return false;
                }
            } else if ($step === 3) {
                if ($this->check_step(1) && $this->check_step(2)) {
                    return $this->$function();
                } else {
                    return false;
                }
            }
        } else {
            wp_redirect(jeg_get_create_job_url('login'));
            exit;
        }
    }

    public function first_step()
    {
        global $wp;
        if (is_user_logged_in() && current_user_can(Jeg_Account::EMPLOYER)) {
            wp_redirect(jeg_create_job_url(2));
            exit;
        } else if (is_user_logged_in() && !current_user_can(Jeg_Account::EMPLOYER)) {
            if (isset($wp->query_vars[$this->job_endpoint['register']])) {
                $template = jeg_get_template_part('job/register', null, null, false);
            } else {
                jeg_flash_message('message', esc_html(__('You need to login using an account with the "Employer" role', 'jobplanet-plugin')), 'alert-danger');
                $template = jeg_get_template_part('job/login', null, null, false);
            }
        } else {
            $template = jeg_get_template_part('job/login', null, null, false);
        }
        return $template;
    }

    public function template_company()
    {
        return jeg_get_template_part('job/company', null, null, false);
    }

    public function template_vacancy()
    {
        return jeg_get_template_part('job/vacancy', null, null, false);
    }

    public function template_package()
    {
        return jeg_get_template_part('job/package', null, null, false);
    }

    public function template_review()
    {

        return jeg_get_template_part('job/review', null, null, false);
    }

    public function template_job_archive($wp, $template)
    {
        if (isset($wp->query_vars['job-type'])) {
            $jobtype          = $wp->query_vars['job-type'];
            $term             = get_term_by('slug', $jobtype, 'job-type');
            $_REQUEST['type'] = $term->term_id;
            $template         = jeg_get_template_part('job/search-job', null, null, false);
        }

        if (isset($wp->query_vars['job-location'])) {
            $joblocation          = $wp->query_vars['job-location'];
            $term                 = get_term_by('slug', $joblocation, 'job-location');
            $_REQUEST['location'] = $term->term_id;
            $template             = jeg_get_template_part('job/search-job', null, null, false);
        }

        if (isset($wp->query_vars['job-category'])) {
            $jobcategory            = $wp->query_vars['job-category'];
            $term                   = get_term_by('slug', $jobcategory, 'job-category');
            $_REQUEST['categories'] = $term->term_id;
            $template               = jeg_get_template_part('job/search-job', null, null, false);
        }

        return $template;
    }

    public function template_include($template)
    {
        global $wp;
        $step_flip = $this->vacancy_step_flip();
        $laststep  = JOBPLANET_STANDALONE ? 4 : 5;

        $template = $this->template_job_archive($wp, $template);

        if ($this->is_job_list_page()) {
            $template = jeg_get_template_part('job/search-job', null, null, false);
        }

        if ($this->is_create_job_page()) {
            if (!is_user_logged_in()) {
                if (isset($wp->query_vars[$this->job_endpoint['login']])) {
                    $template = $this->first_step($template);
                } else if (isset($wp->query_vars[$this->job_endpoint['register']])) {
                    $template = jeg_get_template_part('job/register', null, null, false);
                } else {
                    wp_redirect(jeg_get_create_job_url('login'));
                    exit;
                }
            } else {
                for ($i = 2; $i <= $laststep; $i++) {
                    if ($i === 2) {
                        if (isset($wp->query_vars[$this->job_endpoint[$step_flip[$i]]])) {
                            $function = "template_" . $step_flip[2];
                            $template = $this->$function();

                        }
                    } else {
                        if (isset($wp->query_vars[$this->job_endpoint[$step_flip[$i]]])) {
                            if ($this->check_step($i - 2)) {
                                $function = "template_" . $step_flip[$i];
                                $template = $this->$function();
                            } else {
                                wp_redirect(jeg_create_job_url($i - 1));
                                exit;
                            }
                        }
                    }
                }

                if (!isset($function)) {
                    $template = $this->first_step($template);
                }
            }
        }

        return $template;
    }

    public function add_permastruct_post_type()
    {
        $slug = vp_option('joption.job_slug', 'job');
        add_permastruct('job', '/' . $slug . '/%job%', array(
            'with_front'  => false,
            'ep_mask'     => EP_NONE,
            'paged'       => false,
            'feed'        => false,
            'forcomments' => false,
            'walk_dirs'   => true,
            'endpoints'   => false,
        ));
    }

    public function register_option($option)
    {
        $newoption = include JOBPLANET_PLUGIN_DIR . '/lib/option/job-option.php';
        return jeg_merge_option($option, $newoption);
    }

    public function user_dropdown($output)
    {
        return jeg_admin_user_dropdown($output, Jeg_Account::EMPLOYER, 'job');
    }

    public function is_job_list_page()
    {
        if (is_page_template( 'search-job.php' )) {
            return true;
        }
        return false;
    }

    public function is_create_job_page()
    {
        global $wp_query;
        if ($wp_query->queried_object_id == vp_option('joption.post_job_page')) {
            return true;
        }
        return false;
    }

    public function job_status()
    {
        global $post;
        if ($post && $post->post_type === 'job') {
            $html      = $selected_label      = '';
            $allstatus = $this->get_status();
            foreach ($allstatus as $status => $label) {
                if ($post->post_status == $status) {
                    $selected       = "selected";
                    $selected_label = $label;
                } else {
                    $selected = "";
                }
                $html .= "<option " . $selected . " value='" . esc_attr($status) . "'>" . esc_html($label) . "</option>";
            }
            jeg_get_template_part('admin/additional-post-status', array(
                'html'     => $html,
                'selected' => $selected_label,
            ));
        }
    }

    public static function get_status()
    {
        return array(
            'draft'   => esc_html(__('Draft', 'jobplanet-plugin')),
            'expired' => esc_html(__('Expired', 'jobplanet-plugin')),
            'preview' => esc_html(__('Preview', 'jobplanet-plugin')),
            'pending' => esc_html(__('Pending Approval', 'jobplanet-plugin')),
            'publish' => esc_html(__('Active', 'jobplanet-plugin')),
        );
    }

    function published_to_draft( $post_id ) { 
        remove_action('save_post', array($this, 'published_to_draft'));
        $status = get_post_status($post_id);
        $post_type = get_post_type($post_id);
            
    $external = false;
    $html = str_get_html(get_post_field('post_content', $post_id));
    if ($html !== false) {
        foreach($html->find('img') as $element) {
            if(!strpos($element->src, 'startup.jobs'))
                $external = true;
        }
    }
    
        
        if($post_type == 'company')
        {
            
            if($status == 'simple')
            {
                if(!has_post_thumbnail($post_id)) {
                    wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
                }
                
            }
            if($status == 'publish') {
                $locations = wp_get_post_terms($post_id, 'company-location');
                $company_size = wp_get_post_terms($post_id, 'company-size');
                $company_industry = wp_get_post_terms($post_id, 'company-industry');

                if(count($locations) == 0 || count($company_size) == 0 || count($company_industry) == 0) {
                    wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
                }

            }
        }
        
        if($post_type == 'job' && $status == 'publish') {
            
            
            $job_type = wp_get_post_terms($post_id, 'job-type');
            $job_category = wp_get_post_terms($post_id, 'job-category');
            $job_location = wp_get_post_terms($post_id, 'job-location');
            $job_level = wp_get_post_terms($post_id, 'job_level');
            
            if(count($job_type) == 0 || count($job_category) == 0 || count($job_location) == 0 || count($job_level) == 0) {
                
                wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
            }

            $company_id = get_post_meta($post_id, 'company_id', true);
            $expire = get_post_meta($post_id, 'expire', true);
            $short_desc = get_post_meta($post_id, 'short_desc', true);
            
            if($company_id == null || $company_id == "" || $expire == null || $expire == "" || $short_desc == null || $short_desc == "") {
                
                wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
            }

            $number_vacancy = get_post_meta($post_id, 'number_vacancy', true);
            if($number_vacancy == "" || $number_vacancy == null) {
                
                update_post_meta($post_id, 'number_vacancy', 1);
            }
            
        }

        if($post_type == 'post' && $status == 'publish') {
            
    
                $category_detail = get_the_category($post_id);
                foreach($category_detail as $cd){
                    
                    if($cd->cat_ID == 1)
                        wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
                }
    
                $featured_image = has_post_thumbnail($post_id);
                if($featured_image === false)
                    wp_update_post(array('ID' => $post_id, 'post_status' => 'draft'));
            
        }
        add_action( 'save_post', array($this, 'published_to_draft'));
    }
}

new Dakachi_Jeg_Job();
