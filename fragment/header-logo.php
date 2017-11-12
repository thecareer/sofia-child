<div class="header-wrapper">
    <header role="banner">
        <div class="region region-header">
            <div class="views-exposed-form block block-views block-views-exposed-filter-blocksearch-page-1" data-sofia-selector="views-exposed-form-search-page-1" id="block-exposedformsearchpage-1">

                <form action="/" method="get" id="views-exposed-form-search-page-1" accept-charset="UTF-8">
                    <div class="form--inline clearfix">
                        <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-s form-item-s">
                            <label for="edit-s">Search |</label>
                            <input data-sofia-selector="edit-s" class="form-autocomplete form-text ui-autocomplete-input" data-autocomplete-path="/global-search-autocomplete/search_string" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" autocomplete="off">

                        </div>
                        <div data-sofia-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                            <input data-sofia-selector="edit-submit-search" type="submit" id="edit-submit-search" value="Apply" class="button js-form-submit form-submit">
                        </div>

                    </div>

                </form>

            </div>
            <div id="block-bix-branding" class="block block-system block-system-branding-block">

                <a href="/" title="Home" rel="home" class="site-logo">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/startup.jobs.logo.svg" alt="Startup.JOBS">
                </a>
                <?php /*
                $language_list = startup_language_list();
                // ICL_LANGUAGE_CODE
                ?>
                <ul class="selectcountrymenu nav">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#"><?php echo $language_list[ICL_LANGUAGE_CODE]; ?> <span class="caret"></span></a>
                        <div class="dropdown-content">
                    <?php 
                        unset($language_list[ICL_LANGUAGE_CODE]);
                        foreach ($language_list as $key => $lang) :
                            if($key == 'en') {$key = '';}
                         ?>
                        <a href="/<?php echo $key ?>"><?php echo $lang; ?></a>
                    <?php endforeach; ?>
                      </div>
                    </li>
                    </ul>
                <?php */ ?>
            </div>

        </div>

    </header>

    <div class="region region-primary-menu">
        <nav role="navigation" aria-labelledby="block-mainnavigationmobile-menu" id="block-mainnavigationmobile" class="block block-menu navigation menu--main-mobile">

            <ul class="menu">
                <li class="menu-item">
                    <a href="<?php echo home_url(); ?>" data-sofia-link-system-path="<front>">Home</a>
                </li>
                <li class="menu-item">
                    <a href="<?php echo home_url( '/jobs' ); ?>" data-sofia-link-system-path="jobs">Jobs</a>
                </li>
                <li class="menu-item">
                    <a href="<?php echo home_url( '/companies' ); ?>">Companies</a>
                </li>
                <li class="menu-item">
                    <a href="<?php echo home_url( '/blogs' ); ?>" data-sofia-link-system-path="blogs">Blog</a>
                </li>
                <?php /*
                <li class="menu-item menu-item--expanded">
                    <a href="/" data-sofia-link-system-path="<front>">More</a>
                    <ul class="menu">
                        <li class="button menu-item">
                            <a href="/user/register" data-sofia-link-system-path="user/register">Sign Up</a>
                        </li>
                        <li class="button menu-item">
                            <a href="/user/login" data-sofia-link-system-path="user/login">Log In</a>
                        </li>
                        <li class="menu-item">
                            <a href="/companies" data-sofia-link-system-path="companies">Startups</a>
                        </li>
                        <li class="menu-item">
                            <a href="/events" data-sofia-link-system-path="events">Events</a>
                        </li>
                    </ul>

                </li>
                */ ?>
            </ul>

            <div class="views-exposed-form block block-views block-views-exposed-filter-blocksearch-page-1" data-sofia-selector="views-exposed-form-search-page-1" id="block-exposedformsearchpage-1">

                <form action="/" method="get" id="views-exposed-form-search-page-1" accept-charset="UTF-8">
                    <div class="form--inline clearfix">
                        <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-s form-item-s">
                            <label for="edit-s">Search |</label>
                            <input data-sofia-selector="edit-s" class="form-autocomplete form-text ui-autocomplete-input" data-autocomplete-path="/global-search-autocomplete/search_string" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" autocomplete="off">

                        </div>
                        <div data-sofia-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                            <input data-sofia-selector="edit-submit-search" type="submit" id="edit-submit-search" value="Apply" class="button js-form-submit form-submit">
                        </div>

                    </div>

                </form>

            </div>

        </nav>
        <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation" class="block block-menu navigation menu--main">
        <?php global $post; ?>
            <ul class="menu">
                <li class="nav-item jobs menu-item <?php if( is_page_template( 'search-job.php' ) || is_singular( 'job' ) ) {echo 'active';} ?>">
                    <a href="/jobs"><span>Job Search</span></a>
                    <div class="nav-content" style="display: none;">
                        <div class="nav-content-inner">
                            <div class="submenu">
                                <a href="https://company.startup.jobs">
                                    <h3 class="title">Looking<br>to hire?</h3>
                                    <div class="headline">Give the community
                                        <br>something worth
                                        <br>applying for.</div>
                                </a>
                                <div class="more-link">
                                    <a href="https://app.jazz.co/app/v2/job/create">Post a job</a>
                                </div>
                            </div>
                            <div class="views-element-container">
                                <div class="view view-navigation-job-categories view-id-navigation_job_categories view-display-id-block_1 js-view-dom-id-850a5ed4456e08eecc9fdb360336a9fa034f41411a464e65ffb9bc250389ecf4">

                                    <div class="view-content">

                                        <div class="views-row">
                                            <div class="title"><a href="/jobs">All jobs</a></div>
                                            <div class="link"><a href="/jobs">All jobs</a></div>
                                        </div>

                                        <div class="category-wrapper-data-analytics views-row">
                                            <div class="title"><a href="/jobs?category[]=data-analytics">Data + Analytics</a></div>
                                            <div class="link"><a href="/jobs?category[]=data-analytics">Data + Analytics</a></div>
                                        </div>
                                        <div class="category-wrapper-design views-row">
                                            <div class="title"><a href="/jobs?category[]=design-ux">Design + UX</a></div>
                                            <div class="link"><a href="/jobs?category[]=design-ux">Design + UX</a></div>
                                        </div>
                                        <div class="category-wrapper-developer views-row">
                                            <div class="title"><a href="/jobs?category[]=developer-engineer">Developer + Engineer</a></div>
                                            <div class="link"><a href="/jobs?category[]=developer-engineer">Developer + Engineer</a></div>
                                        </div>
                                        <div class="category-wrapper-finance views-row">
                                            <div class="title"><a href="/jobs?category[]=finance">Finance</a></div>
                                            <div class="link"><a href="/jobs?category[]=finance">Finance</a></div>
                                        </div>
                                        <div class="category-wrapper-marketing views-row">
                                            <div class="title"><a href="/jobs?category[]=marketing">Marketing</a></div>
                                            <div class="link"><a href="/jobs?category[]=marketing">Marketing</a></div>
                                        </div>
                                        <div class="category-wrapper-operations views-row">
                                            <div class="title"><a href="/jobs?category[]=operations">Operations</a></div>
                                            <div class="link"><a href="/jobs?category[]=operations">Operations</a></div>
                                        </div>
                                        <div class="category-wrapper-product views-row">
                                            <div class="title"><a href="/jobs?category[]=product">Product</a></div>
                                            <div class="link"><a href="/jobs?category[]=product">Product</a></div>
                                        </div>
                                        <div class="category-wrapper-project-mgmt views-row">
                                            <div class="title"><a href="/jobs?category[]=project-management">Project Management</a></div>
                                            <div class="link"><a href="/jobs?category[]=project-management">Project Management</a></div>
                                        </div>
                                        <div class="category-wrapper-sales views-row">
                                            <div class="title"><a href="/jobs?category[]=sales">Sales</a></div>
                                            <div class="link"><a href="/jobs?category[]=sales">Sales</a></div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="underlay"></div>
                    </div>
                </li>
                <li class="nav-item startups menu-item menu-item--expanded <?php if( is_page_template( 'company-list.php' ) || is_singular( 'company' ) ) {echo 'active';} ?>">
                    <a href="/companies"><span>Companies</span></a>
                    <div class="nav-content" style="display: none;">
                        <div class="nav-content-inner">
                            <ul class="menu">
                                <li class="menu-item">
                                    <a href="/companies"><span>All Companies</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/companies?solrsort=is_company_hiring%20desc"><span>Hiring Now</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/companies?solrsort=ds_field_year_founded%20desc"><span>New Startups</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/companies?solrsort=ds_company_funding_max%20desc"><span>Recently Funded</span></a>
                                </li>
                            </ul>
                            <?php
                            $companies = new WP_Query(
                                array('post_type' => 'company', 'post_status' => 'publish', 'company-tag' => 'featured-company-menu', 'showposts' => 3)
                            );
                            ?>
                            <div class="nav-content-view">
                                <div class="views-element-container">
                                    <div class="overlay-grid view view-navigation-series view-id-navigation_series view-display-id-block_1 js-view-dom-id-319cb1d3f6b7a4169eaeb92241b819b879356141f0b904e357cf1e50d4b291e3">

                                        <div class="view-content">
                                        <?php while ($companies->have_posts()) : $companies->the_post(); 
                                            $company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
                                            if($company_cover_id) {
                                                $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'header-thumbnail');
                                                $cover_image_src = $cover_image_src['0'];
                                            }else {
                                                $cover_image_src = get_stylesheet_directory_uri(). '/img/cover_photo_3.png';
                                            }
                                        ?>
                                            <div class="views-row">
                                                <div class="image">
                                                    <div>
                                                        <a href="<?php the_permalink(); ?>"><img src="<?php echo $cover_image_src; ?>" width="265" height="200" alt="<?php the_title(); ?>" class="image-style-navigation-image">

                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="title"><span><a href="<?php the_permalink(); ?>" hreflang="en"><?php the_title(); ?></a></span></div>
                                                <div class="link"><span><a href="<?php the_permalink(); ?>" hreflang="en">View more</a></span></div>
                                            </div>
                                        <?php endwhile; ?>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <?php wp_reset_query(); ?>
                        </div>
                        <div class="underlay"></div>
                    </div>
                </li>
                <?php
                /*
                <li class="nav-item events menu-item menu-item--expanded">
                    <a href="/events"><span>Events</span></a>
                    <div class="nav-content" style="display: none;">
                        <div class="nav-content-inner">
                            <ul class="menu">
                                <li class="menu-item">
                                    <a href="/events"><span>All Events</span></a>
                                </li>
                            </ul>
                            <div class="nav-content-view">
                                <div class="views-element-container">
                                    <div class="view view-navigation-events view-id-navigation_events view-display-id-block_1 js-view-dom-id-b60555ba8da64394653cfef7ffce084474d85c3c34be3602cbb5db1fd5afd89f">
                                        <div class="view-content">
                                            <div class="views-row">
                                                <div class="date">
                                                    <div class="date-not-today">Mon
                                                        <br>May 1</div>
                                                </div>
                                                <div class="cover-image">
                                                    <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">
                                                    </div>
                                                </div>
                                                <div class="title"><span>ODSC East • Boston 2017 Data Science Conference &amp; AI Expo (PAID EVENT)</span></div>
                                                <div class="organized-by">
                                                    <div>Boston Data Mining</div>
                                                </div>
                                                <a class="view-page" href="/event/odsc-east-boston-2017-data-science-conference-ai-expo-paid-event"></a>
                                            </div>
                                            <div class="views-row">
                                                <div class="date">
                                                    <div class="date-not-today">Mon
                                                        <br>May 1</div>
                                                </div>
                                                <div class="cover-image">
                                                    <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">
                                                    </div>
                                                </div>
                                                <div class="title"><span>Healing Diseases By Sharing Info. Supporting One Another</span></div>
                                                <div class="organized-by">
                                                    <div> Boston Hacking Predictive Analytics App</div>
                                                </div>
                                                <a class="view-page" href="/event/healing-diseases-sharing-info-supporting-one-another"></a>
                                            </div>
                                            <div class="views-row">
                                                <div class="date">
                                                    <div class="date-not-today">Mon
                                                        <br>May 1</div>
                                                </div>
                                                <div class="cover-image">
                                                    <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">
                                                    </div>
                                                </div>
                                                <div class="title"><span>HackerNest Boston May Tech Social</span></div>
                                                <div class="organized-by">
                                                    <div>HackerNest Boston Tech Socials</div>
                                                </div>
                                                <a class="view-page" href="/event/hackernest-boston-may-tech-social"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="underlay"></div>
                    </div>
                </li>
                */
                ?>
                <li class="nav-item news menu-item menu-item--expanded <?php if(is_page_template( 'template-blog.php' ) || is_singular( 'post' )) {echo 'active';} ?>">
                    <a href="<?php echo home_url( '/blogs' ); ?>"><span>Blog</span></a>
                    <div class="nav-content" style="display: none;">
                        <div class="nav-content-inner">
                            <ul class="menu">
                                <li class="menu-item">
                                    <a href="/blogs"><span>All Blog</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/blogs/guide"><span>Startup Tech Guides</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/blogs/reports"><span>Industry Reports</span></a>
                                </li>
                                <li class="menu-item">
                                    <a href="/blogs/insider"><span>Insider Spotlights</span></a>
                                </li>
                            </ul>
                            <?php
                            $news = new WP_Query(
                                array('post_type' => 'post', 'post_status' => 'publish', 'tag' => 'navi-featured', 'showposts' => 2)
                            );
                            ?>
                            <div class="nav-content-view">
                                <div class="views-element-container">
                                    <div class="view view-navigation-news view-id-navigation_news view-display-id-block_1 js-view-dom-id-3674a625132b29eeb71d44d12895767158e56bd5d2095d8a9e044e1f80c81b9b">
                                        
                                        <div class="view-content">

                                            <?php while($news->have_posts()) : $news->the_post(); ?>
                                            <div class="views-row">
                                                <div class="image">
                                                    <div>
                                                        <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url('header-thumbnail'); ?>" width="265" height="200" alt="" class="image-style-navigation-image">

                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="title"><span><a href="<?php the_permalink(0); ?>">
                                                    <?php the_title(); ?></a></span>
                                                </div>
                                            </div>
                                            <?php endwhile; ?>
                                            <?php wp_reset_query(); ?>

                                            <div class="views-row">
                                                <div class="image">
                                                    <a href="/blog"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/cyber-security-boston_0.jpg" width="265" height="200" alt="" class="image-style-navigation-image">

                                                    </a>
                                                </div>
                                                <div class="title"><a href="/blog">Cybersecurity in Boston: Your Guide to Cool Jobs &amp; Companies</a></div>
                                                <div class="link"><a href="/blog">Cybersecurity in Boston: Your Guide to Cool Jobs &amp; Companies</a></div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="underlay"></div>
                    </div>
                </li>
                <li class="nav-item search menu-item">
                    <a href="/"><span>Search</span></a>
                    <div class="nav-content" style="display: none;">
                        <div class="nav-content-inner">
                            <div class="views-exposed-form block block-views block-views-exposed-filter-blocksearch-page-1" data-sofia-selector="views-exposed-form-search-page-1" id="block-exposedformsearchpage-1">

                                <form action="/search" method="get" id="views-exposed-form-search-page-1" accept-charset="UTF-8">
                                    <div class="form--inline clearfix">
                                        <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-s form-item-s">
                                            <label for="edit-s">Search |</label>
                                            <input data-sofia-selector="edit-s" class="form-autocomplete form-text ui-autocomplete-input" data-autocomplete-path="/global-search-autocomplete/search_string" type="text" id="edit-s" name="keyword" value="" size="30" maxlength="128" autocomplete="off">

                                        </div>
                                        <div data-sofia-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
                                            <input data-sofia-selector="edit-submit-search" type="submit" id="edit-submit-search" value="Apply" class="button js-form-submit form-submit">
                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="block-accountmenunavigation" class="block block-bix-global block-bix-global-account-menu">
            <a href="https://app.jazz.co/app/v2/job/create" class="post-job ga-event-processed" data-ga-event="customers-post-job">Post Job</a><span><a href="/employer" data-ga-event="user-acq-join-nav-bar" class="ga-event-processed">Employer</a></span>
        </div>
    </div>
</div>
</div>