<?php
global $wpdb;
$jazzid = get_query_var('link');
$prepare_guery = $wpdb->prepare( "SELECT post_id FROM $wpdb->postmeta where meta_key ='jazzid' and meta_value = '%s'", $jazzid );
$post_id = $wpdb->get_var( $prepare_guery );
if($post = get_post($post_id)) {
	wp_redirect( get_permalink( $post_id) );
}else {
	wp_redirect( home_url() );
}
exit;
