<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes' />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php wp_head(); ?>
    <!-- Global Site Tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-78263364-17"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)};
      gtag('js', new Date());

      gtag('config', 'UA-78263364-17');
    </script>
</head>
<body <?php body_class(); ?>>

<!-- wrapper page -->
<div class="layout-container <?php if(is_404()) { echo "layout-container-404";} ?>">
	<?php if(is_singular( 'company' )) : ?>
		<div class="region region-background">
	    	<div id="block-bixcompanypremiumbackground" class="block block-bix-companies block-bix-companies-premium-background">
	  
	    
	      		<div class="company-background" style="background-image: url(<?php echo get_stylesheet_directory_uri() ?>/img/PENDING_Company_Profile_Premium.jpg);"></div>
	  		</div>

	  	</div>

  	<?php endif; ?>
    <!-- main-header -->
    <div class="header">

        <?php //get_template_part ('fragment/nav-main'); ?>
        <?php //get_template_part ('fragment/nav-mobile'); ?>