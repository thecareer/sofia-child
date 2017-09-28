<?php
get_header();
?>
<div class="region region-featured-top">
    <div class="region-inner">

        <div id="block-companiesheader" class="block block-block-content block-block-content1799b2a1-fb95-41d4-aecd-f60979c65325 block--narrow">
            <div class="node-header">
                <div class="node-header--image" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/img/Webp.net-compress-image.jpg');">
                </div>
                <div class="node-header--info-wrapper">
                    <div class="node-header--info">
                        <h1 class="node-header--title">
                            <div class="field field--name-field-header-subheadline field--type-string field--label-hidden field__item">
                                Boston Startup and Tech Companies
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
                                <?php
                                $industries = get_terms( array('taxonomy' => 'company-industry','hide_empty' => false) );
                                $selected_industry = isset($_GET['type']) ? $_GET['type'] : array();
                                ?>
                                <div class="block-facet--checkbox block block-facets block-facet-blockcompany-types-aggregate-type-industry">

                                    <h2 class="box-title <?php if(!empty($selected_industry)) {echo 'active';} ?>">Type</h2>

                                    <div class="item-list" <?php if(!empty($selected_industry)) {echo 'style="display:block"';} ?>>
                                        <ul data-drupal-facet-id="company_types_aggregate_type_industry" data-drupal-facet-alias="company_types_aggregate_type_industry" class="js-facets-checkbox-links">
                                            <?php foreach ($industries as $key => $industry) : ?>

                                            <?php
                                                $current = false;
                                                
                                                if(in_array($industry->slug, $selected_industry)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item ">
                                                    <?php if($current) : ?>
                                                        <a href="<?php echo esc_url(remove_query_arg('type[]', $industry->slug)); ?>">
                                                    <?php else : ?>
                                                        <a href="<?php echo esc_url(add_query_arg('type[]', $industry->slug)); ?>">
                                                    <?php endif; ?>
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $industry->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <label for="type-<?php echo $industry->slug ?>"><span class="facet-item__value"><?php echo $industry->name; ?></span>
                                                        <span class="facet-item__count">
                                                          <?php echo $industry->count ?>
                                                      </span>
                                                    </label>
                                                </a>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-facet--bix-facets-checkboxes block block-facets block-facet-blocklocal-employees">

                                    <h2 class="box-title">Size</h2>

                                    <div class="item-list">
                                        <ul data-drupal-facet-id="local_employees" data-drupal-facet-alias="local_employees" class="js-facets-checkbox-links">
                                            <li class="facet-item odd first">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[1 TO 10]">
                                                <label for="local_employees-[1 TO 10]"><span class="facet-item__value">1-10</span>
                                                    <span class="facet-item__count">
                                                    62
                                                </span>
                                                </label>
                                            </li>
                                            <li class="facet-item even">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[11 TO 25]">
                                                <label for="local_employees-[11 TO 25]"><span class="facet-item__value">11-25</span>
                                                    <span class="facet-item__count">
                                                      20
                                                  </span>
                                                </label>
                                            </li>
                                            <li class="facet-item odd">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[26 TO 30]">
                                                <label for="local_employees-[26 TO 30]"><span class="facet-item__value">26-30</span>
                                                    <span class="facet-item__count">
          7
      </span>
                                                </label>
                                            </li>
                                            <li class="facet-item even">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[51 TO 100]">
                                                <label for="local_employees-[51 TO 100]"><span class="facet-item__value">51-100</span>
                                                    <span class="facet-item__count">
          15
      </span>
                                                </label>
                                            </li>
                                            <li class="facet-item odd">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[101 TO 200]">
                                                <label for="local_employees-[101 TO 200]"><span class="facet-item__value">101-200</span>
                                                    <span class="facet-item__count">
          16
      </span>
                                                </label>
                                            </li>
                                            <li class="facet-item even last">
                                                <input type="checkbox" class="facets-checkbox" id="local_employees-[201 TO *]">
                                                <label for="local_employees-[201 TO *]"><span class="facet-item__value">200+</span>
                                                    <span class="facet-item__count">
          8
      </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <?php
                                $fundings = get_terms( array('taxonomy' => 'company-funding','hide_empty' => false) );
                                $selected_funding = isset($_GET['funding']) ? $_GET['funding'] : array();
                                ?>

                                <div class="block-facet--bix-facets-checkboxes block block-facets block-facet-blockfield-funding-amount last">

                                    <h2 class="box-title <?php if(!empty($selected_funding)) {echo 'active';} ?>">Funding</h2>

                                    <div class="item-list">
                                        <ul data-drupal-facet-id="field_funding_amount" data-drupal-facet-alias="field_funding_amount" class="js-facets-checkbox-links">
                                            <?php foreach ($fundings as $key => $funding) : ?>

                                            <?php
                                                $current = false;
                                                
                                                if(in_array($funding->slug, $selected_funding)) {
                                                    $current = true;
                                                }
                                            ?>
                                                <li class="facet-item facet-item--collapsed odd first">
                                                <?php if($current) : ?>
                                                    <a href="<?php echo esc_url(remove_query_arg('funding[]', $funding->slug)); ?>">
                                                <?php else : ?>
                                                    <a href="<?php echo esc_url(add_query_arg('funding[]', $funding->slug)); ?>">
                                                <?php endif; ?>
                                                
                                                    <input type="checkbox" class="facets-checkbox" id="type-<?php echo $funding->slug ?>" <?php if($current){echo 'checked=true';} ?> >
                                                    <label for="type-<?php echo $funding->slug ?>"><span class="facet-item__value"><?php echo $funding->name; ?></span>
                                                        <span class="facet-item__count">
                                                          <?php echo $funding->count ?>
                                                      </span>
                                                    </label>
                                                </a>
                                                </li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block block-bix-global block-bix-global-add-company">

                                    <h5 class="title">Are you a<br>new Boston<br>startup?</h5>
                                    <div class="headline">Our community
                                        <br>isn’t the same
                                        <br>without you in it.</div>
                                    <div class="more-link"><span>Add Your Company</span></div>
                                    <a href="/node/add/company" class="link-above"></a>
                                </div>
                                <div class="views-element-container block block-views block-views-blockcompany-trending-articles-block-3">

                                    <div>
                                        <div class="sidebar-listing view view-company-trending-articles view-id-company_trending_articles view-display-id-block_3 js-view-dom-id-9446dc39fdeed907c92526efa60cbaf050c083739ae1b47a1fc13b3de718a81d">

                                            <h2 class="box-title">Most Popular Reads</h2>

                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-05/Volunteer.jpg" width="250" height="190" alt="5 Boston tech companies where employees get time off to volunteer" class="image-style-news-card">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>5 Boston tech companies where employees get time off to volunteer</span></div>
                                                    <a href="/2017/04/07/get-paid-volunteer-boston-tech-companies" class="link-above"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-07/zagster_pup-min.png" width="250" height="190" alt="dog" class="image-style-news-card">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>Pooches as perks: 5 Boston tech offices where dogs are part of the team</span></div>
                                                    <a href="/2017/04/11/dog-friendly-offices-0" class="link-above"></a>
                                                </div>
                                                <div class="views-row">
                                                    <div class="image">
                                                        <div> <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-05/shutterstock_404972962.jpg" width="250" height="190" alt="diversity" class="image-style-news-card">

                                                        </div>
                                                    </div>
                                                    <div class="title"><span>Diversity in tech: How 5 Boston companies are fighting for more inclusive work...</span></div>
                                                    <a href="/2017/05/18/how-boston-companies-fighting-diversity-tech" class="link-above"></a>
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
                $query = array(
                    'post_status' => 'publish',
                    'post_type' => 'company',
                    'posts_per_page' => 3,
                );
                $companies = new WP_Query($query);

                ?>
                <div class="l-content left">
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <div class="views-element-container block block-views block-views-blockcompanies-landing-companies-landing-content">

                                    <div>
                                        <div class="view view-companies-landing view-id-companies_landing view-display-id-companies_landing_content js-view-dom-id-c4a6b0ee54cdd9791c927a0d29c75886840844819a78a248fdc18e00694ed383">

                                            <div class="view-content">
                                            <?php while($companies->have_posts()) : $companies->the_post(); ?>
                                            <?php
                                            $company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
                                            if($company_cover_id) {
                                                $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'full');
                                                $cover_image_src = $cover_image_src['0'];
                                            }else {
                                                $cover_image_src = '//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_card_thumbnail/public/cover_photo_3.png';
                                            }
                                            ?>

                                                <div class="views-row">
                                                    <div class="cover-image">
                                                        <span>
                                                            <img src="<?php echo $cover_image_src; ?>" width="258" height="193" alt="" class="image-style-company-card-thumbnail">

                                                        </span>
                                                    </div>
                                                    <div class="logo-wrapper-small">
                                                        <div class="centered"> 
                                                            <!-- <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_logo/public/company_logos/aaeaaqaaaaaaaaksaaaajde3zgrinzk0ltc2ngitndc0my05ytfiltyzmji4njnlzge2na.png" width="200" height="200" alt="" class="image-style-company-logo"> -->
                                                            <?php the_post_thumbnail(); ?>
                                                        </div>
                                                    </div>
                                                    <div class="title"><span><?php the_title(); ?></span></div>
                                                    <div class="company-type"><span>Other</span></div>
                                                    <div class="link"><i></i></div>
                                                    <div class="wrap-view-page">
                                                        <a href="<?php the_permalink() ?>" hreflang="en"> </a>
                                                    </div>
                                                </div>
                                            <?php endwhile; ?>
                                            <?php
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
