<?php
$filename_only = basename( get_attached_file( $image_id ) );
?>
<li>
    <input type="hidden" name="<?php echo esc_attr($filename); ?>[]" value="<?php echo esc_attr($image_id) ?>">
    <?php echo $filename_only; ?>
    <?php if($close) : ?>
        <div class="remove"></div>
    <?php endif; ?>
</li>