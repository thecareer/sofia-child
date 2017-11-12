<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}
/**
 * Render company metabox view
 */
function dakachi_meta_view()
{
    ?>

    <input type="hidden" class="field" id="latitude" name="jobplanet_company[latitude]"  value="<?php echo vp_metabox('jobplanet_company.latitude'); ?>" />
    <input type="hidden" class="field" id="longitude" name="jobplanet_company[longitude]" value="<?php echo vp_metabox('jobplanet_company.longitude'); ?>" />
    <input type="hidden" name="jobplanet_company[city]" class="field" value="<?php echo vp_metabox('jobplanet_company.city'); ?>">
  <?php
}
function dakachi_add_meta_boxes()
{
    add_meta_box('place_info', __('Career.vn Company Location'), 'dakachi_meta_view', 'company', 'normal', 'high');
}
add_action('add_meta_boxes', 'dakachi_add_meta_boxes');

/**
 * Hook in admin_head to put the style
 */
function dakachi_admin_header()
{
    ?>
<style>
  #place_info {
    display: none;
  }
  .vp-field div.mce-panel {
      border: 1px solid #ccc;
      background: #fff;
  }
  #jobplanet_company_metabox .chosen-container, #jobplanet_job_metabox  .chosen-container{
    width : 100% !important;
  }
  .xdsoft_datetimepicker {
    display: none !important;
  }
  .chosen-container {
    min-width: 140px;
  }
  .chosen-container-single .chosen-single {
    position: relative;
    display: block;
    overflow: hidden;
    padding: 0 0 0 8px;
    height: 28px;
    border: 1px solid #ddd;
    border-radius: 0px;
    background-color: #fff;
    background :#fff;
  }
  .tablenav .actions {
    overflow: inherit;
  }
</style>

  }
<?php
}
add_action('admin_head', 'dakachi_admin_header');

/**
 * Admin footer script control edit company, edit job page
 */
function dakachi_admin_footer()
{
    ?>
<script>
  var placeSearch, autocomplete;
  var componentForm = {
    locality: 'long_name',
    country: 'long_name',
    administrative_area_level_1 : 'long_name'
  };

  function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    if( jQuery('#latitude').length > 0 ) {
      autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */document.getElementsByName("jobplanet_company[address]")[0],
        {types: ['geocode']});

      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      autocomplete.addListener('place_changed', fillInCompanyAddress);
    }

    if(jQuery( 'input[name="jobplanet_job[map_location]"' ).length > 0 ) {
      autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */document.getElementsByName("jobplanet_job[address]")[0],
        {types: ['geocode']});

      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      autocomplete.addListener('place_changed', fillInJobAddress);
    }

    // Create the autocomplete object, restricting the search to geographical
    // location types.
    if( jQuery('#university_latitude').length > 0 ) {
      autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */document.getElementsByName("jobplanet_university[address]")[0],
        {types: ['geocode']});

      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      autocomplete.addListener('place_changed', fillInUniversityAddress);
    }

  }

  function fillInCompanyAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    // console.log(place);
    document.getElementById('latitude').value = place.geometry.location.lat();
    document.getElementById('longitude').value = place.geometry.location.lng();

    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (addressType == 'locality') {
        var city = place.address_components[i][componentForm[addressType]];
      }

      if(typeof city === 'undefined' && addressType  == 'administrative_area_level_1' ) {
        var city = place.address_components[i][componentForm['administrative_area_level_1']];
      }

      if (addressType == 'country') {
        var country = place.address_components[i][componentForm[addressType]];
      }
      if(!country) country = "Việt Nam";
    }

    jQuery( 'input[name="jobplanet_company[city]"' ).val(city +  ', ' + country);
    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
  }


  function fillInJobAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    jQuery( 'input[name="jobplanet_job[map_location]"' ).val(place.geometry.location.lat() +  ', ' + place.geometry.location.lng());
    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
  }

  function fillInUniversityAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    // console.log(place);
    document.getElementById('university_latitude').value = place.geometry.location.lat();
    document.getElementById('university_longitude').value = place.geometry.location.lng();

    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (addressType == 'locality') {
        var city = place.address_components[i][componentForm[addressType]];
      }

      if(typeof city === 'undefined' && addressType  == 'administrative_area_level_1' ) {
        var city = place.address_components[i][componentForm['administrative_area_level_1']];
      }

      if (addressType == 'country') {
        var country = place.address_components[i][componentForm[addressType]];
      }
    }

    jQuery( 'input[name="jobplanet_university[city]"' ).val(city +  ', ' + country);
    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
  }

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=<?php echo vp_option('joption.googlemap_key'); ?>&libraries=places&callback=initAutocomplete"
    async defer></script>

<script type="text/javascript">
  jQuery(document).ready(function() {
    jQuery( 'input[name="jobplanet_job[expire]"], input[name="jobplanet_job[closing]"]' ).datepicker({format : 'yy-m-d'});
    jQuery(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
    jQuery("select[name='jobplanet_job[company_id]']").chosen();

    jQuery("select[name='author'").chosen();
    jQuery("select[name='company_id'").chosen();
    jQuery("select[name='author'").chosen();
    jQuery("select[name='parent'").chosen();
    jQuery("select[name='job_tag'").chosen();
    jQuery("select[name='company-tag'").chosen();

    jQuery('textarea[name="jobplanet_company[short_desc]"]').attr('id', 'why_join_us');
    if (typeof tinyMCE !== 'undefined') {
        tinymce.init({
          selector: '#why_join_us',
          menubar:false,
          statusbar: false,
          toolbar: 'undo redo | styleselect | bold italic underline | link image | alignleft alignright | bullist numlist | link unlink | paste removeformat',
          content_css : '<?php echo includes_url(); ?>/js/tinymce/skins/wordpress/wp-content.css',
          height : '170px'
        });
    }

    function ValidURL(str) {
      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(str);

    }

    jQuery("input[name='jobplanet_job[application_url]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });

    jQuery("input[name='jobplanet_company[website]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });

    jQuery("input[name='jobplanet_company[official_facebook]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });
    jQuery("input[name='jobplanet_company[official_twitter]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });

    jQuery("input[name='jobplanet_company[official_linked_in]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });
    jQuery("input[name='jobplanet_company[official_instagram]']").change(function(){
        if(!ValidURL(jQuery(this).val())) {
          alert('Invalid Url');
        }
    });

    jQuery('#post_status').append('<option value="simple">Simple</option>');
    jQuery('#post_status').val( jQuery('#hidden_post_status').val() );

    // number with comma
    function numberWithCommas(x) {
      x = parseInt(x);
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var salary_bottom = jQuery('input[name="jobplanet_job[salary_bottom]"]'),
        salary_top = jQuery('input[name="jobplanet_job[salary_top]"]');
    if(salary_top.length > 0) {
      salary_bottom.parent().append("<p style='margin-left: 10px;' id='salary_bottom'>"+ numberWithCommas(salary_bottom.val()) +"</p>");
      salary_bottom.keyup(function(){
        jQuery('#salary_bottom').html(numberWithCommas(jQuery(this).val()));
      });
    }

    if(salary_top.length > 0) {
      salary_top.parent().append("<p style='margin-left: 10px;' id='salary_top'>"+ numberWithCommas(salary_top.val()) +"</p>");
      salary_top.keyup(function(){
        jQuery('#salary_top').html(numberWithCommas(jQuery(this).val()));
      });
    }
    // kiem tra company id khi edit job co rong hay khong
    if(jQuery('#jobplanet_job_metabox').length > 0 ) {
      jQuery('#publish').click(function(e){
        if(jQuery('select[name="jobplanet_job[company_id]"').val() == '') {
          e.preventDefault();
          alert('Please select a company');
          return false;
        }

        if(jQuery('input[name="jobplanet_job[closing]"').val() == '') {
          e.preventDefault();
          alert('Please input application closing date.');
          return false;
        }

        if(!jQuery('#job-typechecklist').find('input').is(':checked')) {
          e.preventDefault();
          alert('Please select job type.');
          return false;
        }

        if(!jQuery('#job-locationchecklist').find('input').is(':checked')) {
          e.preventDefault();
          alert('Please select job location.');
          return false;
        }

        if(!jQuery('#job-categorychecklist').find('input').is(':checked')) {
          e.preventDefault();
          alert('Please select job category.');
          return false;
        }


        if(!jQuery('#job_levelchecklist').find('input').is(':checked')) {
          e.preventDefault();
          alert('Please select job level.');
          return false;
        }
      });
    }

    if(jQuery('#jobplanet_company_metabox').length > 0 ) {
      jQuery('#publish').click(function(e){
        if(!(jQuery('#_thumbnail_id').val() > 0)) {
          e.preventDefault();
          alert('Please add a featured image.');
          return false;
        }
      });
    }
  });
</script>
<?php
}
add_action('admin_footer', 'dakachi_admin_footer', 200);

/**
 * Admin enqueue script to control job and company
 */
function dakachi_admin_enqueue_scripts()
{
    global $wp_scripts, $post;
    // get registered script object for jquery-ui
    $ui       = $wp_scripts->query('jquery-ui-core');
    $protocol = is_ssl() ? 'https' : 'http';
    $url      = "$protocol://ajax.googleapis.com/ajax/libs/jqueryui/{$ui->ver}/themes/smoothness/jquery-ui.min.css";
    wp_enqueue_style('jquery-ui-smoothness', $url, false, null);
    wp_enqueue_script('jquery-ui-datepicker');

    // if($post && $post->post_type == 'university') {
    //   wp_enqueue_style('jeg-datepicker-css', JOBPLANET_PLUGIN_URL . '/assets/css/jquery.datetimepicker.css', null, JOBPLANET_PLUGIN_VERSION);
    //   wp_enqueue_script('jeg-datepicker-js', JOBPLANET_PLUGIN_URL . '/assets/js/jquery.datetimepicker.full.min.js', null, JOBPLANET_PLUGIN_VERSION, true);
    // }

    wp_enqueue_script('chosen', get_stylesheet_directory_uri() . '/js/chosen.jquery.min.js');
    // wp_enqueue_script('admin.js', get_stylesheet_directory_uri() . '/js/admin.js');
    wp_enqueue_style('chosen', get_stylesheet_directory_uri() . '/css/chosen.min.css');

}
add_action('admin_enqueue_scripts', 'dakachi_admin_enqueue_scripts');