<?php
/**
Template Name: Blog Page
 */
the_post();
get_header();
?>

<div class="region region-featured-top">
    <div class="region-inner">
        <div class="views-element-container block block-views block-views-blockseries-header-block-1" id="block-views-block-series-header-block-1">

            <div>
                <div class="view view-series-header view-id-series_header view-display-id-block_1 js-view-dom-id-316d097e3fb1e5eb291cb05ce4dd4a1b220279deb640e9a5c925c4b4e160d729">

                    <div class="view-content">
                        <div class="views-row">

                            <div class="node-header node--header--series">
                                <div class="node-header--image" style="background-image: url('<?php echo get_stylesheet_directory_uri() ?>/img/startups-cambridge.jpg');">
                                </div>
                                <div class="node-header--info-wrapper">
                                    <div class="node-header--info">
                                        <h1 class="node-header--title">Startups in Cambridge</h1>
                                        <h2 class="node-header--headline">Explore the hottest startups in Cambridge. Find jobs, get the latest news and more.</h2>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>
</div>
<?php
$news = new WP_Query(
    array('post_type' => 'post', 'post_status' => 'publish', 'tag' => 'featured', 'showposts' => 3)
);
$news = $news->posts;
$post_1 = $news[0];
$post_2 = $news[1];
$post_3 = $news[2];

?>
<main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div class="region region-content">
            <div class="l-three-columns container">
                <div class="l-content right">
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <div class="views-element-container block block-views block-views-blockseries-news-block-1">

                                    <div>
                                        <div class="grid-listing view view-series-news view-id-series_news view-display-id-block_1 js-view-dom-id-6ebc12fc73dd67657da287156feaf40fc4d2951a28a8c3e1d3775218210685aa">

                                            <h2 class="box-title">Featured Article</h2>

                                            <div class="attachment attachment-before">
                                                <div class="views-element-container">
                                                    <div class="view view-series-news view-id-series_news view-display-id-attachment_1 js-view-dom-id-4c063ece9ab8393b4e4b734f3e8a499f712916bd82f9f31e6ab06ac1ffae7ab6">

                                                        <div class="view-content">
                                                            <div class="views-row">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="<?php echo get_permalink( $post_1->ID ); ?>"><img src="<?php echo get_the_post_thumbnail_url( $post_1->ID); ?>" width="520" height="390" alt="<?php echo get_the_title($post_1->ID); ?>" class="image-style-news-landing">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="views-field views-field-nothing">
                                                                    <span class="field-content"><div class="title">
                                                                        <a href="<?php echo get_permalink( $post_1->ID ); ?>" hreflang="en"><?php echo get_the_title($post_1->ID); ?></a>
                                                                        <div class="teaser">
                                                                            <p><?php echo wp_trim_words( $post_1->post_content); ?></p>
                                                                        </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="views-element-container">
                                                    <div class="view view-series-news view-id-series_news view-display-id-attachment_2 js-view-dom-id-58da96829123086bc999442e935912932a6744010bc1ba4f8661a6d0c3f20f65">

                                                        <div class="view-content">
                                                            <div class="views-row">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="<?php echo get_permalink( $post_2->ID ); ?>">
                                                                            <img src="<?php echo get_the_post_thumbnail_url( $post_2->ID) ?>" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="<?php echo get_permalink($post_2->ID); ?>" hreflang="en"><?php echo get_the_title($post_2->ID); ?></a></span></div>
                                                            </div>
                                                            <div class="views-row">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="<?php echo get_permalink( $post_3->ID ); ?>">
                                                                            <img src="<?php echo get_the_post_thumbnail_url( $post_3->ID) ?>" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="<?php echo get_permalink($post_3->ID); ?>" hreflang="en"><?php echo get_the_title($post_3->ID); ?></a></span></div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                            <?php wp_reset_postdata(); ?>

                                            <?php
                                            $news = new WP_Query(
                                                array('post_type' => 'post', 'post_status' => 'publish', 'post__not_in' => array($post_1->ID, $post_2->ID, $post_3->ID), 'showposts' => 9)
                                            );
                                            ?>
                                            <div class="view-content">
                                                <div data-sofia-views-infinite-scroll-content-wrapper="" id="list-post"class="views-infinite-scroll-content-wrapper clearfix">
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
                                                <?php endwhile; ?>
                                                </div>

                                            </div>
                                            <?php if($news->max_num_pages > 1) : ?>
                                                <ul class="js-pager__items pager" data-sofia-views-infinite-scroll-pager="">
                                                    <li class="pager__item">
                                                        <a id="load-more-blog" data-exclude="<?php echo join(',', array($post_1->ID, $post_2->ID, $post_3->ID)) ?>" class="button" href="#" title="Go to next page" rel="next">View More</a>
                                                    </li>
                                                </ul>
                                            <?php endif;?>

                                        </div>
                                    </div>
                                    <?php wp_reset_query(); ?>
                                </div>
                                <div class="block block-bix-series block-bix-series-companies">
                                <?php
                                $featured_company = new WP_Query(array('post_type' => 'company', 'post_status' => 'publish', 'company-tag' => 'featured', 'showposts' => 6));
                                ?>
                                    <h2 class="box-title">Featured Cambridge Startups</h2>

                                    <div class="views-element-container">
                                        <div class="view view-series-companies view-id-series_companies view-display-id-block_2 js-view-dom-id-159058167e850c3455ae9cc598822be15460549e8d84c3c3383e33a77dea6e8f">

                                            <div class="view-content">
                                                <div data-sofia-views-infinite-scroll-content-wrapper="" class="views-infinite-scroll-content-wrapper clearfix">
                                                <?php while($featured_company->have_posts()) : $featured_company->the_post(); ?>
                                                    <?php
                                                        $company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
                                                        if($company_cover_id) {
                                                            $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'full');
                                                            $cover_image_src = $cover_image_src['0'];
                                                        }else {
                                                            $cover_image_src = get_stylesheet_directory_uri(). '/img/cover_photo_3.png';
                                                        }
                                                        $terms = wp_get_post_terms( get_the_ID(), 'company-industry');
                                                        $term = $terms[0];
                                                    ?>
                                                    <div class="views-row">
                                                        <div class="cover-image">
                                                            <div>
                                                                <a href="<?php the_permalink(); ?>"><img src="<?php echo $cover_image_src; ?>" width="480" height="360" alt="" class="image-style-company-card">

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered">
                                                                <a href="<?php the_permalink(); ?>">
                                                                    <img src="<?php the_post_thumbnail_url(); ?>">
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><a href="<?php the_permalink(); ?>" hreflang="en"><?php the_title(); ?></a></span></div>
                                                        <div class="company-type">
                                                            <div><?php echo $term->name; ?></div>
                                                        </div>
                                                        <div class="open-jobs"><span><a href="<?php the_permalink(); ?>">Views Jobs</a></span></div>
                                                        <div class="link"><i></i></div>
                                                        <a class="view-page" href="<?php the_permalink(); ?>"></a>
                                                    </div>
                                                <?php endwhile; ?>
                                                <?php wp_reset_query(); ?>
                                                </div>

                                            </div>

                                            <ul class="js-pager__items pager" data-sofia-views-infinite-scroll-pager="">
                                                <li class="pager__item">
                                                    <a class="button" href="/companies" title="Go to next page" rel="next">View More</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-right-column">
                    <div class="row">
                        <div class="">
                            <div class="block-region-right">
                                <div class="block block-bix-series block-bix-series-jobs">
                                    <?php 
                                    $companies = new WP_Query(array('post_type' => 'company', 'post_status' => 'publish', 'showposts' => 12));
                                    ?>
                                    <h2 class="box-title">Cambridge Startup Jobs</h2>

                                    <div class="views-element-container">
                                        <div class="sidebar-listing sidebar-listing--jobs view view-series-jobs view-id-series_jobs view-display-id-block_1 js-view-dom-id-5b105975f56774e286c3255a73897fcb85bff1508c3550a230ee5072f17bbd1c">

                                            <div class="view-content">
                                            <?php while($companies->have_posts()) : $companies->the_post(); ?>
                                            <?php 
                                                $terms = wp_get_post_terms( get_the_ID(), 'company-industry');
                                                $term = $terms[0];
                                            ?>
                                                <div class="views-row">
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered">
                                                            <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url(); ?>" width="100" height="40" alt="">
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="title"><span><a href="<?php the_permalink(); ?>" hreflang="en"><?php the_title(); ?></a></span></div>
                                                    <div class="company-title"><span><a href="<?php the_permalink(); ?>" hreflang="en"><?php echo $term->name; ?></a></span></div>
                                                </div>
                                            <?php endwhile; ?>
                                            <?php wp_reset_query(); ?>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="more-link"><a href="/companies">View More</a></div>
                                </div>
                                <?php /*<div class="block block-bix-global block-bix-global-sign-up">

                                    <h5 class="title">The startup scene moves fast. Keep up. </h5>
                                    <div class="more-link"><a href="/user/register">Sign Up</a></div>
                                </div> */ ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</main>
<?php
get_footer();
?>
