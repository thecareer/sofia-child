<?php 
get_header();
the_post();
$industry = get_the_terms(get_the_ID(), 'company-industry');
$company_image = get_the_post_thumbnail_url();
$latlng = explode(',', vp_metabox('jobplanet_company.map_location'));
?>

<main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div class="region region-content">
            <div class="l-three-columns container">
                <div class="l-header">
                    <div class="block-region-header">
                        <div class="views-element-container block block-views block-views-blockcompany-card-block-1">

                            <div>
                                <div class="view view-company-card view-id-company_card view-display-id-block_1 js-view-dom-id-8120b700e81f3cf0457d28710ce8907c100c4322bfc72cb7d17cb6ada0e161bf">

                                    <div class="view-content">
                                        <div class="views-row">
                                            <div class="company-card-logo">
                                                <div class="logo-wrapper">
                                                    <div class="centered">
                                                        <img src="<?php echo $company_image; ?>" width="300" height="300" alt="" class="image-style-company-logo">

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="company-card-content">
                                                <div class="company-card-title">
                                                    <h1><?php the_title(); ?></h1>
                                                    <!-- <div class="buttons">
                                                        <div id="create-job-alert-wrapper"><a href="/bix-job-newsletter/company-alerts/874/job-alert-company-lp" class="use-ajax" data-dialog-type="modal" data-dialog-options="{&quot;width&quot;:555}">Create job alert</a></div>
                                                    </div> -->
                                                </div>
                                                <div class="company-card-info">
                                                    <div class="col-1">
                                                        <div class=""><?php echo vp_metabox('jobplanet_company.address') ?></div>
                                                        <div class=""><?php echo $industry[0]->name; ?></div>
                                                        <!-- <div class="">Automotive, Technology</div> -->
                                                    </div>
                                                    <div class="col-2">
                                                        <div class="year-founding"> Founded in
                                                            <time datetime="2006-01-01T12:00:00Z" class="datetime"><?php echo vp_metabox('jobplanet_company.founded_year') ?></time>
                                                        </div>
                                                        <div class="">
                                                            <div class=""></div>
                                                        </div>
                                                        <div class=""><?php echo vp_metabox('jobplanet_company.number_of_employee') ?> Local Employees</div>
                                                    </div>
                                                    <div class="col-3">
                                                        <a href="<?php echo vp_metabox('jobplanet_company.website') ?>" class="profile-social-link website" target="_blank">
                                                            <?php echo vp_metabox('jobplanet_company.website') ?>
                                                        </a>
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
                <div class="l-content right">
                    <div class="row">
                        <div class="block-region-top-wrapper">
                            <div class="block-region-top">
                                <div class="views-element-container block block-views block-views-blockpremium-company-overview-block-1" style="backface-visibility: hidden;">

                                    <div>
                                        <div class="view view-premium-company-overview view-id-premium_company_overview view-display-id-block_1 js-view-dom-id-26c548265a8c8a92da802d52e767d208937f383a316afacb74876ae84374793f">

                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="company-overview-content">
                                                        <div class="row first-child">
                                                            <div class="col-1">
                                                                <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview/public/cargurus.png" width="435" height="320" alt="" class="image-style-company-overview">

                                                                <div class="company-gallery-dots"><span class="item"></span><span class="item"></span></div>
                                                            </div>
                                                            <div class="col-2">
                                                                <!-- <h2 class="title"><?php printf(__( "Hello, we're %s" , "enginethemes" ), get_the_title()); ?></h2> -->
                                                                <div class="description">
                                                                    <?php the_content(  ); ?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row last-child">
                                                            <div class="col-1">
                                                                <h2 class="title">Why Work with Us?</h2>
                                                                <div class="description">
                                                                    <?php echo vp_metabox('jobplanet_company.short_desc'); ?>
                                                                </div>
                                                            </div>
                                                            <div class="col-2">
                                                                <img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview/public/company_photo.jpg" width="435" height="320" alt="" class="image-style-company-overview">

                                                                <div class="culture-words">
                                                                    <div class="company-adjectives-title">We are</div>
                                                                    <div class="company-adjectives">
                                                                        <?php echo vp_metabox('jobplanet_company.slogan'); ?>
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
                                <div class="views-element-container block block-views block-views-blockcompany-slideshow-block-1" style="backface-visibility: hidden;">

                                    <div>
                                        <div class="view view-company-slideshow view-id-company_slideshow view-display-id-block_1 js-view-dom-id-a989b160f61384a8cf046c533d7dc3a1eb8cef9a197acb23cc5f9e0c3b80b610">

                                            <div class="view-content">
                                                <div>

                                                    <div class="lSSlideOuter ">
                                                        <div class="lSSlideWrapper usingCss">
                                                            <ul id="company-slideshow" class="processed lightSlider lsGrab lSSlide" style="width: 3236px; transform: translate3d(-809px, 0px, 0px);">
                                                                <li data-thumb="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/company_photo.jpg" class="clone left" style="width: 809px; margin-right: 0px;"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/company_photo.jpg"></li>

                                                                <li data-thumb="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/cargurus.png" class="lslide active" style="width: 809px; margin-right: 0px;"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/cargurus.png"></li>
                                                                <li data-thumb="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/company_photo.jpg" class="lslide" style="width: 809px; margin-right: 0px;"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/company_photo.jpg"></li>
                                                                <li data-thumb="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/cargurus.png" class="clone right" style="width: 809px; margin-right: 0px;"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/cargurus.png"></li>
                                                            </ul>
                                                            <div class="lSAction">
                                                                <a class="lSPrev"></a>
                                                                <a class="lSNext"></a>
                                                            </div>
                                                        </div>
                                                        <ul class="lSPager lSGallery" style="margin-top: 5px; transition-duration: 400ms; width: 233.071px; transform: translate3d(0px, 0px, 0px);">
                                                            <li style="width:100%;width:111.28571428571429px;margin-right:5px" class="active">
                                                                <a href="#"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/cargurus.png"></a>
                                                            </li>
                                                            <li style="width:100%;width:111.28571428571429px;margin-right:5px">
                                                                <a href="#"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/company_overview_slide/public/company_photo.jpg"></a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <div class="block block-bix-companies block-bix-companies-we-hiring-block">

                                    <h2 class="box-title">We're Hiring</h2>

                                    <div class="center">
                                        <div class="logo-wrapper-medium">
                                            <div class="centered">
                                                <a href="<?php the_permalink() ?>">
                                                <img src="<?php echo $company_image; ?>" width="512" height="512" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
                                    $query = array(
                                        'post_status' => 'publish',
                                        'post_type' => 'job',
                                        'meta_key' => 'company_id',
                                        'meta_value' => get_the_ID(),
                                        'showposts' => 10
                                    );

                                    $result = new WP_Query($query);
                                    if($result->have_posts()) :
                                    ?>
                                        <h3 class="processed">We're<br>Hiring</h3>
                                        <div class="item-list">
                                            <ul>
                                            <?php while($result->have_posts()) : $result->the_post(); ?>
                                                <li class="odd first">
                                                    <a href="<?php the_permalink(); ?>" class="category-wrapper item processed" data-category=".category-wrapper-developer">
                                                        <div class="category" ><span class="arrow"><?php the_title(); ?></span></div>
                                                        <div class="number"><span><?php echo (vp_metabox('jobplanet_job.number_vacancy')) ? vp_metabox('jobplanet_job.number_vacancy') : 1; ?></span></div>
                                                    </a>
                                                </li>
                                            <?php endwhile; ?>
                                            </ul>
                                        </div>
                                        <div class="more-link"><a href="/" class="processed">View All Jobs</a></div>
                                    <?php endif; ?>
                                    <?php wp_reset_query(); ?>
                                </div>
                                <div class="block block-bix-companies block-bix-companies-location">

                                    <h2 class="box-title">Where we are</h2>

                                    <div class="gmap_location_widget company_location">
                                        <div class="gmap_location_widget_description company_description"><?php echo vp_metabox('jobplanet_company.address'); ?></div>
                                        <div id="gmap_location_widget_map" style="position: relative; overflow: hidden;" data-lat="<?php echo esc_html(trim($latlng[0])); ?>" data-lng="<?php echo esc_html(trim($latlng[1])); ?>">
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="views-element-container block block-views block-views-blockcompany-perks-block-1">

                                    <div>
                                        <div class="company-perks view view-company-perks view-id-company_perks view-display-id-block_1 js-view-dom-id-8a5e167fc01ec36caafe330b5f82ac67eb2a66be3bbf46da267e5443014f56b0">

                                            <h2 class="box-title">Perks of working here</h2>

                                            <div class="view-content">
                                                <div class="perks-401-k views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>401(K) </div>
                                                    </div>
                                                </div>
                                                <div class="perks-commuter-benefits views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Commuter Benefits </div>
                                                    </div>
                                                </div>
                                                <div class="perks-company-equity views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Company Equity </div>
                                                    </div>
                                                </div>
                                                <div class="perks-company-outings views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Company Outings </div>
                                                    </div>
                                                </div>
                                                <div class="perks-daily-meals-provided views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Daily Meals Provided </div>
                                                    </div>
                                                </div>
                                                <div class="perks-dental views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Dental </div>
                                                    </div>
                                                </div>
                                                <div class="perks-fitness-subsidy views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Fitness Subsidy </div>
                                                    </div>
                                                </div>
                                                <div class="perks-flex-work-hours views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Flex Work Hours </div>
                                                    </div>
                                                </div>
                                                <div class="perks-happy-hours views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Happy Hours </div>
                                                    </div>
                                                </div>
                                                <div class="perks-health-benefits views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Health Benefits </div>
                                                    </div>
                                                </div>
                                                <div class="perks-parental-leave views-row">
                                                    <div class="views-field views-field-field-company-perks">
                                                        <div class="field-content">
                                                            <div class="perk"></div>Generous Parental Leave </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="view-footer">
                                                16 weeks paid primary caregiver leave, Game room with foosball, ping pong, video games, etc. (and employees actually use it!)
                                            </div>
                                        </div>
                                    </div>

                                </div> -->
                                <?php
                                            $query = array(
                                                'post_status' => 'publish',
                                                'post_type' => 'job',
                                                'meta_key' => 'company_id',
                                                'meta_value' => get_the_ID(),
                                            );

                                            $result = new WP_Query($query);
                                            if($result->have_posts()) :
                                ?>
                                <div class="views-element-container block block-views block-views-blockjob-opportunities-block-1">

                                    <div>
                                        <div class="job-opportunities view view-job-opportunities view-id-job_opportunities view-display-id-block_1 js-view-dom-id-633b3dd5208feb4dc04444b51fc4b4b441513ba4866ec143c0121a631880be9c" id="bix-companies-open-jobs">

                                            <div class="box-title"><?php printf(__( "Jobs at %s<span>%d open jobs</span>" , "enginethemes" ), get_the_title(), $result->found_posts) ?></div>

                                            <!-- <div class="job-categories">
                                                <div class="category processed" data-category="all"><span>All</span></div>
                                                <div class="category active processed" data-category=".category-wrapper-developer"><span>Developer + Engineer</span></div>
                                                <div class="category processed" data-category=".category-wrapper-operations"><span>Operations</span></div>
                                            </div> -->

                                            <div class="view-content processed">

                                                <div class="grid-sizer"></div>
                                                <div class="gutter-sizer"></div>
                                                <?php while($result->have_posts()) : $result->the_post(); ?>
                                                <?php
                                                $id = get_the_ID();
                                                $jobtype = get_the_terms(get_the_ID(), 'job-type');
                                                $location = get_the_terms(get_the_ID(), 'job-location');
                                                ?>
                                                <div class="category-wrapper-developer views-row" style="margin-right:1%;">

                                                    <div class="category">
                                                        <?php  echo $jobtype[0]->name; ?>
                                                    </div>

                                                    <div class="title">
                                                        <a href="<?php the_permalink(); ?>" hreflang="en">
                                                        <?php the_title(); ?>
                                                        </a>
                                                    </div>

                                                    <div class="location">
                                                        <div class=""><?php echo $location[0]->name; ?></div>
                                                    </div>

                                                    <div class="link">
                                                        <a href="<?php the_permalink(); ?>">View</a>
                                                    </div>

                                                </div>
                                                <?php endwhile; ?>
                                                <div class="views-row views-row-more" style="">
                                                    <h3 class="title">Get notified<br>when new<br>jobs pop up.</h3>
                                                    <div class="more-link"><span>Create job alert</span></div>
                                                    <div id="create-job-alert-wrapper">
                                                        <a href="/bix-job-newsletter/company-alerts/950/job-alert-job-card" class="use-ajax" data-dialog-type="modal" data-dialog-options="{&quot;width&quot;:555}"></a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <?php endif; ?>
                                <?php wp_reset_query(); ?>
                                <!-- <div class="views-element-container block block-views block-views-blockcompany-news-block-1">

                                    <div>
                                        <div class="view view-company-news view-id-company_news view-display-id-block_1 js-view-dom-id-c8c97280278d16c9adde0d122b6c69b8f4247c4dbf4fe42f598938a381b99765">

                                            <h2 class="box-title">Articles we're in<span class="">11 articles</span></h2>

                                            <div class="view-content">
                                                <div class="lSSlideOuter">
                                                    <div class="lSSlideWrapper usingCss">
                                                        <ul class="items lightSlider lsGrab lSSlide" style="width: 3003px; height: 243px; padding-bottom: 0%; transform: translate3d(0px, 0px, 0px);">
                                                            <li class="views-row lslide active" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/09/18/cargurus-becomes-first-tech-company-file-ipo-2017"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-09/unnamed-12_4.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/09/18/cargurus-becomes-first-tech-company-file-ipo-2017">CarGurus becomes the first tech company to file for IPO in 2017</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/08/17/meet-superstar-interns-next-class-boston-tech"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-08/unnamed-20.jpg" width="250" height="190" alt="cargurus" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/08/17/meet-superstar-interns-next-class-boston-tech">Meet 5 superstar interns from the next class of Boston tech</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/08/02/top-companies-hiring-aug"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-08/ezcater1.jpg" width="250" height="190" alt="tch" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/08/02/top-companies-hiring-aug">Find your dream job: These 6 companies are hiring this month</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/04/21/startups-in-cambridge-you-should-know"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/2017-05/startups-in-cambridge.png" width="250" height="190" alt="Startups in Cambridge" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/04/21/startups-in-cambridge-you-should-know">16 startups in Cambridge you should know</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/03/23/you-know-you-work-boston-startup-when"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/youknow-thumb.png" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/03/23/you-know-you-work-boston-startup-when">You know you work for a startup when…</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2017/02/12/why-i-love-my-job-boston-techies-respond"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/dream-job-thumb.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2017/02/12/why-i-love-my-job-boston-techies-respond">Why I love my job: 3 Boston techies weigh in</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2016/11/14/boston-tech-companies-offering-internships"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/internships-thumb.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2016/11/14/boston-tech-companies-offering-internships">No more coffee orders: 3 tech companies where you can expect more from your...</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2016/10/27/how-boston-companies-keep-employees-happy"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/pekrs-thumb.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2016/10/27/how-boston-companies-keep-employees-happy">How 5 Boston companies are taking employee perks to a new level</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2016/10/24/4-boston-tech-companies-share-their-spooky-side"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/halloween.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2016/10/24/4-boston-tech-companies-share-their-spooky-side">4 Boston tech companies share their spooky sides</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2016/10/05/boston-top-companies-hiring"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/top-companies-hiring-thumbnail_0.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2016/10/05/boston-top-companies-hiring">Brilliant, but bored? 6 Boston tech companies looking for talent like you</a></span></div>
                                                            </li>
                                                            <li class="views-row lslide" style="width: 263px; margin-right: 10px;">
                                                                <div class="image">
                                                                    <div>
                                                                        <a href="/2016/09/09/sept-hiring-dream-job"><img src="//cdn.builtinboston.com/sites/www.builtinboston.com/files/styles/news_card/public/top-companies-hiring-thumbnail.jpg" width="250" height="190" alt="" class="image-style-news-card">

                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="title"><span><a href="/2016/09/09/sept-hiring-dream-job">9 tech companies where you could land your dream job this month</a></span></div>
                                                            </li>
                                                        </ul>
                                                        <div class="lSAction">
                                                            <a class="lSPrev"></a>
                                                            <a class="lSNext"></a>
                                                        </div>
                                                    </div>
                                                    <ul class="lSPager lSpg" style="margin-top: 5px;">
                                                        <li class="active"><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="l-right-column">
                    <div class="row">
                        <div class="">
                            <div class="block-region-right">
                                <div id="sticky-wrapper" class="wrap-sticky" style="height: 445px;">
                                    <div class="block block-bix-companies block-bix-companies-we-hiring-block" style="">

                                        <div class="center">
                                            <div class="logo-wrapper-medium">
                                                <div class="centered">
                                                    <a href="<?php the_permalink( ); ?>"> 
                                                        <img src="<?php echo $company_image; ?>" width="512" height="512" alt="">

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                <?php
                                    $query = array(
                                        'post_status' => 'publish',
                                        'post_type' => 'job',
                                        'paged' => $currentpage,
                                        'meta_key' => 'company_id',
                                        'meta_value' => get_the_ID(),
                                        'showposts' => 10
                                    );

                                    $result = new WP_Query($query);
                                    if($result->have_posts()) :
                                    ?>
                                        <h3 class="processed">We're<br>Hiring</h3>
                                        <div class="item-list">
                                            <ul>
                                            <?php while($result->have_posts()) : $result->the_post(); ?>
                                                <li class="odd first">
                                                    <a href="<?php the_permalink(); ?>" class="category-wrapper item processed" data-category=".category-wrapper-developer">
                                                        <div class="category" ><span class="arrow"><?php the_title(); ?></span></div>
                                                        <div class="number"><span><?php echo (vp_metabox('jobplanet_job.number_vacancy')) ? vp_metabox('jobplanet_job.number_vacancy') : 1; ?></span></div>
                                                    </a>
                                                </li>
                                            <?php endwhile; ?>
                                            </ul>
                                        </div>
                                        <div class="more-link"><a href="/" class="processed">View All Jobs</a></div>
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

<?php 
get_footer();
