<?php
$job_name = '<a href="'.$job_link.'" >'.$job_name. '</a>';
?>
<tr style="">
    <td style="padding: 10px;">
        <?php echo sprintf(esc_html(__( 'Chào %s', 'jobplanet-plugin') ), $applicant_name) ?><br/><br/>
        <?php echo sprintf(wp_kses(__( 'Bạn vừa ứng tuyển vào vị trí   <strong>%s</strong>', 'jobplanet-plugin'), jeg_allow_strong()), $job_name); ?><br/><br/>
        Hồ sơ của bạn đã được gởi trực tiếp đến email của nhà tuyển dụng, nếu bạn cần bất kỳ sự hỗ trợ nào vui lòng reply lại email này.<br/><br/>
        <?php echo sprintf(wp_kses(__( 'Bạn có thể vào <a href="https://career.vn/account/manage-application">liên kết này</a> để quản lý các vị trí đã ứng tuyển', 'jobplanet-plugin'), jeg_allow_link()), jeg_get_account_url('manage-application')); ?><br/><br/>
		Chúc bạn thành công!
    </td>
</tr>