<?php
get_header();
?>
<div class="region region-featured-top">
    <div class="region-inner">

        <div id="block-jobsheader" class="block block-block-content block-block-content7aa316fb-6600-4156-9515-05ae41f80c69 block--narrow">
            <div class="node-header">
                <div class="node-header--image" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/img/boston-startup-jobs.jpg');">
                </div>
                <div class="node-header--info-wrapper">
                    <div class="node-header--info">
                    </div>
                </div>
            </div>
        </div>
        <div id="block-searchjob" class="block block-bix-jobs block-bix-jobs-search-job">

            <div class="search-bar"><span class="label">Search |</span>
                <div class="job-search-wrapper">
                    <!-- <select id="job-search-list" multiple="multiple" style="margin: 0px; padding: 0px; border: 0px; display: none;">
                        <option value="" all="" wheel="" drive "=" " senior=" " software=" " engineer:=" " salsify=" " ecosystem=" " team"="">"All Wheel Drive" Senior Software Engineer: Salsify Ecosystem Team</option>
                        <option value="" all "=" ">"All</option>
                            <option value="Wheel">Wheel</option>
                            <option value="Drive" "=" ">Drive"</option>
                                <option value="Senior">Senior</option>
                                <option value="Software">Software</option>
                                <option value="Engineer:">Engineer:</option>
                                <option value="Salsify">Salsify</option>
                                <option value="Ecosystem">Ecosystem</option>
                    </select> -->
                    <input type="text" name="s" placeholder="job title or keyword" />
                </div>
            </div>
        </div>
        <div class="views-exposed-form block block-views block-views-exposed-filter-blockjobs-jobs-landing" data-drupal-selector="views-exposed-form-jobs-jobs-landing" id="block-exposedformjobsjobs-landing">

            <form action="/jobs" method="get" id="views-exposed-form-jobs-jobs-landing" accept-charset="UTF-8">
                <div class="form--inline clearfix">
                    <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-search-api-fulltext form-item-search-api-fulltext form-no-label">
                        <input data-drupal-selector="edit-search-api-fulltext" type="text" id="edit-search-api-fulltext" name="search_api_fulltext" value="" size="30" maxlength="128" class="form-text">

                    </div>
                    <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                        <input data-drupal-selector="edit-submit-jobs" type="submit" id="edit-submit-jobs" value="Find Jobs" class="button js-form-submit form-submit">
                    </div>

                </div>

            </form>

        </div>

    </div>
</div>

<!-- main  -->
<main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div class="region region-content">
            <div class="l-three-columns container">
                <div class="l-left-column">
                    <div class="row">
                        <div class="">
                            <div class="block-region-left">
                                <div class="block-facet--bix-facets-jobs-checkbox block block-facets block-facet-blockjob-categories-aggregated">

                                    <?php
                                    $job_types = get_terms( array('taxonomy' => 'job-type','hide_empty' => false) );
                                    $selected_types = isset($_GET['type']) ? $_GET['type'] : array();
                                    ?>

                                    <h2 class="box-title <?php if(!empty($selected_types)) {echo 'active';} ?>">Type</h2>

                                    <div class="item-list" <?php if(!empty($selected_types)) {echo 'style="display:block"';} ?>>
                                        <ul data-drupal-facet-id="company_types_aggregate_type_type" data-drupal-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                            <?php foreach ($job_types as $key => $type) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($type->slug, $selected_types)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $type->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <label for="type-<?php echo $type->slug ?>">
                                                        <?php if($current) : 
                                                            $link  = remove_query_arg('type');
                                                            foreach ($selected_types as $key => $v) {
                                                                if($v != $type->slug) {
                                                                    $link  = add_query_arg(array('type[]' => $v), $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('type[]', $type->slug)); ?>">
                                                            <?php endif; ?>
                                                                <span class="facet-item__value"><?php echo $type->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $type->count ?>
                                                              </span>
                                                        </a>
                                                    </label>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-facet--bix-facets-jobs-checkbox block block-facets block-facet-blockjob-location last">
                                    <?php
                                    $locations = get_terms( array('taxonomy' => 'job-location','hide_empty' => false) );
                                    $selected_locations = isset($_GET['location']) ? $_GET['location'] : array();
                                    ?>
                                    <h2 class="box-title <?php if(!empty($selected_locations)) {echo 'active';} ?>">Location</h2>

                                    <div class="item-list" <?php if(!empty($selected_locations)) {echo 'style="display:block"';} ?>>
                                        <ul data-drupal-facet-id="company_types_aggregate_type_type" data-drupal-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                            <?php foreach ($locations as $key => $location) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($location->slug, $selected_locations)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <input type="checkbox" class="facets-checkbox" id="location-<?php echo $location->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <label for="location-<?php echo $location->slug ?>">
                                                        <?php if($current) : 
                                                            $link  = remove_query_arg('location');
                                                            foreach ($selected_types as $key => $v) {
                                                                if($v != $location->slug) {
                                                                    $link  = add_query_arg(array('location[]' => $v), $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('location[]', $location->slug)); ?>">
                                                            <?php endif; ?>
                                                                <span class="facet-item__value"><?php echo $location->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $location->count ?>
                                                              </span>
                                                        </a>
                                                    </label>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-content left">
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <!--<div class="block block-bix-jobs block-bix-jobs-landing-page-featured-views">

                                    <h2 class="box-title">Boston Startups and Companies hiring</h2>
                                    <div class="views-element-container">
                                        <div class="view view-featured-companies view-id-featured_companies view-display-id-block_1 js-view-dom-id-8596e67c623c57090870162c80dfbb6058f72057a01c38e93cb41adb10a1f4fa">

                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="cover-image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_card/public/cargurus.png" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_logo/public/company_logos/12235061_10156326091175599_2062674886615066039_n.png" width="300" height="300" alt="" class="image-style-company-logo">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>CarGurus</span></div>
                                                    <div class="company-type">
                                                        <div>Automotive, Technology</div>
                                                    </div>
                                                    <div class="open-jobs"><span><a href="/company/cargurus#bix-companies-open-jobs">View 39 Open Jobs</a></span></div>
                                                    <div class="link"><i></i></div>
                                                    <a href="/company/cargurus" class="view-page"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="cover-image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_card/public/2017-05/RS278A5450.jpg" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_logo/public/company_logos/aaeaaqaaaaaaaavuaaaajde0mjg1zgu0ltmzzjgtndi2mc05ogjkltu5nmu1zguyntcxzg.png" width="200" height="200" alt="" class="image-style-company-logo">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>Toast</span></div>
                                                    <div class="company-type">
                                                        <div>Food, Technology</div>
                                                    </div>
                                                    <div class="open-jobs"><span><a href="/company/toast#bix-companies-open-jobs">View 41 Open Jobs</a></span></div>
                                                    <div class="link"><i></i></div>
                                                    <a href="/company/toast" class="view-page"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="cover-image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_card/public/ezcater-2.jpg" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_logo/public/company_logos/aaeaaqaaaaaaaaptaaaajddhyzlhzwuylwu3nwmtndvhmi1hntm3ltk1zmzkyjnjmznknq.png" width="200" height="200" alt="" class="image-style-company-logo">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>ezCater</span></div>
                                                    <div class="company-type">
                                                        <div>Food, Technology</div>
                                                    </div>
                                                    <div class="open-jobs"><span><a href="/company/ezcater#bix-companies-open-jobs">View 9 Open Jobs</a></span></div>
                                                    <div class="link"><i></i></div>
                                                    <a href="/company/ezcater" class="view-page"></a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div> -->
                                <?php 
                                $query = array(
                                    'post_status' => 'publish',
                                    'post_type' => 'job',
                                    'posts_per_page' => 3,
                                );
                                $jobs = new WP_Query($query);
                                ?>
                                <div class="views-element-container block block-views block-views-blockjobs-jobs-landing">

                                    <div>
                                        <div class="view view-jobs view-id-jobs view-display-id-jobs_landing js-view-dom-id-ae7974363fff15483cbc0325289ab751ccc487df96697d0a4be18cef7d4b2628">

                                            <h1 class="box-title">Boston startup jobs and tech jobs</h1>

                                            <div class="view-content">
                                            <?php while($jobs->have_posts()) : $jobs->the_post(); ?>

                                                <?php 
                                                    $job_id = get_the_ID(); 
                                                    $company_id = vp_metabox('jobplanet_job.company_id');
                                                    $company_image_id = get_post_thumbnail_id($company_id);
                                                    $company_image_src = wp_get_attachment_image_src($company_image_id, 'full');
                                                    $terms = wp_get_post_terms( get_the_ID(), 'job-location');
                                                    $term = $terms[0];
                                                ?>
                                                <div class="views-row">

                                                    <div class="left">
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered"> <img src="<?php echo $company_image_src[0]; ?>" width="200" height="200" alt="" class="image-style-company-logo">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="center">
                                                        <h2 class="title"><?php the_title(); ?></h2>
                                                        <div class="company-title"><?php echo get_the_title($company_id); ?></div>
                                                        <div class="description"><?php the_excerpt(); ?></div>
                                                    </div>
                                                    <div class="right">
                                                        <div class="job-save"><a href="/user/login" class="flag-save_job ga-event-processed" data-ga-event="job-save-jobs-lp">save job</a></div>
                                                        <div class="job-date"><?php echo human_time_diff( strtotime(get_the_date()) ); ?></div>
                                                        <div class="job-location"><?php echo $term->name; ?></div>
                                                        <div class="link"><i></i></div>
                                                    </div>
                                                    <div class="wrap-view-page">
                                                        <a href="<?php the_permalink(); ?>" hreflang="en"> </a>
                                                    </div>
                                                </div>
                                            <?php endwhile; ?>

                                            </div>

                                            <?php
                                                $big = 999999999; // need an unlikely integer

                                                $link =  paginate_links( array(
                                                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                                    'format' => '?paged=%#%',
                                                    'current' => max( 1, get_query_var('paged') ),
                                                    'total' => $jobs->max_num_pages,
                                                    'type'               => 'array',
                                                    'prev_next'          => false,
                                                ) );
                                                $current = max( 1, get_query_var('paged') );
                                            ?>
                                            <nav class="pager" role="navigation" aria-labelledby="pagination-heading">
                                                <ul class="pager__items js-pager__items">
                                                    <?php if(get_query_var('paged', 1) > 1) : ?>
                                                        <li class="pager__item pager__item--previous">
                                                            <a href="<?php echo add_query_arg('paged',$current -1);  ?>" title="Go to previous page" rel="prev">
                                                                <span class="visually-hidden">Previous page</span>
                                                                <span aria-hidden="true">‹ Previous</span>
                                                            </a>
                                                        </li>
                                                    <?php endif; ?>

                                                    <?php foreach ($link as $key => $value) : ?>
                                                        <li class="pager__item">
                                                            <?php echo $value; ?>
                                                        </li>
                                                    <?php endforeach; ?>

                                                    <?php if(get_query_var('paged') < $jobs->max_num_pages) : ?>



                                                        <li class="pager__item pager__item--next">
                                                            <a href="<?php echo add_query_arg('paged', $current + 1 ) ?>" title="Go to next page" rel="next">
                                                                <span class="visually-hidden">Next page</span>
                                                                <span aria-hidden="true">Next ›</span>
                                                            </a>
                                                        </li>
                                                    <?php endif; ?>
                                                </ul>
                                            </nav>

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

</main>

<!-- // main -->
<?php
get_footer();
