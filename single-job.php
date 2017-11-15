<?php
get_header(); 
the_post();
$company_id = vp_metabox('jobplanet_job.company_id');
$company_image_id = get_post_thumbnail_id($company_id);
$company_image_src = wp_get_attachment_image_src($company_image_id, 'post-thumbnail');
$locations = wp_get_post_terms( get_the_ID(), 'job-location');
$location = $locations[0];
$latlng = explode(',', vp_metabox('jobplanet_job.map_location'));
$company_name = get_the_title($company_id);


$company_status = get_post_field( 'post_status', $company_id );
remove_filter( 'post_type_link', 'dakachi_filter_job_link', 10, 2 );
?>
<div class="region region-help">
    


  </div>
<main role="main">

    <div class="layout-content">
        <div class="region region-content">
            <div class="l-three-columns container">
                <div class="l-content right">
                    <div class="row">
                        <div class="">
                            <div class="block-region-middle">
                                <div class="block block-ctools block-entity-viewnode">

                                    <article role="article" class="node node--type-job node--view-mode-default">

                                        <div class="job-info-wrapper">
                                            <div class="logo-wrapper-small">
                                                <div class="centered">
                                                <?php if($company_status == 'publish') { ?>
                                                    <a href="<?php echo get_the_permalink( $company_id ); ?>"> 
                                                        <img src="<?php echo $company_image_src[0] ?>" width="300" height="300" alt="<?php echo get_the_title($company_id); ?>">
                                                    </a>
                                                <?php }else { ?>
                                                        <img src="<?php echo $company_image_src[0] ?>" width="300" height="300" alt="<?php echo get_the_title($company_id); ?>">
                                                <?php } ?>
                                                </div>
                                            </div>

                                            <h1 class="node-title">
                                                <span class="field field--name-title field--type-string field--label-hidden"><?php the_title(); ?></span>
                                            </h1>

                                            <div class="job-info">

                                                <div class="field field--name-field-company field--type-entity-reference field--label-hidden field__items">
                                                    <div class="field__item">
                                                    <?php if($company_status == 'publish') { ?>
                                                        <a href="<?php echo get_the_permalink( $company_id ); ?>" hreflang="en"><?php echo $company_name; ?></a>
                                                    <?php }else {
                                                        echo $company_name;
                                                    } ?>
                                                    </div>
                                                </div>
                                                | <span class="company-address"><?php echo $location->name; ?></span> </div>
                                        </div>
                                        <?php
                                        /*
                                        <div class="block block-bix-jobs-apply-bottom-only-apply">
                                            <form class="bix-jobs-apply-job-form"  action="/job/software-engineer-cambridge-1" method="post" id="bix-jobs-apply-job-form--4" accept-charset="UTF-8">
                                                <div <?php if(isset($_COOKIE['applied_'.get_the_ID()])) {echo 'disabled';} ?> class="apply-button ga-event-processed" id="apply-button" bix-click-campaign="apply-now-button" nid="6133" data-ga-event="job-apply-now-job-description" tid="12">Apply now</div>
                                                <input  type="hidden" name="form_build_id" value="form-mHYuJcgrsGkKA-QQdrH4ypT2DadLuvpaupfYYsOdwzE">
                                                <input  type="hidden" name="form_token" value="4Lwal-i-H39YoviKIWti5VInDAgLMcjq4D6RWZDih2c">
                                                <input  type="hidden" name="form_id" value="bix_jobs_apply_job_form">

                                            </form>
                                            <div class="save-job"><a title="" href="#" class="use-ajax flag flag-save_job flag-save_job-6133 action-flag ga-event-processed" data-ga-event="job-save-job-description" rel="nofollow">Save</a></div>
                                        </div>
                                        */
                                        ?>
                                        <div class="node__content">
                                            <div class="job-description fade-out">
                                                <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                                    <?php the_content(  ) ; ?>
                                                </div>
                                            </div>
                                            <div id="read-more-description-toggle"><span data-ga-event="job-read-description" class="ga-event-processed">Read Full Job Description</span></div>
                                        </div>

                                    </article>

                                </div>
                                <div class="block block-bix-jobs block-bix-jobs-apply-bottom">

                                    <form class="bix-jobs-apply-job-form"  action="" method="post" id="bix-jobs-apply-job-form--2" accept-charset="UTF-8">
                                        <?php if(vp_metabox('jobplanet_job.application_url')) : ?>
                                            <a class="apply-button ga-event-processed" href="<?php echo vp_metabox('jobplanet_job.application_url'); ?>" target="_blank" bix-click-campaign="apply-now-button" >Apply now</a>
                                        <?php else : ?>
                                            <div  class="apply-button <?php if(!isset($_COOKIE['applied_'.get_the_ID()])) {echo 'open-apply-modal';} ?> ga-event-processed" id="apply-button" bix-click-campaign="apply-now-button" nid="6133" data-ga-event="job-apply-now-job-description" tid="12">Apply now</div>
                                        <?php endif; ?>
                                        <?php
                                        /*
                                        <input  type="hidden" name="form_build_id" value="form-l3AMPHHEm_m99tCVeo0T63ftRVmhsQpb59uzkcZukpU">
                                        <input  type="hidden" name="form_token" value="4Lwal-i-H39YoviKIWti5VInDAgLMcjq4D6RWZDih2c">
                                        <input  type="hidden" name="form_id" value="bix_jobs_apply_job_form">
                                        */
                                        ?>

                                    </form>

                                    <div class="save-job">

                                        <a title="" target="_blank" class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" data-ga-event="job-save-job-description" rel="nofollow">Share to Facebook</a></div>
                                    <div class="save-job">
                                        <a title="" target="_blank" class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&summary=<?php vp_metabox('jobplanet_job.short_desc'); ?>" data-ga-event="job-save-job-description" rel="nofollow">Share to LinkedIn</a></div>

                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="">
                            <div class="block-region-bottom">
                                <?php if(vp_metabox('jobplanet_job.address')) : ?>
                                    <div class="block block-bix-companies block-bix-companies-location">
      
                                        <h2 class="box-title">Location</h2>
                                    
                                        <div class="gmap_location_widget company_location">
                                            <div class="gmap_location_widget_description company_description"><?php echo esc_html(vp_metabox('jobplanet_job.address')); ?></div>
                                            <div id="gmap_location_widget_map" style="position: relative; overflow: hidden;">
                                                <iframe id="gmap" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXbA7-odJtEHPviVy32Sc5mPBvaJgFrts&amp;q=<?php echo esc_html(vp_metabox('jobplanet_job.address')); ?>" allowfullscreen="" width="100%" height="360" frameborder="0"> </iframe>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                               
                                <div class="views-element-container block block-views block-views-blockjob-opportunities-block-1">

                                    <div>
                                        <div class="job-opportunities view view-job-opportunities view-id-job_opportunities view-display-id-block_1 js-view-dom-id-633b3dd5208feb4dc04444b51fc4b4b441513ba4866ec143c0121a631880be9c" id="bix-companies-open-jobs">
                                            <?php
                                            $query = array(
                                                'post_status' => 'publish',
                                                'post_type' => 'job',
                                                'meta_key' => 'company_id',
                                                'meta_value' => $company_id,
                                                'exclude' => array(get_the_ID())
                                            );
                                            $result = new WP_Query($query);
                                            if($result->have_posts()) :
                                            ?>
                                            <div class="box-title"><?php printf(__( "More Jobs at %s<span>%d open jobs</span>" , "enginethemes" ), $company_name, $result->found_posts) ?></div>

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
                                                <div class="category-wrapper-developer views-row" style="margin-right: 1%;">

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
                                                    <div class="more-link create-alert"><span>Create job alert</span></div>
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
                </div>
                <div class="l-right-column">
                    <div class="row">
                        <div class="">
                            <div class="block-region-right">
                                <div id="sticky-wrapper" class="wrap-sticky" style="height: 371px;">
                                    <div class="block block-bix-jobs block-bix-jobs-apply" style="width: 266px;">

                                        <div class="logo-wrapper-medium">
                                            <div class="centered">
                                            <?php if($company_status == 'publish') { ?>
                                                <a href="<?php echo get_the_permalink( $company_id ); ?>"> 
                                                    <img src="<?php echo $company_image_src[0]; ?>" width="300" height="300" alt="">
                                                </a>
                                            <?php }else { ?> 
                                                <img src="<?php echo $company_image_src[0]; ?>" width="300" height="300" alt="">
                                            <?php } ?>
                                            </div>
                                        </div>
                                        <form class="bix-jobs-apply-job-form"  action="/job/software-engineer-cambridge-1" method="post" id="bix-jobs-apply-job-form" accept-charset="UTF-8">
                                            <?php if(vp_metabox('jobplanet_job.application_url')) : ?>
                                            <a class="apply-button ga-event-processed" href="<?php echo vp_metabox('jobplanet_job.application_url'); ?>" target="_blank" bix-click-campaign="apply-now-button" >Apply now</a>
                                        <?php else : ?>
                                            <div class="apply-button <?php if(!isset($_COOKIE['applied_'.get_the_ID()])) {echo 'open-apply-modal';} ?> ga-event-processed" id="apply-button" bix-click-campaign="apply-now-button" nid="6133" data-ga-event="job-apply-now-job-description" tid="12">Apply now</div>
                                        <?php endif; ?>
                                            <?php
                                            /*
                                            <input  type="hidden" name="form_build_id" value="form-bqgz10QSnMBbS28elpOGYkExwwiUmj9AqjIxcAIxwH0">
                                            <input  type="hidden" name="form_token" value="4Lwal-i-H39YoviKIWti5VInDAgLMcjq4D6RWZDih2c">
                                            <input  type="hidden" name="form_id" value="bix_jobs_apply_job_form">
                                            */
                                            ?>
                                        </form>

                                            <a title="Share to Facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>"  class="use-ajax flag flag-save_job flag-save_job-6133 action-flag ga-event-processed facebook" data-ga-event="job-save-right-rail" rel="nofollow">Share to Facebook</a>
                                            <a title="Share to Facebook" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&summary=<?php vp_metabox('jobplanet_job.short_desc'); ?>"  class="use-ajax flag flag-save_job flag-save_job-6133 action-flag ga-event-processed linkedin" data-ga-event="job-save-right-rail" rel="nofollow">Share to LinkedIn</a>
                                        <?php if($company_status == 'publish') { ?>
                                        <a href="<?php echo get_the_permalink( $company_id ); ?>" class="view-profile">View <?php echo get_the_title($company_id); ?>'s full profile</a>
                                        <a href="<?php echo get_the_permalink( $company_id ); ?>#seemorejobs" class="job-category">See more <?php echo get_the_title($company_id); ?> jobs</a>
                                        <?php } ?>
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
