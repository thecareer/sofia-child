<?php
/**
Template Name: Landing Page
 */
get_header('landing');
$language_list = startup_language_list();
?>
<script type='application/ld+json'>{"@context":"http://schema.org","@type":"Organization","url":"https://startup.jobs","sameAs":["https://facebook.com/go.startup.jobs"],"@id":"#organization","name":"Startup.JOBS","logo":"https://i.imgur.com/8YnHdGY.png"}</script>
<div class="region region-help">
</div>
<main role="main">
    <a id="main-content" tabindex="-1"></a>
    <div class="layout-content">
        <div class="region region-content">
            <div class="container">
                <div class="row">
                    <div class="">
                        <div class="block-region-top">
                            <div class="block block-block-content block-block-contentda6b8940-9533-4ab0-b672-e1eca4ac84b5">
                                <div class="node-header">
                                    <div class="node-header--image" style="background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/img/Frontpage-min.jpg');">
                                    </div>
                                    <div class="node-header--info-wrapper">
                                        <div class="node-header--info">
                                            <div class="node-header--title">A job site posting for startup on the world</div>
                                            <h1 class="node-header--headline">
                                                <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p>We are the hub for<br>
                                                    <?php echo $language_list[ICL_LANGUAGE_CODE]; ?> &nbsp;<span>startups + tech</span></p>
                                                </div>
                                            </h1>
                                            <?php
                                            /*
                                            <div class="">
                                                <span class="google-sign-up-link"><a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=137993173015-af10p25it867hd9b31ah43mjm45318de.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Fwww.builtinboston.com%2Fbix-google-login-callback&amp;state&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20email%20profile&amp;approval_prompt=auto" data-ga-event="user-acq-homepage-signup-google" class="ga-event-processed">Join with Google</a></span>
                                                <span class="facebook-sign-up-link"><a href="/user/simple-fb-connect" data-ga-event="user-acq-homepage-signup-facebook" class="ga-event-processed">Join with Facebook</a></span>
                                            </div>
                                            */
                                            ?>
                                        </div>
                                        <div class="field--name-field-links-list field__items">
                                            <a href="<?php echo get_permalink( vp_option('joption.job_page') ); ?>" class="field__item">
                                                <div class="title">We connect you with
                                                    <br>great jobs in <?php echo $language_list[ICL_LANGUAGE_CODE]; ?></div>
                                                <div class="title_link">VIEW OPEN JOBS</div>
                                            </a>
                                            <a href="<?php echo home_url( '/blogs'); ?>" class="field__item">
                                                <div class="title">We share the stories behind
                                                    <br><?php echo $language_list[ICL_LANGUAGE_CODE]; ?>'s tech scene</div>
                                                <div class="title_link">EXPLORE COMPANIES</div>
                                            </a>
                                            <a href="<?php echo get_permalink( vp_option('joption.company_list_page') ); ?>" class="field__item">
                                                <div class="title">We highlight the coolest
                                                    <br>startups in <?php echo $language_list[ICL_LANGUAGE_CODE]; ?></div>
                                                <div class="title_link">READ BLOG</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="icon-go-next"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="">
                        <div class="block-region-middle">
                            <div class="boston block block-bix-frontpage block-bix-frontpage-job-categories">
                                <div> <a href="/desktop/jobs" class="title">Find your dream job</a></div>
								<div class="views-row category-wrapper-developer">
									<div class="category category-developer">
										<div>Developer & Engineer Jobs</div><a href="/jobs?category[]=developer-engineer"></a></div>
								</div>
								<div class="views-row category-wrapper-design">
									<div class="category category-design">
										<div>Design + UI/UX Jobs</div><a href="/jobs?category[]=design-ux"></a></div>
								</div>
								<div class="views-row category-wrapper-marketing">
									<div class="category category-marketing">
										<div>Creative & Marketing Jobs</div><a href="/jobs?category[]=creative-marketing"></a></div>
								</div>
								<div class="views-row category-wrapper-product">
									<div class="category category-product">
										<div>Product<br/> Jobs</div><a href="/jobs?category[]=product"></a></div>
								</div>
								<div class="views-row category-wrapper-sales">
									<div class="category category-sales">
										<div>Biz Development & Sales Jobs</div><a href="/jobs?category[]=sales"></a></div>
								</div>
								<div class="views-row category-wrapper-data-analytics">
									<div class="category category-data">
										<div>Data & Analytics Jobs</div><a href="/jobs?category[]=data-analytics"></a></div>
								</div>
                                <div class="more-link"><a href="/jobs">View all <?php echo $language_list[ICL_LANGUAGE_CODE]; ?> jobs</a></div>
                            </div>
                            <div class="views-element-container block block-views block-views-blockfrontpage-news-block-3 home-top-company">

                                <h2><a href="/companies" class="box-title"><?php echo $language_list[ICL_LANGUAGE_CODE]; ?> Startup and Tech Companies</a><span class="view-all-block-head"><a href="/companies">View All Companies</a></span></h2>
                                <?php
                                $query = array(
                                    'post_status' => 'publish',
                                    'post_type' => 'company',
                                    'posts_per_page' => 6
                                );
                                $companies = new WP_Query($query);
                                ?>
                                <div>
                                    <div class="view view-frontpage-news view-id-frontpage_news view-display-id-block_3 js-view-dom-id">
                                        <?php if($companies->have_posts()) : ?>
                                        <div class="view-content">
                                            <?php while ($companies->have_posts()) : $companies->the_post(); ?>
                                                <?php
                                                    $logo = get_the_post_thumbnail_url();
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
                                                            <div> <img src="<?php echo $cover_image_src ?>" width="480" height="360" alt="" class="image-style-company-card">

                                                            </div>
                                                        </div>
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered"> <img src="<?php echo $logo; ?>">

                                                            </div>
                                                        </div>
                                                        <h3 class="title"><span><?php the_title(); ?></span></h3>
                                                        <div class="link"><i></i></div>
                                                        <a <?php if(vp_metabox('jobplanet_job.application_url')){ echo "target='_blank'";} ?> href="<?php the_permalink(); ?>" class="view-page"></a>
                                                    </div>
                                            <?php endwhile; ?>
                                        </div>
                                    <?php else : ?>
                                        <div class="view-empty">
                                            <div class="job-list-no-results">No results found, check if your spelling is correct, or try removing   filters
                                            </div>
                                        </div>
                                    <?php endif; ?>
                                    <?php wp_reset_query(); ?>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="">
                        <div class="block-region-bottom">
                            <?php /*
                            <div class="block block-block-content block-block-content363f917e-f565-4ef2-8f8b-4994d93350fc">
                                <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                    <h2>Get an Inside&nbsp;View</h2>
                                    <p>Go behind the scenes of Vietnam company's tech, culture + teams</p>
                                </div>

                                <div class="field field--name-field-links-list field--type-link field--label-hidden field__items">
                                    <div class="field__item"><a href="/spotlights">View Spotlights</a></div>
                                </div>

                            </div>
                            */?>
                            <div class="block block-bix-frontpage block-bix-frontpage-startups">
                                <div class="title">
                                    <h2 class="box-title">The startup scene is growing.<br>Grow along with it.</h2>
                                    <a class="view-more-button" href="/companies">View All Companies</a></div>
                                <div class="bg-image-wrapper">
                                    <div class="bg-image" style="background-image: url('<?php echo get_stylesheet_directory_uri() ?>/img/bix_frontpage_startups_3.jpg');"></div>
                                </div>
                                <div class="block-content">
                                    <?php
                                    $query = array(
                                        'post_status' => 'publish',
                                        'post_type' => 'company',
                                        'posts_per_page' => 7,
                                    );
                                    $companies = new WP_Query($query);
                                    ?>
                                    <div>
                                        <h3><a href="/companies" class="box-title"><?php echo $language_list[ICL_LANGUAGE_CODE]; ?> startups hiring now</a></h3>
                                        <div class="views-element-container">
                                            <div class="view view-frontpage-companies view-id-frontpage_companies view-display-id-block_1 js-view-dom-id-892388419d38ef44f0cdc3b5290d44cd161e0e79f564cc185ee11674889c74de">

                                                <div class="view-content">
                                                <?php while ($companies->have_posts()) : $companies->the_post(); ?>
                                                    <?php
                                                    $logo = get_the_post_thumbnail_url();
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
                                                            <div> <img src="<?php echo $cover_image_src ?>" width="480" height="360" alt="" class="image-style-company-card">

                                                            </div>
                                                        </div>
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered"> <img src="<?php echo $logo; ?>">

                                                            </div>
                                                        </div>
                                                        <h3 class="title"><span><?php the_title(); ?></span></h3>
                                                        <div class="company-type">
                                                            <div><?php echo $term->name; ?></div>
                                                        </div>
                                                        <div class="open-jobs"><span><a href="<?php the_permalink(); ?>#bix-companies-open-jobs">View Open Jobs</a></span></div>
                                                        <div class="link"><i></i></div>
                                                        <a href="<?php the_permalink(); ?>" class="view-page"></a>
                                                    </div>
                                                <?php endwhile; ?>
                                                <?php wp_reset_query() ; ?>

                                                    <a class="views-row" href="/companies">
                                                        <h3 class="title">Wish you<br>could work for<br>these folks?</h3>
                                                        <div class="headline">Actually you can.</div>
                                                        <div class="more-link"><span>See who's hiring</span></div>
                                                    </a>

                                                </div>

                                            </div>
                                        </div>
                                        <?php
                                        /*
                                        <h3> <a href="/guides" class="box-title">Our most popular Vietnam guides</a></h3>
                                        <div class="views-element-container">
                                            <div class="overlay-grid view view-frontpage-series view-id-frontpage_series view-display-id-block_1 js-view-dom-id-4f003ab68b6690462bd95c4cd9acf408ca50b77a6f7149a29c6b5371d4145257">

                                                <div class="view-content">
                                                    <div class="views-row">
                                                        <div class="image">
                                                            <div>
                                                                <a href="/guides/best-companies-work-boston"><img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="400" height="400" alt=" Best Companies to Work for in Vietnam" class="image-style-tech-series">

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><a href="/guides/best-companies-work-boston" hreflang="en">Your Guide to the Best Companies to Work for in Vietnam</a></span></div>
                                                        <div class="link"><span><a href="/guides/best-companies-work-boston" hreflang="en">View more</a></span></div>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="image">
                                                            <div>
                                                                <a href="/guides/your-guide-best-perks-boston-tech-companies"><img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="400" height="400" alt="boston tech perks" class="image-style-tech-series">

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><a href="/guides/your-guide-best-perks-boston-tech-companies" hreflang="en">Your Guide to the Best Perks at Vietnam Tech Companies</a></span></div>
                                                        <div class="link"><span><a href="/guides/your-guide-best-perks-boston-tech-companies" hreflang="en">View more</a></span></div>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="image">
                                                            <div>
                                                                <a href="/guides/boston-food-tech"><img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="400" height="400" alt="boston food tech guide" class="image-style-tech-series">

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><a href="/guides/boston-food-tech" hreflang="en">Food Tech in Vietnam: Your Guide to Cool Jobs &amp; Companies</a></span></div>
                                                        <div class="link"><span><a href="/guides/boston-food-tech" hreflang="en">View more</a></span></div>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="image">
                                                            <div>
                                                                <a href="/guides/boston-healthtech"><img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="400" height="400" alt="Vietnam Healthtech" class="image-style-tech-series">

                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="title"><span><a href="/guides/boston-healthtech" hreflang="en">Healthtech in Vietnam: Your Guide to Cool Jobs &amp; Companies</a></span></div>
                                                        <div class="link"><span><a href="/guides/boston-healthtech" hreflang="en">View more</a></span></div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        */
                                        ?>
                                    </div>
                                </div>
                            </div>

                            <?php
                                $query = array(
                                    'post_status' => 'publish',
                                    'post_type' => 'job',
                                    'posts_per_page' => 9,
                                );
                                $jobs = new WP_Query($query);
                            ?>

                            <div class="block block-bix-frontpage block-bix-frontpage-jobs">
                                <div class="title">
                                    <h2 class="box-title"><?php echo $language_list[ICL_LANGUAGE_CODE]; ?> techies, meet these<br>sweet job opportunities</h2>
                                    <a class="view-more-button" href="/jobs">View All Jobs</a></div>
                                <div class="bg-image-wrapper">
                                    <div class="bg-image" style="background-image: url('<?php echo get_stylesheet_directory_uri() ?>/img/bix_frontpage_jobs_1.jpg');"></div>
                                </div>
                                <div class="block-content">
                                    <div>
                                        <div class="views-element-container">
                                            <div class="job-opportunities view view-frontpage-jobs view-id-frontpage_jobs view-display-id-block_2 js-view-dom-id-1dc1a51b145990187b4978d84bd751127c3d7a509a48a15c46ddceeb0ccdeed9">
                                                <h3><a href="/jobs" class="box-title">Job opportunities in <?php echo $language_list[ICL_LANGUAGE_CODE]; ?></a></h3>
                                                <?php
                                                /*
                                                <div class="job-categories">
                                                    <div class="category active processed" data-category=".all-categories"><span>All</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-data-analytics"><span>Data + Analytics</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-design"><span>Design + UX</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-developer"><span>Developer + Engineer</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-finance"><span>Finance</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-hr"><span>HR</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-internships"><span>Internships</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-legal"><span>Legal</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-marketing"><span>Marketing</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-operations"><span>Operations</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-product"><span>Product</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-project-mgmt"><span>Project Mgmt</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-sales"><span>Sales</span></div>
                                                    <div class="category processed" data-category=".category-wrapper-content"><span>Content</span></div>
                                                </div>
                                                */
                                                ?>
                                                <div class="view-content processed home-jobs" style="position: relative; height: 416px;">

                                                <?php while($jobs->have_posts()) : $jobs->the_post(); ?>
                                                    <?php
                                                    $company_id = vp_metabox('jobplanet_job.company_id');
                                                    $company_image_id = get_post_thumbnail_id($company_id);
                                                    $company_image_src = wp_get_attachment_image_src($company_image_id, 'full');
                                                    $locations = wp_get_post_terms( get_the_ID(), 'job-location');
                                                    $location = $locations[0];
                                                    $types = wp_get_post_terms( get_the_ID(), 'job-type');
                                                    $type = $types[0];
                                                    ?>
                                                    <div class="category-wrapper-design views-row all-categories" style="margin-right: 1%;">

                                                        <div class="category">
                                                            <?php echo $type->name; ?>
                                                        </div>

                                                        <div class="title">
                                                            <a <?php if(vp_metabox('jobplanet_job.application_url')){ echo "target='_blank'";} ?> href="<?php the_permalink(); ?>" hreflang="en"><?php the_title(); ?></a>
                                                        </div>

                                                        <div class="ribbon-box">
                                                            <div class="ribbon-wrapper">
                                                                <div class="ribbon">new</div>
                                                            </div>
                                                        </div>

                                                        <div class="location">
                                                            <div class=""><a href="/company/cybereason" hreflang="en"><?php echo $location->name; ?></a></div>
                                                        </div>

                                                        <div class="link">
                                                            <a <?php if(vp_metabox('jobplanet_job.application_url')){ echo "target='_blank'";} ?> href="<?php the_permalink(); ?>">View</a>
                                                        </div>

                                                    </div>
                                                <?php endwhile; ?>
                                                <?php wp_reset_query(); ?>
                                                    <div class="views-row views-row-more category-wrapper-content" style="">
                                                        <h3 class="title">Like these<br>gems?<br> </h3><span class="title-subtext">There are <br>19 more.</span>
                                                        <div class="more-link"><a href="/jobs">View all jobs</a></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                            /*
                            <div class="boston block block-bix-frontpage block-bix-frontpage-events">
                                <div class="title">
                                    <h2 class="box-title">Techies, Geeks,<br>Designy folks—unite!
</h2>
                                    <a class="view-more-button" href="/events">View All Events</a></div>
                                <div class="bg-image-wrapper">
                                    <div class="bg-image" style="background-image: url('<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>');"></div>
                                </div>
                                <div class="block-content">
                                    <div>
                                        <h3><a href="/events" class="box-title">Events this week</a></h3>
                                        <div class="views-element-container">
                                            <div class="view view-frontpage-events view-id-frontpage_events view-display-id-block_1 js-view-dom-id-12367e71411dbc30d35030cd68172e2ce5862362d6c14394979ffb00b78eaecd">

                                                <div class="view-content">
                                                    <div class="views-row">
                                                        <div class="date">
                                                            <div class="date-not-today">Tue
                                                                <br>Sep 26</div>
                                                        </div>
                                                        <div class="cover-image">
                                                            <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>Inaugural Charles River World Congress on Animal Models in Drug Discovery and Development</span></div>
                                                        <div class="organized-by">
                                                            <div>Charles River Laboratories</div>
                                                        </div>
                                                        <div class="views-field views-field-field-event-date-1">
                                                            <div class="field-content">2017/09/26 - 2017/09/27</div>
                                                        </div>
                                                        <a class="view-page" href="/event/inaugural-charles-river-world-congress-animal-models-drug-discovery-and-development"></a>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="date">
                                                            <div class="date-not-today">Thu
                                                                <br>Sep 28</div>
                                                        </div>
                                                        <div class="cover-image">
                                                            <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>Vietnam Tech And Startup Networking Mixer</span></div>
                                                        <div class="organized-by">
                                                            <div>knw media</div>
                                                        </div>
                                                        <div class="views-field views-field-field-event-date-1">
                                                            <div class="field-content">2017/09/28 - 2017/09/28</div>
                                                        </div>
                                                        <a class="view-page" href="/event/boston-tech-and-startup-networking-mixer-1"></a>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="date">
                                                            <div class="date-not-today">Tue
                                                                <br>Oct 3</div>
                                                        </div>
                                                        <div class="cover-image">
                                                            <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>DEEP 2017</span></div>
                                                        <div class="organized-by">
                                                            <div>Cybereason</div>
                                                        </div>
                                                        <div class="views-field views-field-field-event-date-1">
                                                            <div class="field-content">2017/10/03 - 2017/10/04</div>
                                                        </div>
                                                        <a class="view-page" href="/event/deep-2017"></a>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="date">
                                                            <div class="date-not-today">Sat
                                                                <br>Oct 7</div>
                                                        </div>
                                                        <div class="cover-image">
                                                            <div> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="270" height="345" alt="" class="image-style-event-card">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>4th Annual HealthTech Venture Network Conference: Female Entrepreneurship</span></div>
                                                        <div class="organized-by">
                                                            <div>HealthTech Venture Network</div>
                                                        </div>
                                                        <div class="views-field views-field-field-event-date-1">
                                                            <div class="field-content">2017/10/07 - 2017/10/07</div>
                                                        </div>
                                                        <a class="view-page" href="/event/4th-annual-healthtech-venture-network-conference-female-entrepreneurship"></a>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="views-element-container">
                                            <div class="view view-frontpage-coding-schools view-id-frontpage_coding_schools view-display-id-block_1 js-view-dom-id-8319791072801693915702701756d993dedc10d82b8a25143dedb3cd937adb70">

                                                <h2><a href="/coding-schools" class="box-title">Vietnam Coding Schools</a><span class="view-all-block-head"><a href="/coding-schools" class="box-title">View all schools</a></span></h2>

                                                <div class="view-content">
                                                    <div class="views-row">
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered"> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="470" height="350" alt="Startup Institute Logo">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>Startup Institute</span></div>
                                                        <div class="tagline">
                                                            <div>Train to Join the Innovation Economy</div>
                                                        </div>
                                                        <a href="https://www.startupinstitute.com/" class="school-link" target="_blank"></a>
                                                    </div>
                                                    <div class="views-row">
                                                        <div class="logo-wrapper-small">
                                                            <div class="centered"> <img src="<?php echo get_stylesheet_directory_uri(). '/img/cover_photo_3.png'; ?>" width="268" height="224" alt="General Assembly Logo ">

                                                            </div>
                                                        </div>
                                                        <div class="title"><span>General Assembly </span></div>
                                                        <div class="tagline">
                                                            <div>Learn In-Demand Skills From Pros&lrm;</div>
                                                        </div>
                                                        <a href="https://generalassemb.ly/" class="school-link" target="_blank"></a>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div class="events-signup-block">
                                            <div>
                                                <div class="events-signup-block-title">The Vietnam startup scene moves fast. Keep up.</div>
                                                <div class="events-signup-block-upper-links"><span>weekly meetups</span><span>latest tech news</span><span>jobs in your inbox</span></div>
                                                <div class="events-signup-block-google-login"><a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=137993173015-af10p25it867hd9b31ah43mjm45318de.apps.googleusercontent.com&amp;redirect_uri=http%3A%2F%2Fwww.builtinboston.com%2Fbix-google-login-callback&amp;state&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20email%20profile&amp;approval_prompt=auto" data-ga-event="user-acq-ad-homepage-signup-google" class="ga-event-processed">Join with Google</a></div>
                                                <div class="events-signup-block-facebook-login"><a href="/user/simple-fb-connect" data-ga-event="user-acq-ad-homepage-signup-facebook" class="ga-event-processed">Join with Facebook</a></div>
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
        </div>

    </div>

</main>

<?php
get_footer();
