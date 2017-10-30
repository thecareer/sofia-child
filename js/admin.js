(function($) {
    $(document).ready(function(e) {
        jQuery("select[name='jobplanet_job[company_id]']").chosen();
        jQuery("select[name='author'").chosen();
        jQuery("select[name='company_id'").chosen();
        jQuery("select[name='author'").chosen();
        jQuery("select[name='parent'").chosen();
        jQuery("select[name='job_tag'").chosen();
        jQuery("select[name='company-tag'").chosen();


        jQuery('#post_status').append('<option value="simple">Simple</option>');
        jQuery('#post_status').val( jQuery('#hidden_post_status').val() );
    });
})(jQuery);