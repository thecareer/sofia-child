<?php
jeg_get_template_part('account/fragment/top');
$user_id = get_current_user_id();
$current_user = get_userdata(get_current_user_id());
?>
    <h3 class="no-margin-top"><?php _e('Create Company Detail', 'jobplanet-plugin'); ?></h3>
    <hr/>
    <?php jeg_get_template_part('account/fragment/company-form'); ?>
<?php jeg_get_template_part('account/fragment/bottom'); ?>