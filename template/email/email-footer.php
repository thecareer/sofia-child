                </tbody>
            </table>

            <table style="line-height:normal;font-variant:normal;font-size:12px;font-style:normal;font-family:arial;font-weight:normal" border="0" cellpadding="5" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td style="padding:10px">
                            <br><?php echo sprintf(__('Thân mến,<br/><br/>Career.vn Team', 'jobplanet-plugin'), jeg_allow_br()); ?><br/><br/>
                            <b><a style="color:#1c3f94;text-decoration:none" href="<?php echo esc_url(home_url()); ?>" target="_blank"><?php echo esc_html($blogname); ?></a></b><br/>
							https://career.vn
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:11px;color:#686868;background:#f5f5f5;padding:10px">
                            <?php echo sprintf(__('Để đảm bảo bạn không bị bỏ sót những email từ Career.vn, vui lòng bổ sung <a href="mailto:%s" target="_blank">%s</a> vào danh sách liên lạc của bạn.', 'jobplanet-plugin'), $email, $email); ?>
                            <br><br>
                            <?php echo sprintf( __('Vui lòng liên lạc với chúng tôi <a href="%s" target="_blank">tại đây</a>. Xin vui lòng không phản hồi lại email này, vì đây là email tự động', 'jobplanet-plugin'), get_permalink($contact) ); ?>
                            <br>
                            <?php echo $footer; ?>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
