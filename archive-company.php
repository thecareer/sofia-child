<?php
get_header();
$language_list = startup_language_list();
$base = remove_query_arg( 'paged' );
$base = preg_replace('%\/page/[0-9]+%', '', $base);
if( isset($_GET['keyword']) && empty($_GET['keyword'])) {
    $base = remove_query_arg( 'keyword', $base );
}
?>
<script type="application/ld+json">{"@context": "http://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "item": { "@type": "WebSite", "@id": "https://startup.jobs", "name": "Home Page" } },{ "@type": "ListItem", "position": 2, "item": { "@type": "WebPage", "@id": "https://startup.jobs/companies", "name": "Startup Companies" } } ] }</script>
<div class="region region-featured-top">
    <div class="region-inner">

        <div id="block-companiesheader" class="block block-block-content block--narrow">
            <div class="node-header">
                <div class="node-header--image" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/img/Webp.net-compress-image.jpg');">
                </div>
                <div class="node-header--info-wrapper">
                    <div class="node-header--info">
                        <h1 class="node-header--title">
                            <div class="field field--name-field-header-subheadline field--type-string field--label-hidden field__item">
                                <?php echo $language_list[ICL_LANGUAGE_CODE]; ?> Startup and Tech Companies
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<!-- main -->
<main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div class="region region-content">
            <div class="l-three-columns container">
                <div class="l-left-column">
                    <div class="row">
                        <div class="">
                            <div class="block-region-left">
                                <?php
                                /*
                                <div class="block-facets block block-bix-companies block-bix-companies-landing-sort">
                                
                                    <h4 class="box-title active">Filter Your Results</h4>
                                    <div class="item-list">
                                        <ul>
                                            <li class="inactive"><a href="<?php echo esc_url(add_query_arg('orderby', 'hiring')); ?>">Hiring now</a></li>
                                            <li class="inactive"><a href="echo esc_url(add_query_arg('orderby', 'funded'));">Recently Funded</a></li>
                                            <li class="inactive"><a href="echo esc_url(add_query_arg('orderby', 'date'));">Recently Launched</a></li>
                                        </ul>
                                    </div>
                                </div>
                                */
                                ?>
                                <?php
                                $industries = get_terms( array('taxonomy' => 'company-industry','hide_empty' => false) );
                                $selected_industry = isset($_GET['type']) ? $_GET['type'] : array();
                                ?>
                                <div class="block-facet--checkbox block block-facets block-facet-blockcompany-types-aggregate-type-industry">

                                    <h2 class="box-title <?php if(!empty($selected_industry)) {echo 'active';} ?>">Category</h2>

                                    <div class="item-list" style="display:block">
                                        <ul data-sofia-facet-id="company_types_aggregate_type_industry" data-sofia-facet-alias="company_types_aggregate_type_industry" class="js-facets-checkbox-links">
                                            <?php foreach ($industries as $key => $industry) : ?>

                                            <?php
                                                $current = false;
                                                if(in_array($industry->slug, $selected_industry)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <?php if($current) : 
                                                            $link  = remove_query_arg('type', $base );
                                                            foreach ($selected_industry as $key => $v) {
                                                                if($v != $industry->slug) {
                                                                    $link  = add_query_arg(array('type[]' => $v), $link );
                                                                }
                                                            }
                                                        ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php else : ?>
                                                                <a href="<?php echo esc_url(add_query_arg('type[]', $industry->slug, $base )); ?>">
                                                            <?php endif; ?>
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $industry->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <div class="label" for="type-<?php echo $industry->slug ?>">
                                                        
                                                                <span class="facet-item__value"><?php echo $industry->name; ?></span>
                                                                <span class="facet-item__count">
                                                                  <?php echo $industry->count ?>
                                                              </span>
                                                    </div>
                                                    </a>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>

                                <!-- company-size -->
                                <?php
                                $sizes = get_terms( array('taxonomy' => 'company-size','hide_empty' => false) );
                                $selected_size = isset($_GET['size']) ? $_GET['size'] : array();
                                ?>
                                <div class="block-facet--bix-facets-checkboxes block block-facets block-facet-blocklocal-employees">

                                    <h2 class="box-title <?php if(!empty($selected_size)) {echo 'active';} ?>">Size</h2>

                                    <div class="item-list" <?php if(!empty($selected_size)) {echo 'style="display:block"';} ?>>
                                        <ul data-sofia-facet-id="local_employees" data-sofia-facet-alias="local_employees" class="js-facets-checkbox-links">
                                        <?php foreach ($sizes as $key => $size) : ?>

                                            <?php
                                                $current = false;
                                                
                                                if(in_array($size->slug, $selected_size)) {
                                                    $current = true;
                                                }
                                            ?>
                                            <li class="facet-item odd first">
                                                <?php if($current) : 
                                                    $link  = remove_query_arg('size', $base );
                                                    foreach ($selected_size as $key => $v) {
                                                        if($v != $size->slug) {
                                                            $link  = add_query_arg(array('size[]' => $v), $link );
                                                        }
                                                    }
                                                ?>
                                                    <a href="<?php echo esc_url($link); ?>">
                                                <?php else : ?>
                                                    <a href="<?php echo esc_url(add_query_arg('size[]', $size->slug, $base )); ?>">
                                                <?php endif; ?>
                                                <input type="checkbox" class="facets-checkbox" id="size-<?php echo $size->slug ?>" <?php if($current){echo 'checked=true';} ?>>
                                                <div class="label" for="size-<?php echo $size->slug ?>">
                                                    <span class="facet-item__value"><?php echo $size->name; ?></span>
                                                        <span class="facet-item__count">
                                                        <?php echo $size->count ?>
                                                    </span>
                                                
                                                </div>
                                                </a>
                                            </li>
                                            <?php endforeach;?>
                                        </ul>
                                    </div>
                                </div>


                                <?php
                                $locationss = get_terms( array('taxonomy' => 'company-location','hide_empty' => false) );
                                $selected_locations = isset($_GET['locations']) ? $_GET['locations'] : array();
                                ?>

                                <div class="block-facet--bix-facets-checkboxes block block-facets block-facet-blockfield-location-amount last">

                                    <h2 class="box-title <?php if(!empty($selected_locations)) {echo 'active';} ?>">Location</h2>

                                    <div class="item-list" <?php if(!empty($selected_locations)) {echo 'style="display:block"';} ?>>
                                        <ul data-sofia-facet-id="field_locations_amount" data-sofia-facet-alias="field_locations_amount" class="js-facets-checkbox-links">
                                            <?php foreach ($locationss as $key => $locations) : ?>

                                            <?php
                                                $current = false;
                                                
                                                if(in_array($locations->slug, $selected_locations)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item facet-item--collapsed odd first">
                                                <?php if($current) : 
                                                        $link  = remove_query_arg('locations', $base );
                                                        foreach ($selected_locations as $key => $v) {
                                                            if($v != $locations->slug) {
                                                                $link  = add_query_arg(array('locations[]' => $v), $link );
                                                            }
                                                        }
                                                    ?>
                                                        <a href="<?php echo esc_url($link); ?>">
                                                    <?php else : ?>
                                                        <a href="<?php echo esc_url(add_query_arg('locations[]', $locations->slug , $base )); ?>">
                                                    <?php endif; ?>
                                                
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $locations->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <div class="label" for="type-<?php echo $locations->slug ?>">
                                                        
                                                            <span class="facet-item__value"><?php echo $locations->name; ?></span>
                                                            <span class="facet-item__count">
                                                              <?php echo $locations->count ?>
                                                        </span>
                                                     
                                                    </div>
                                                    </a>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block block-bix-global block-bix-global-add-company">

                                    <h5 class="title">Are you a<br>new Vietnam<br>startup?</h5>
                                    <div class="headline">Our community
                                        <br>isn’t the same
                                        <br>without you in it.</div>
                                    <div class="more-link"><span>Add Your Company</span></div>
                                    <a href="/employer" class="link-above"></a>
                                </div>
                                <?php
                                /*
                                <div class="views-element-container block block-views block-views-blockcompany-trending-articles-block-3">
                                    <div>
                                        <div class="sidebar-listing view view-company-trending-articles view-id-company_trending_articles view-display-id-block_3 js-view-dom-id-9446dc39fdeed907c92526efa60cbaf050c083739ae1b47a1fc13b3de718a81d">
                                            <h2 class="box-title">Most Popular Reads</h2>
                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="250" height="190" alt="5 Vietnam tech companies where employees get time off to volunteer" class="image-style-news-card">
                                                        </div>
                                                    </div>
                                                    <div class="title"><span>5 Vietnam tech companies where employees get time off to volunteer</span></div>
                                                    <a href="/2017/04/07/get-paid-volunteer-boston-tech-companies" class="link-above"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="250" height="190" alt="dog" class="image-style-news-card">
                                                        </div>
                                                    </div>
                                                    <div class="title"><span>Pooches as perks: 5 Vietnam tech offices where dogs are part of the team</span></div>
                                                    <a href="/2017/04/11/dog-friendly-offices-0" class="link-above"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="250" height="190" alt="diversity" class="image-style-news-card">
                                                        </div>
                                                    </div>
                                                    <div class="title"><span>Diversity in tech: How 5 Vietnam companies are fighting for more inclusive work...</span></div>
                                                    <a href="/2017/05/18/how-boston-companies-fighting-diversity-tech" class="link-above"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
                global $wp_query;
                $perpage = vp_option('joption.job_per_page', 9);
                $currentpage = get_query_var('paged') ? get_query_var('paged') : 1;
                $companies = $wp_query;
                ?>
                <div class="l-content left">
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <div class="views-element-container block block-views block-views-blockcompanies-landing-companies-landing-content">

                                    <div>
                                        <div class="view view-companies-landing view-id-companies_landing view-display-id-companies_landing_content js-view-dom-id-c4a6b0ee54cdd9791c927a0d29c75886840844819a78a248fdc18e00694ed383">
                                        <?php if(have_posts()) : ?>
                                            <div class="view-content">
                                                <?php while(have_posts()) : the_post(); ?>
                                                <?php
                                                $company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
                                                $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'cover-list');
                                                $cover_image_src = $cover_image_src['0'];
                                                $terms = wp_get_post_terms( get_the_ID(), 'company-industry');
                                                $term = $terms[0];
                                                ?>

                                                    <div class="views-row">
                                                        <div class="cover-image">
                                                            <span>
                                                                <img src="<?php echo $cover_image_src; ?>" width="258" height="193" alt="" class="image-style-company-card-thumbnail">

                                                            </span>
                                                        </div>
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered">
                                                                <?php the_post_thumbnail(); ?>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><?php the_title(); ?></span></div>
                                                        <div class="company-type"><span><?php echo $term->name; ?></span></div>
                                                        <div class="link"><i></i></div>
                                                        <div class="wrap-view-page">
                                                            <a href="<?php the_permalink() ?>" hreflang="en"> </a>
                                                        </div>
                                                    </div>
                                                <?php endwhile; ?>
                                            </div>
                                            <?php
                                            if($companies->max_num_pages > 1) {
                                                $big = 999999999; // need an unlikely integer
                                                $link =  paginate_links( array(
                                                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                                    'format' => '?paged=%#%',
                                                    'current' => max( 1, get_query_var('paged') ),
                                                    'total' => $companies->max_num_pages,
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

                                                    <?php if(get_query_var('paged') < $companies->max_num_pages) : ?>



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

</main>
<!-- // main -->
<?php
get_footer();
