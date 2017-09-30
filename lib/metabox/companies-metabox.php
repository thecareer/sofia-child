<?php

return array(
    'id'          => 'jobplanet_company',
    'types'       => array('company'),
    'title'       => esc_html(__('Career.vn Company Detail', 'jobplanet-plugin')),
    'priority'    => 'high',
    'mode'        => WPALCHEMY_MODE_EXTRACT,
    'template'    => array(

        // array(
        //     'type' => 'select',
        //     'name' => 'university_id',
        //     'label' => esc_html(__('Jobfair', 'jobplanet-plugin')),
        //     'description' => esc_html(__('Jobfair for this job', 'jobplanet-plugin')),
        //     'items' => array(
        //         'data' => array(
        //             array(
        //                 'source' => 'function',
        //                 'value'  => 'jeg_university_list',
        //             ),
        //         ),
        //     ),
        //     'default' => '{{first}}',
        // ),
        // array(
        //     'type' => 'select',
        //     'name' => 'company_size',
        //     'label' => esc_html(__('Company Size', 'jobplanet-plugin')),
        //     'description' => esc_html(__('number of employee on your company', 'jobplanet-plugin')),
        //     'items' => array(
        //         array(
        //             'value' => '1',
        //             'label' => esc_html(__('1 - 9 Employee', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => '2',
        //             'label' => esc_html(__('10 - 49 Employee', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => '3',
        //             'label' => esc_html(__('50 - 99 Employee', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => '4',
        //             'label' => esc_html(__('100 - 500 Employee', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => '5',
        //             'label' => esc_html(__('500 - 999 Employee', 'jobplanet-plugin')),
        //         ),
        //         array(
        //             'value' => '6',
        //             'label' => esc_html(__('1000+ Employee', 'jobplanet-plugin')),
        //         ),
        //     ),
        //     'default' => array('1')
        // ),

        array(
            'type' => 'textbox',
            'name' => 'slogan',
            'label' => esc_html(__('Slogan', 'jobplanet-plugin')),
        ),

        array(
            'type' => 'textarea',
            'name' => 'short_desc',
            'label' => esc_html(__('Why join us', 'jobplanet-plugin')),
        ),

        array(
            'type' => 'textbox',
            'name' => 'founded_year',
            'label' => esc_html(__('Founded Year', 'jobplanet-plugin')),
        ),
        //number_of_employee
        array(
            'type' => 'textbox',
            'name' => 'number_of_employee',
            'label' => esc_html(__('Number of employee', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'address',
            'label' => esc_html(__('Address', 'jobplanet-plugin')),
            'id' => 'autocomplete'
        ),

        array(
            'type' => 'textbox',
            'name' => 'map_location',
            'label' => esc_html(__('Company location coordinate', 'jobplanet-plugin')),
            'description' => esc_html(__('Coordinates of company location', 'jobplanet-plugin')),
        ),

        // array(
        //     'type' => 'textbox',
        //     'name' => 'city',
        //     'label' => esc_html(__('City', 'jobplanet-plugin')),
        // ),

        array(
            'type' => 'textbox',
            'name' => 'website',
            'label' => esc_html(__('Website URL', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'official_facebook',
            'label' => esc_html(__('Facebook Page', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'official_twitter',
            'label' => esc_html(__('Twitter Page', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'official_linked_in',
            'label' => esc_html(__('Linked In Page', 'jobplanet-plugin')),
        ),
        array(
            'type' => 'textbox',
            'name' => 'official_instagram',
            'label' => esc_html(__('Instagram Page', 'jobplanet-plugin')),
        ),
    ),
);