<?php
get_header();
$language_list = startup_language_list();
$base = remove_query_arg( 'paged' );
$base = preg_replace('%\/page/[0-9]+%', '', $base);
if( isset($_GET['keyword']) && empty($_GET['keyword'])) {
    $base = remove_query_arg( 'keyword', $base );
}
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
        <form action="<?php echo $base; ?>" method="get" id="views-exposed-form-jobs-jobs-landing" accept-charset="UTF-8">
        <div id="block-searchjob" class="block block-bix-jobs block-bix-jobs-search-job">

            <div class="search-bar"><span class="label">Search |</span>
                <div class="job-search-wrapper">
                    <input type="text" required name="keyword" placeholder="Enter your keyword" value="<?php echo urldecode(stripslashes(esc_html(get_query_var( 'keyword' ))));  ?>" />
                </div>
                <div  class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                    <input  type="submit" id="edit-submit-jobs" value="Go Search" class="button js-form-submit form-submit">
                </div>
            </div>
        </div>
        </form>
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

                                    <h2 class="box-title active">Type</h2>

                                    <div class="item-list" <?php if(!empty($selected_types)) {echo 'style="display:block"';} ?>>
                                        <ul data-sofia-facet-id="company_types_aggregate_type_type" data-sofia-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                            <?php foreach ($job_types as $key => $type) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($type->slug, $selected_types)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <?php if($current) : 
                                                            $link  = remove_query_arg('type', $base);
                                                            foreach ($selected_types as $key => $v) {
                                                                if($v != $type->slug) {
                                                                    $link  = add_query_arg(array('type[]' => $v), $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('type[]', $type->slug , $base)); ?>">
                                                            <?php endif; ?>
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $type->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <div class="label" for="type-<?php echo $type->slug ?>">
                                                        
                                                                <span class="facet-item__value"><?php echo $type->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $type->count ?>
                                                    
                                                              </span>
                                                    </div>
                                                    </a>
                                                    
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-facet--bix-facets-jobs-checkbox block block-facets block-facet-blockjob-category">
                                    <?php
                                    $categorys = get_terms( array('taxonomy' => 'job-category','hide_empty' => false) );
                                    $selected_categorys = isset($_GET['category']) ? $_GET['category'] : array();
                                    ?>
                                    <h2 class="box-title <?php if(!empty($selected_categorys)) {echo 'active';} ?>">Category</h2>

                                    <div class="item-list" <?php if(!empty($selected_categorys)) {echo 'style="display:block"';} ?>>
                                        <ul data-sofia-facet-id="company_types_aggregate_type_type" data-sofia-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                            <?php foreach ($categorys as $key => $category) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($category->slug, $selected_categorys)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <?php if($current) :
                                                            $link  = remove_query_arg('category', $base);
                                                            foreach ($selected_categorys as $key => $v) {
                                                                if($v != $category->slug) {
                                                                    $link  = add_query_arg('category[]', $v, $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('category[]', $category->slug, $base)); ?>">
                                                            <?php endif; ?>
                                                    <input type="checkbox" class="facets-checkbox" id="category-<?php echo $category->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <div class="label" for="category-<?php echo $category->slug ?>">
                                                                <span class="facet-item__value"><?php echo $category->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $category->count ?>
                                                              </span>
                                                        
                                                    </div>
                                                    </a>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-facet--bix-facets-jobs-checkbox block block-facets block-facet-blockjob-level">
                                <?php
                                $levels = get_terms( array('taxonomy' => 'job_level','hide_empty' => false) );
                                $selected_levels = isset($_GET['level']) ? $_GET['level'] : array();
                                ?>
                                <h2 class="box-title <?php if(!empty($selected_levels)) {echo 'active';} ?>">level</h2>

                                <div class="item-list" <?php if(!empty($selected_levels)) {echo 'style="display:block"';} ?>>
                                    <ul data-sofia-facet-id="company_types_aggregate_type_type" data-sofia-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                        <?php foreach ($levels as $key => $level) : ?>

                                        <?php
                                            $current = false;
                                            if(in_array($level->slug, $selected_levels)) {
                                                $current = true;
                                            }
                                        ?>
                                            <li class="facet-item ">
                                                <?php if($current) :
                                                        $link  = remove_query_arg('level', $base);
                                                        foreach ($selected_levels as $key => $v) {
                                                            if($v != $level->slug) {
                                                                $link  = add_query_arg('level[]', $v, $link );
                                                            }
                                                        }
                                                    ?>
                                                        <a href="<?php echo esc_url($link); ?>">
                                                        <?php else : ?>
                                                            <a href="<?php echo esc_url(add_query_arg('level[]', $level->slug, $base)); ?>">
                                                        <?php endif; ?>
                                                <input type="checkbox" class="facets-checkbox" id="level-<?php echo $level->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                <div class="label" for="level-<?php echo $level->slug ?>">
                                                    
                                                            <span class="facet-item__value"><?php echo $level->name; ?></span>
                                                            <span class="facet-item__count">
                                                              <?php echo $level->count ?>
                                                          </span>
                                                    
                                                </div>
                                                </a>
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
                                        <ul data-sofia-facet-id="company_types_aggregate_type_type" data-sofia-facet-alias="company_types_aggregate_type_type" class="js-facets-checkbox-links">
                                            <?php foreach ($locations as $key => $location) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($location->slug, $selected_locations)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <?php if($current) :
                                                            $link  = remove_query_arg('location', $base);
                                                            foreach ($selected_locations as $key => $v) {
                                                                if($v != $location->slug) {
                                                                    $link  = add_query_arg('location[]', $v, $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('location[]', $location->slug, $base)); ?>">
                                                            <?php endif; ?>
                                                    <input type="checkbox" class="facets-checkbox" id="location-<?php echo $location->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <div class="label" for="location-<?php echo $location->slug ?>">
                                                        
                                                                <span class="facet-item__value"><?php echo $location->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $location->count ?>
                                                              </span>
                                                    </div>
                                                    </a>
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

                                    <h2 class="box-title">Vietnam Startups and Companies hiring</h2>
                                    <div class="views-element-container">
                                        <div class="view view-featured-companies view-id-featured_companies view-display-id-block_1 js-view-dom-id-8596e67c623c57090870162c80dfbb6058f72057a01c38e93cb41adb10a1f4fa">

                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="cover-image">
                                                        <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="300" height="300" alt="" class="image-style-company-logo">

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
                                                        <div> <img src="/RS278A5450.jpg" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="/aaeaaqaaaaaaaavuaaaajde0mjg1zgu0ltmzzjgtndi2mc05ogjkltu5nmu1zguyntcxzg.png" width="200" height="200" alt="" class="image-style-company-logo">

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
                                                        <div> <img src="/ezcater-2.jpg" width="480" height="360" alt="" class="image-style-company-card">

                                                        </div>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> <img src="/aaeaaqaaaaaaaaptaaaajddhyzlhzwuylwu3nwmtndvhmi1hntm3ltk1zmzkyjnjmznknq.png" width="200" height="200" alt="" class="image-style-company-logo">

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
                                $perpage = vp_option('joption.job_per_page', 10);
                                $currentpage = get_query_var('paged') ? get_query_var('paged') : 1;

                                $jobs = apply_filters('build_job_seach_query', null, $perpage, $currentpage);
                                ?>
                                <div class="views-element-container block block-views block-views-blockjobs-jobs-landing">

                                    <div>
                                        <div class="view view-jobs view-id-jobs view-display-id-jobs_landing js-view-dom-id-ae7974363fff15483cbc0325289ab751ccc487df96697d0a4be18cef7d4b2628">

                                            <h1 class="box-title"><?php echo $language_list[ICL_LANGUAGE_CODE]; ?> startup jobs and tech jobs</h1>
                                            <?php if($jobs->have_posts()) : ?>
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
                                                        <div class="description"><?php echo vp_metabox('jobplanet_job.short_desc'); ?></div>
                                                    </div>
                                                    <div class="right">
                                                        <div class="job-save">
                                                            <a <?php if(vp_metabox('jobplanet_job.application_url')){ echo "target='_blank'";} ?> href="<?php the_permalink(); ?>" class="flag-save_job ga-event-processed" data-ga-event="job-save-jobs-lp">apply</a></div>
                                                        <div class="job-date"><?php echo human_time_diff( strtotime(get_the_date()) ); ?></div>
                                                        <div class="job-location"><?php echo $term->name; ?></div>
                                                        <div class="link"><i></i></div>
                                                    </div>
                                                    <div class="wrap-view-page">
                                                        <a <?php if(vp_metabox('jobplanet_job.application_url')){ echo "target='_blank'";} ?> href="<?php the_permalink(); ?>" hreflang="en"> </a>
                                                    </div>
                                                </div>
                                            <?php endwhile; ?>

                                            </div>

                                            <?php
                                            if($jobs->max_num_pages > 1) {
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
                                            <?php } ?>
                                        <?php else : ?>
                                            <div class="view-empty">
                                            <div class="job-list-no-results">No results found, check if your spelling is correct, or try removing   filters
                                            </div>
                                        </div>
                                        <?php endif; ?>
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
