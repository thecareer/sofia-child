<div id="<?php echo esc_attr($id); ?>" class="upload_wrapper" >
    <div class="input-group">
        <span class="input-group-btn">
            <span id="<?php echo esc_attr($button); ?>"  class="btn btn-default btn-theme btn-file">
              <?php _e('Chọn file', 'jobplanet-themes');?>
            </span>
        </span>
        <div class="upload_preview_container">
        <ul>
        </ul>
        </div>
        <!-- <input type="text" class="form-control form-flat" readonly> -->
    </div>
    </div>

<script>
    // (function ($) {
    //     $(document).ready(function(){
    //         $('#<?php echo esc_js($id); ?>').jFileUploader({
    //             browse_button: '<?php echo esc_js($button); ?>',
    //             multi: <?php echo $multi ? "true" : "false"; ?>,
    //             name: <?php echo "'" . esc_js($name) . "'" ?>,
    //             extension: 'pdf,doc,docx,xls,xlsx,ppt,pptx',
    //             swf: '<?php echo esc_url(JOBPLANET_PLUGIN_URL . '/assets/js/plupload/js/Moxie.swf'); ?>',
    //             upload_url: '<?php echo admin_url('admin-ajax.php') . '?nonce=' . wp_create_nonce('jobplanet') ?>',
    //             <?php echo isset($maxsize) ? "maxsize : '$maxsize',\n" : ""; ?>
    //             <?php echo isset($maxwidth) ? "maxwidth : $maxwidth,\n" : ""; ?>
    //             <?php echo isset($maxheight) ? "maxheight : $maxheight,\n" : ""; ?>
    //             <?php echo isset($maxcount) ? "maxcount : $maxcount,\n" : ""; ?>
    //         });
    //     });
    // })(jQuery);
</script>