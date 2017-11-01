<?php

return array(
    'id'          => 'jobplanet_jazzhr',
    'types'       => array('job'),
    'title'       => esc_html(__('JazzHR', 'jobplanet-plugin')),
    'priority'    => 'high',
    'mode'        => WPALCHEMY_MODE_EXTRACT,
    'template'    => array(
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