<table style="margin:0 auto;background:#fff;border-collapse:collapse;border-radius:6px" width="600">
    <tbody>
        <tr>
            <td style="background:#d42f92;padding:30px;border-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0">
                <table style="border-collapse:collapse;border-spacing:0;margin-left:auto;margin-right:auto;background-color:#d42f92;width:600px;table-layout:fixed">
                    <tbody>
                        <tr>
                            <td style="padding:0;vertical-align:top;text-align:left;padding-top:10px">
                                <div align="center" style="font-size:12px;margin-bottom:15px;font-style:normal;font-weight:400;font-family:'Open Sans',Open Sans,sans-serif!important;color:#8e8e8e">
                                    <img alt="" height="40" src="<?php echo get_stylesheet_directory_uri(); ?>/img/email-user-icon.png"  style="border:0;display:block;max-width:64px" width="40">
                                    </img>
                                </div>
                                <table style="border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;vertical-align:top;padding-left:32px;padding-right:32px;word-break:break-word;word-wrap:break-word">
                                                <p style="margin-top:0;font-style:normal;font-weight:400;font-size:20px;line-height:28px;margin-bottom:10px;font-family:'Open Sans',Open Sans,sans-serif!important;color:#8e8e8e;text-align:center">
                                                    <span style="color:#ffffff;font-family:'Open Sans',Open Sans,sans-serif!important;font-weight:bold">
                                                        New Candidate <?php echo $applicant_name; ?>
                                                    </span>
                                                    <br>
                                                        <span style="color:#ffffff;font-family:'Open Sans',Open Sans,sans-serif!important;font-weight:normal!important">
                                                            for <?php echo $job_name; ?>
                                                        </span>
                                                    </br>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding:30px">
                <table style="margin-bottom:16px;width:500px;color:#414b55!important">
                    <tbody>
                        <tr style="height:28px">
                            <td style="width:30%;font-weight:bold;text-transform:uppercase;font-size:14px">
                                Name
                            </td>
                            <td style="width:70%;font-size:14px">
                                <?php echo $applicant_name; ?>
                            </td>
                        </tr>
                        <tr style="height:28px">
                            <td style="width:30%;font-weight:bold;text-transform:uppercase;font-size:14px">
                                Email
                            </td>
                            <td style="width:70%;font-size:14px;color:#8e58a4!important">
                                <a href="mailto:ngoctuanatg@gmail.com" style="color:#546474!important;text-decoration:none" target="_blank">
                                    <?php echo $applicant_email; ?>
                                </a>
                            </td>
                        </tr>
                        <tr style="height:28px">
                            <td style="width:30%;font-weight:bold;text-transform:uppercase;font-size:14px">
                                Phone
                            </td>
                            <td style="width:70%;font-size:14px">
                                <a href="tel:938373899" style="color:#546474!important;text-decoration:none" target="_blank">
                                    <?php echo $phone; ?>
                                </a>
                            </td>
                        </tr>
                        <tr style="height:28px">
                            <td style="width:30%;font-weight:bold;text-transform:uppercase;font-size:14px">
                                Address
                            </td>
                            <td style="width:70%;font-size:14px">
                                <a href="tel:938373899" style="color:#546474!important;text-decoration:none" target="_blank">
                                    <?php echo $address; ?>
                                </a>
                            </td>
                        </tr>
                        <tr style="height:28px">
                            <td style="width:30%;font-weight:bold;text-transform:uppercase;font-size:14px">
                                Resume
                            </td>
                            <td style="width:70%;font-size:14px">
                                <a href="tel:938373899" style="color:#546474!important;text-decoration:none" target="_blank">
                                    In attached file
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style="margin-bottom:28px;color:#414b55!important">
                    <tbody>
                        <tr>
                            <td style="width:50%">
                                <a href="mailto:<?php echo $applicant_email; ?>" style="display:block;text-decoration:none;color:#fff;text-align:center;text-transform:uppercase;margin:0;background:#8e58a4;padding:12px;font-size:12px;border-radius:4px" target="_blank">
                                    Email to Candidate
                                </a>
                            </td>
                            <td>
                            </td>
                            <td style="width:50%">
                                <a href="<?php echo $job_link; ?>" style="display:block;text-decoration:none;color:#fff;text-align:center;text-transform:uppercase;margin:0;background:#3d64af;padding:12px;font-size:12px;border-radius:4px" target="_blank">
                                    Go to Job
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                </p>
                <h3 style="font-size:14px;text-transform:uppercase;color:#414b55!important">
                    Message
                </h3>
                <span style="font-family:'Open Sans',Open Sans,sans-serif!important;font-size:14px;color:#414b55!important">
                    <?php echo nl2br($message); ?>
                </span>
                <p>
                </p>
            </td>
        </tr>
    </tbody>
</table>