<?php
get_header();
the_post();
global $post;
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
                                <div class="block block-ctools block-entity-viewnode">
                                    <div class="sponsored-blog-content"> </div>
                                    <h1 class="node-title"><span class="field field--name-title field--type-string field--label-hidden"><?php the_title(); ?></span>
</h1>
                                    <article role="article" class="node node--type-blog node--view-mode-default">

                                        <div class="node__content">
                                            <div class="author">
                                                <div class="col-left">
                                                    <div class="picture">
                                                        <a href="<?php echo get_author_posts_url($post->post_author); ?>"></a>
                                                        <a href="<?php echo get_author_posts_url($post->post_author); ?>">
                                                            <div class="field field--name-field-profile-pic field--type-image field--label-hidden field__item"> 
                                                                <?php echo get_avatar( $post->post_author, 265 ); ?>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="info">
                                                        <div class="name">by <a href="#"><?php echo get_the_author_meta( 'display_name', $post->post_author ); ?></a></div>
                                                        <div class="date"><?php echo get_the_date(); ?></div>
                                                    </div>
                                                </div>
                                                <div class="col-right">
                                                </div>
                                            </div>
                                            <div class="teaser"></div>

                                            <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                                <figure role="group" class="caption caption-img">
                                                    <img src=<?php echo get_the_post_thumbnail_url( 'blog-featured' ); ?> />
                                                </figure>
                                                <?php the_content() ;?>
                                            </div>

                                            <div class="field field--name-field-company field--type-entity-reference field--label-hidden field__items">
                                                <div class="field__item">

                                                    <div class="blog-company-widget">

                                                        <div class="logo-wrapper-small">
                                                            <div class="centered">

                                                                <div class="field field--name-field-company-logo field--type-image field--label-hidden field__item">
                                                                    <a href="/company/indigo"><?php echo get_avatar( $post->post_author, 265 ); ?>

                                                                    </a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <h2 class="company-title"><a href="#"><span class="field field--name-title field--type-string field--label-hidden"><?php echo get_the_author_meta( 'display_name', $post->post_author ); ?></span>
</a></h2>
                                                        
                                                        <?php /*

                                                        <div class="view-profile"><a href="/company/indigo">View profile</a></div>
                                                        <div class="job-alert"><a href="/bix-job-newsletter/company-alerts/10366" class="use-ajax" data-dialog-type="modal" data-dialog-options="{&quot;width&quot;:700}">Follow</a></div>
                                                        */ ?>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </article>

                                </div>
                               <!--  <div class="block block-bix-global block-bix-global-social">

                                    <div id="bix-share-social">
                                        <div class="a2a_kit a2a_kit_size_32 a2a_default_style" style="line-height: 32px;">
                                            <a class="a2a_button_linkedin" target="_blank" href="/#linkedin" rel="nofollow noopener"><span class="a2a_svg a2a_s__default a2a_s_linkedin" style="background-color: rgb(0, 123, 181);"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z" fill="#FFF"></path></svg></span><span class="a2a_label">LinkedIn</span></a>
                                            <a class="a2a_button_facebook" target="_blank" href="/#facebook" rel="nofollow noopener"><span class="a2a_svg a2a_s__default a2a_s_facebook" style="background-color: rgb(59, 89, 152);"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z"></path></svg></span><span class="a2a_label">Facebook</span></a>
                                            <a class="a2a_button_twitter" target="_blank" href="/#twitter" rel="nofollow noopener"><span class="a2a_svg a2a_s__default a2a_s_twitter" style="background-color: rgb(85, 172, 238);"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg></span><span class="a2a_label">Twitter</span></a>
                                            <a class="a2a_button_email" target="_blank" href="/#email" rel="nofollow noopener"><span class="a2a_svg a2a_s__default a2a_s_email" style="background-color: rgb(1, 102, 255);"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M26 21.25v-9s-9.1 6.35-9.984 6.68C15.144 18.616 6 12.25 6 12.25v9c0 1.25.266 1.5 1.5 1.5h17c1.266 0 1.5-.22 1.5-1.5zm-.015-10.765c0-.91-.265-1.235-1.485-1.235h-17c-1.255 0-1.5.39-1.5 1.3l.015.14s9.035 6.22 10 6.56c1.02-.395 9.985-6.7 9.985-6.7l-.015-.065z"></path></svg></span><span class="a2a_label">Email</span></a>
                                            <div style="clear: both;"></div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <?php 
                    $companies = new WP_Query(array('post_type' => 'company', 'post_status' => 'publish', 'showposts' => 9));
                    ?>
                    <div class="row">
                        <div class="">
                            <div class="block-region-bottom">
                                <div class="views-element-container block block-views block-views-blocktech-series-block-1">

                                    <h2 class="box-title">Startup guides</h2>

                                    <div>
                                        <div class="overlay-grid view view-tech-series view-id-tech_series view-display-id-block_1 js-view-dom-id-8b78f2ff2a231011b4b79d9f1460cbeee79d43d1c64ff8d4c5e75accfea6dc62">

                                            <div class="view-content">
                                                <div data-sofia-views-infinite-scroll-content-wrapper="" class="views-infinite-scroll-content-wrapper clearfix">
                                                <?php while($companies->have_posts()) : $companies->the_post(); ?>
                                                    <?php
                                                    $company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
                                                    if($company_cover_id) {
                                                        $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'cover-list');
                                                        $cover_image_src = $cover_image_src['0'];
                                                    }else {
                                                        $cover_image_src = get_stylesheet_directory_uri(). '/img/cover_photo_3.png';
                                                    }
                                                    ?>
                                                    <div class="views-row">
                                                        <div class="title">
                                                            <div><a href="<?php the_permalink(); ?>" hreflang="en"><?php the_title(); ?></a></div>
                                                        </div>
                                                        <div class="image">
                                                            <div>
                                                                <a href="<?php the_permalink(); ?>">

                                                                    <div data-thumb="<?php echo $cover_image_src; ?>" class="media media--blazy media--loading media--image">
                                                                        <img height="400" width="400" class="b-lazy media__image media__element" data-src="<?php echo $cover_image_src; ?>" alt="<?php the_title(); ?>" src="<?php echo $cover_image_src; ?>">

                                                                    </div>

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="link"><span><a href="<?php the_permalink(); ?>" hreflang="en">View</a></span></div>
                                                    </div>
                                                <?php endwhile; ?>
                                                <?php wp_reset_query(); ?>
                                                </div>

                                            </div>
                                            <?php /*
                                            <ul class="js-pager__items pager" data-sofia-views-infinite-scroll-pager="">
                                                <li class="pager__item">
                                                    <a class="button" href="/2017/09/26/agtech-startup-indigo-boston-tech-unicorn?page=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1" title="Go to next page" rel="next">Load More</a>
                                                </li>
                                            </ul>
                                            */ ?>
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
                                <div class="boston block block-bix-frontpage block-bix-frontpage-job-categories">

                                    <div> <a href="/desktop/jobs" class="title">Find your dream job</a></div>
                                    <div class="views-row category-wrapper-developer">
                                        <div class="category category-developer">
                                            <div>Developer & Engineer Jobs</div><a href="/jobs?category[]=developer-engineer"></a></div>
                                    </div>
                                    <div class="views-row category-wrapper-design">
                                        <div class="category category-design">
                                            <div>Design + UX Jobs</div><a href="/jobs?category[]=design-ux"></a></div>
                                    </div>
                                    <div class="views-row category-wrapper-marketing">
                                        <div class="category category-marketing">
                                            <div>Marketing Jobs</div><a href="/jobs?category[]=marketing"></a></div>
                                    </div>
                                    <div class="views-row category-wrapper-product">
                                        <div class="category category-product">
                                            <div>Product Jobs</div><a href="/jobs?category[]=product"></a></div>
                                    </div>
                                    <div class="views-row category-wrapper-sales">
                                        <div class="category category-sales">
                                            <div>Business Development & Sales Jobs</div><a href="/jobs?category[]=sales"></a></div>
                                    </div>
                                    <div class="views-row category-wrapper-data-analytics">
                                        <div class="category category-data">
                                            <div>Data & Analytics Jobs</div><a href="/jobs?category[]=data-analytics"></a></div>
                                    </div>
                                    <div class="more-link"><a href="/jobs">View all jobs</a></div>
                                </div>
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
