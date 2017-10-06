<?php
    $image = wp_get_attachment_image_src($image_id, 'thumbnail');
    update_post_meta($image_id, '_rml_folder', 8);
?>
<li>
    <input type="hidden" name="<?php echo esc_attr($filename); ?>" value="<?php echo esc_attr($image_id) ?>">
    <img src="<?php echo esc_url($image[0]); ?>">
    <?php if($close) : ?>
    <div class="remove"></div>
    <?php endif; ?>
</li>