<?php

return array(
    'id'          => 'jobplanet_job',
    'types'       => array('job'),
    'title'       => esc_html(__('Job Detail', 'jobplanet-plugin')),
    'priority'    => 'high',
    'mode'        => WPALCHEMY_MODE_EXTRACT,
    'template'    => array(
        array(
            'type' => 'select',
            'name' => 'company_id',
            'label' => esc_html(__('Company', 'jobplanet-plugin')),
            'description' => esc_html(__('company for this job', 'jobplanet-plugin')),
            'items' => array(
                'data' => array(
                    array(
                        'source' => 'function',
                        'value'  => 'jeg_company_list',
                    ),
                ),
            ),
            'default' => '{{first}}',
        ),

        array(
            'type' => 'textarea',
            'name' => 'short_desc',
            'label' => esc_html(__('Short description', 'jobplanet-plugin')),
            'description' => esc_html(__('Short description', 'jobplanet-plugin')),
        ),

        array(
            'type' => 'textbox',
            'name' => 'number_vacancy',
            'label' => esc_html(__('Number of vacancy', 'jobplanet-plugin')),
        ),

        array(
            'type' => 'textbox',
            'name' => 'application_url',
            'label' => esc_html(__('Apply Url', 'jobplanet-plugin')),
            'description' => esc_html(__('Apply form url', 'jobplanet-plugin')),
        ),

        array(
            'type' => 'textbox',
            'name' => 'application_email',
            'label' => esc_html(__('Application notification email', 'jobplanet-plugin')),
            'description' => esc_html(__('Email Address to receive application notifications. You may leave it blank if you want to use the default Employer\'s profile email', 'jobplanet-plugin')),
        ),
        // array(
        //     'type' => 'textbox',
        //     'name' => 'salary_bottom',
        //     'label' => esc_html(__('Low End of the Job Salary Range', 'jobplanet-plugin')),
        //     'description' => esc_html(__('ex : 50000 (without punctuation)', 'jobplanet-plugin')),
        // ),
        // array(
        //     'type' => 'textbox',
        //     'name' => 'salary_top',
        //     'label' => esc_html(__('Top End of the Job Salary Range', 'jobplanet-plugin')),
        //     'description' => esc_html(__('ex : 120000 (without punctuation)', 'jobplanet-plugin')),
        // ),
        // array(
        //     'type' => 'select',
        //     'name' => 'salary_currency',
        //     'label' => esc_html(__('Salary Currency', 'jobplanet-plugin')),
        //     'items' => array(
        //         array(
        //             'value' => 'vnd',
        //             'label' => esc_html(__('VND', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => 'usd',
        //             'label' => esc_html(__('USD', 'jobplanet-plugin')),
        //         ),
        //     ),
        //     'default' => array(
        //         'vnd'
        //     ),
        // ),
        // array(
        //     'type' => 'select',
        //     'name' => 'salary_range',
        //     'label' => esc_html(__('Salary Range', 'jobplanet-plugin')),
        //     'items' => array(
        //         array(
        //             'value' => 'hourly',
        //             'label' => esc_html(__('Hourly', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => 'weekly',
        //             'label' => esc_html(__('Weekly', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => 'monthly',
        //             'label' => esc_html(__('Monthly', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => 'yearly',
        //             'label' => esc_html(__('Yearly', 'jobplanet-plugin')),
        //         ),
        //     ),
        //     'default' => array(
        //         'monthly'
        //     ),
        // ),

        // array(
        //     'type' => 'toggle',
        //     'name' => 'show_salary',
        //     'label' => esc_html(__('Show Salary', 'jobplanet-plugin'))
        // ),

        // array(
        //     'type' => 'toggle',
        //     'name' => 'require_cover_letter',
        //     'label' => esc_html(__('Require Cover Letter', 'jobplanet-plugin'))
        // ),

        // array(
        //     'type' => 'toggle',
        //     'name' => 'require_personal_photo',
        //     'label' => esc_html(__('Require Personal Photo', 'jobplanet-plugin'))
        // ),

        // array(
        //     'type' => 'textbox',
        //     'name' => 'contact_person',
        //     'label' => esc_html(__('Contact person', 'jobplanet-plugin')),
        // ),

        // array(
        //     'type' => 'textbox',
        //     'name' => 'contact_phone',
        //     'label' => esc_html(__('Contact phone', 'jobplanet-plugin')),
        // ),

        // array(
        //     'type' => 'toggle',
        //     'name' => 'show_contact',
        //     'label' => esc_html(__('Show Contact', 'jobplanet-plugin'))
        // ),

        array(
            'type' => 'textarea',
            'name' => 'address',
            'label' => esc_html(__('Address of Employment', 'jobplanet-plugin')),
            'description' => esc_html(__('Address of Employment', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'map_location',
            'label' => esc_html(__('Job location coordinate', 'jobplanet-plugin')),
            'description' => esc_html(__('Coordinates of job location', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'address',
            'label' => esc_html(__('Address of Employment', 'jobplanet-plugin')),
            'description' => esc_html(__('Address of Employment', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'toggle',
            'name' => 'featured',
            'label' => esc_html(__('Featured Job', 'jobplanet-plugin')),
            'description' => esc_html(__('This job is a Featured Job', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'closing',
            'label' => esc_html(__('Job application closing date', 'jobplanet-plugin')),
            'description' => esc_html(__('Closing date for job application entries', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'expire',
            'label' => esc_html(__('Job Expiration date', 'jobplanet-plugin')),
            'description' => esc_html(__('Date of expiry for this job. Calculated from job creation, based on users active package.', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzid',
            'label' => esc_html(__('Jazz ID', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzcity',
            'label' => esc_html(__('Jazz City', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzstate',
            'label' => esc_html(__('Jazz State', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzzip',
            'label' => esc_html(__('Jazz ZIP', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzcountry',
            'label' => esc_html(__('Jazz Country', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzdepartment',
            'label' => esc_html(__('Jazz Department', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzminsalary',
            'label' => esc_html(__('Jazz Min Salary', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzmaxsalary',
            'label' => esc_html(__('Jazz Max Salary', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazztype',
            'label' => esc_html(__('Jazz Type', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'jazzstatus',
            'label' => esc_html(__('Jazz Status', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'hiringlead',
            'label' => esc_html(__('Hiring Lead', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'embedcode',
            'label' => esc_html(__('Embed Code', 'jobplanet-plugin')),
        ),
    ),
);