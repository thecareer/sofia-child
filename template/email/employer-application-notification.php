<?php
$job_name = '<a href="'.$job_link.'" >'.$job_name. '</a>';
?>
<tr style="">
    <td style="padding: 10px;">
        <?php /* echo sprintf(esc_html(__( 'Chào %s', 'jobplanet-plugin') ), $employer_name) */ ?>
        Chào bạn,<br/><br/><br/>
        <?php echo sprintf(wp_kses(__( '<strong>%s</strong> vừa ứng tuyển vào vị trí <strong>%s</strong>', 'jobplanet-plugin'), jeg_allow_strong()), $applicant_name, $job_name); ?><br/><br/>

        <p><?php echo $message; ?></p>

        <?php echo sprintf(wp_kses(__( 'Vui lòng xem hồ sơ ứng viên được gởi kèm trong email này<a href="%s"></a>, chúc bạn tuyển dụng thành công!', 'jobplanet-plugin'), jeg_allow_link()), jeg_get_account_url('manage-application')); ?>
    </td>
</tr>
