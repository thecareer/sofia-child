<?php
/**
 * Template Name: recruit with us
 */
?>
<html>

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <title></title>
    <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri(); ?>/css/recruit.css">
</head>

<body>
    <form accept-charset="UTF-8" method="post" action="/welcome-recruit" class="form" id="pardot-form">

        <p><img alt="" border="0" height="56" src="<?php echo get_stylesheet_directory_uri(); ?>/img/hand_icon.png" style="width: 64px; height: 56px; margin-left: 232px; margin-right: 232px; border-width: 0px; border-style: solid;" width="64"></p>

        <p><span style="font-size:30px;"><span style="color:#040030;"><span style="font-family:arial,helvetica,sans-serif;"><strong>You’re one step away from </strong></span></span>
            </span><span style="font-size:30px;"><span style="color:#040030;"><span style="font-family:arial,helvetica,sans-serif;"><strong>connecting with Boston’s top talent.</strong></span></span>
            </span>
        </p>

        <p>&nbsp;</p>

        <p class="form-field  email pd-text required    ">

            <label class="field-label" for="work_email">Work Email</label>

            <input type="text" name="work_email" id="work_email" value="" class="text" size="30" maxlength="255" onchange="piAjax.auditEmailField(this, 323011, 10411, 949549);">

        </p>
        <div id="error_for_work_email" style="display:none"></div>

        <p class="form-field  first_name pd-text required    ">

            <label class="field-label" for="first_name">First Name</label>

            <input type="text" name="first_name" id="first_name" value="" class="text" size="30" maxlength="40" onchange="">

        </p>
        <div id="error_for_first_name" style="display:none"></div>

        <p class="form-field  last_name pd-text required    ">

            <label class="field-label" for="last_name">Last Name</label>

            <input type="text" name="last_name" id="last_name" value="" class="text" size="30" maxlength="80" onchange="">

        </p>
        <div id="error_for_last_name" style="display:none"></div>

        <p class="form-field  company pd-text required    ">

            <label class="field-label" for="company">Company</label>

            <input type="text" name="company" id="company" value="" class="text" size="30" maxlength="255" onchange="">

        </p>
        <div id="error_for_company" style="display:none"></div>

        <p class="form-field  Company_Size pd-select required    ">

            <label class="field-label" for="company_size">Company Size</label>

            <select name="company_size" id="company_size" class="select" onchange="">
                <option value="" selected="selected"></option>
                <option value="107969">&lt;20</option>
                <option value="107971">20-100</option>
                <option value="107973">101-200</option>
                <option value="107975">201-499</option>
                <option value="107977">500+</option>
            </select>

        </p>
        <div id="error_for_company_size" style="display:none"></div>

        <p style="position:absolute; width:190px; left:-9999px; top: -9999px;visibility:hidden;">
            <label for="pi_extra_field">Comments</label>
            <input type="text" name="pi_extra_field" id="pi_extra_field">
        </p>

        <!-- forces IE5-8 to correctly submit UTF8 content  -->
        <input name="_utf8" type="hidden" value="☃">

        <p class="submit">
            <input type="submit" accesskey="s" value="Submit">
        </p>

        <input type="hidden" name="hiddenDependentFields" id="hiddenDependentFields" value="">
    </form>
<?php
include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

if ( is_plugin_active( 'employer-hubspot-integrate/employer-hubspot-integrate.php' ) ) {
    ?>
    <script src="<?php echo WP_PLUGIN_URL.'/employer-hubspot-integrate/script.js'; ?>"> </script>
    <?php
  }
?>

</body>

</html>