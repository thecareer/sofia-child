<?php
function startup_ajax_load_more_post() {
	$exclude = explode(',', $_GET['exclude']);
	$current = $_GET['current'] + 1;
    $news = new WP_Query(
        array( 'paged' => $current, 'post_type' => 'post', 'post_status' => 'publish', 'post__not_in' => $exclude, 'showposts' => 9)
    );
    ob_start();
    ?>
        <?php while($news->have_posts()) : $news->the_post(); ?>
            <div class="views-row">
                <div class="image">
                    <div>
                        <a href="<?php the_permalink() ?>"><img src="<?php the_post_thumbnail_url(); ?>" width="250" height="190" alt="" class="image-style-news-card">

                        </a>
                    </div>
                </div>
                <div class="title"><span><a href="<?php the_permalink() ?>" hreflang="en"><?php the_title(); ?></a></span></div>
            </div>
        <?php 
   	endwhile;
   	$content = ob_get_clean();
   	$the_last = false;
   	if($current == $news->max_num_pages) {
   		$the_last = true;
   	}
   	wp_send_json( array('content' => $content,  'the_last' => $the_last) );
}
add_action( 'wp_ajax_load-more-post', 'startup_ajax_load_more_post' );
add_action( 'wp_ajax_nopriv_load-more-post', 'startup_ajax_load_more_post' );