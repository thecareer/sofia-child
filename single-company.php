<?php 
jetpackme_remove_rp();
get_header();
the_post();
$industry = get_the_terms(get_the_ID(), 'company-industry');
$size = get_the_terms(get_the_ID(), 'company-size');
$company_image = get_the_post_thumbnail_url();
$latlng = explode(',', vp_metabox('jobplanet_company.map_location'));


$company_cover_id = get_post_meta( get_the_ID(), 'company_company-cover_thumbnail_id', true );
// if($company_cover_id) {
    $cover_image_src = wp_get_attachment_image_src($company_cover_id, 'cover-single');
    $cover_image_src = $cover_image_src['0'];
// }else {
//     $cover_image_src = get_stylesheet_directory_uri(). '/img/cover_photo_3.png';
// }

$company_head_id = get_post_meta( get_the_ID(), 'company_company-head_thumbnail_id', true );

$gallery = get_children( array('post_type' => 'attachment' , 'post_parent' => get_the_ID() , 'post__not_in' => array($company_cover_id, $company_head_id, get_post_thumbnail_id() ) ));
$first_image_src = '';
$photo = $gallery;
if(!empty($photo)) {
$first = array_pop($photo);
$first_image_src = wp_get_attachment_image_src($first->ID, 'tuan-medium')[0];
}

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
                                                </div>
                                                <div class="company-card-info">
                                                    <div class="col-1">
                                                        <div class=""><?php echo vp_metabox('jobplanet_company.address') ?></div>
                                                    </div>
                                                    <div class="col-2">
                                                        <div class="year-founding"> Founded in
                                                            <time datetime="2006-01-01T12:00:00Z" class="datetime"><?php echo vp_metabox('jobplanet_company.founded_year') ?></time>
                                                        </div>
                                                        <div class=""><?php echo $industry[0]->name; ?></div>
                                                        <?php if(!empty($size)) : ?>
                                                            <div class=""><?php echo $size[0]->name; ?> Employees</div>
                                                        <?php endif; ?>
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
                                <div class="views-element-container block block-views block-views-blockpremium-company-overview-block-1">

                                    <div>
                                        <div class="view view-premium-company-overview view-id-premium_company_overview view-display-id-block_1 js-view-dom-id-26c548265a8c8a92da802d52e767d208937f383a316afacb74876ae84374793f">

                                            <div class="view-content">
                                                <div class="views-row">
                                                    <div class="company-overview-content">
                                                        <div class="row first-child">
                                                            <?php if($first_image_src) : ?>
                                                            <div class="col-1">
                                                                <img src="<?php echo $first_image_src; ?>" width="435" height="320" alt="" class="image-style-company-overview">

                                                                <div class="company-gallery-dots">
                                                                    <?php for ($i=0; $i < count($gallery); $i++) : ?>
                                                                        <span class="item"></span>
                                                                    <?php endfor; ?>
                                                                </div>
                                                            </div>
                                                            <?php endif; ?>
                                                            <div class="col-2">
                                                                <div class="description">
                                                                    <?php the_content(); ?>
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
                                                                <img src="<?php echo $cover_image_src; ?>" width="435" height="320" alt="" class="image-style-company-overview">

                                                                <div class="culture-words">
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
                                <div class="views-element-container block block-views block-views-blockcompany-slideshow-block-1">

                                    <div>
                                        <div class="view view-company-slideshow view-id-company_slideshow view-display-id-block_1 js-view-dom-id-14c3cae96cc7874bb03272142095a9e19ce79f43f7b01020e706bcaf570240d9">

                                            <div class="view-content">
                                                <div>

                                                    <ul id="company-slideshow">
                                                    <?php foreach($gallery as $attachment) : ?>
                                                        <?php 
                                                        $thumb = wp_get_attachment_image_src( $attachment->ID,'thumbnail' );
                                                        $full = wp_get_attachment_image_src( $attachment->ID,'tuan-large' );
                                                        ?>
                                                        <li data-thumb="<?php echo $thumb[0]; ?>"><img src="<?php echo $full[0]; ?>"></li>
                                                    <?php endforeach; ?>
                                                    </ul>

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
                                <?php
                                $full_address = vp_metabox('jobplanet_company.full_address');
                                $address = $full_address ? $full_address : vp_metabox('jobplanet_company.address');
                                if($address) : ?>
                                <div class="block block-bix-companies block-bix-companies-location">

                                    <h2 class="box-title">Where we are</h2>

                                    <div class="gmap_location_widget company_location">
                                        <div class="gmap_location_widget_description company_description"><?php echo esc_html( $address ); ?></div>
                                        <div id="gmap_location_widget_map">
                                            <iframe id="gmap" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXbA7-odJtEHPviVy32Sc5mPBvaJgFrts&amp;q=<?php echo esc_html($address); ?>" allowfullscreen="" width="100%" height="360" frameborder="0"> </iframe>
                                        </div>
                                    </div>
                                </div>
                            <?php endif ; ?>
                                <?php
                                            $query = array(
                                                'post_status' => 'publish',
                                                'post_type' => 'job',
                                                'meta_key' => 'company_id',
                                                'meta_value' => get_the_ID(),
                                                'showposts' => -1
                                            );

                                            $result = new WP_Query($query);
                                            if($result->have_posts()) :
                                ?>
                                <div class="views-element-container block block-views block-views-blockjob-opportunities-block-1">

                                    <div>
                                        <div class="job-opportunities view view-job-opportunities view-id-job_opportunities view-display-id-block_1 js-view-dom-id-633b3dd5208feb4dc04444b51fc4b4b441513ba4866ec143c0121a631880be9c" id="bix-companies-open-jobs">

                                            <div class="box-title"><?php printf(__( "Jobs at %s<span>%d open jobs</span>" , "enginethemes" ), get_the_title(), $result->found_posts) ?></div>
                                            <?php /*
                                            <div class="job-categories">
                                                <div class="category processed" data-category="all"><span>All</span></div>
                                                <div class="category active processed" data-category=".category-wrapper-developer"><span>Developer + Engineer</span></div>
                                                <div class="category processed" data-category=".category-wrapper-operations"><span>Operations</span></div>
                                            </div>
                                            */ ?>
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
                                                        <a alt="<?php the_title(); ?>" href="<?php the_permalink(); ?>" hreflang="en">
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
                                                    <div class="more-link create-alert"><span>Create job alert</span></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <?php endif; ?>
                                <?php wp_reset_query(); ?>

                                <div class="views-element-container block block-views block-views-blockjob-opportunities-block-1">
                                    <div>
                                        <?php 
                                        if ( class_exists( 'Jetpack_RelatedPosts' ) ) {
                                            echo do_shortcode( '[jetpack-related-posts]' );
                                        }
                                        ?>
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
                                        // 'paged' => $currentpage,
                                        'meta_key' => 'company_id',
                                        'meta_value' => get_the_ID(),
                                        'showposts' => 6
                                    );

                                    $result = new WP_Query($query);
                                    if($result->have_posts()) :
                                    ?>
                                        <h3 class="processed">We're<br>Hiring</h3>
                                        <div class="item-list">
                                            <ul>
                                            <?php while($result->have_posts()) : $result->the_post(); ?>
                                                <li class="odd first">
                                                    <a alt="<?php the_title(); ?>" href="<?php the_permalink(); ?>" class="category-wrapper item processed" data-category=".category-wrapper-developer">
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
