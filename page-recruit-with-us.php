<?php
/**
 * Template Name: recruit with us
 */
?>
<html>

<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <title></title>
</head>

<body>
    <form accept-charset="UTF-8" method="post" action="/employ-success/" class="form" id="pardot-form">

        <style type="text/css">
            /*Overall Form Styling:*/
            
            #pardot-form {
                font-family: 'HelveticaNeueW01-45Ligh', Helvetica, sans-serif;
                max-width: 544px;
                margin: 0 auto;
                text-align: left;
                padding: 20px 30px;
                height: 100%;
                font-size: 15px;
                font-weight: lighter;
                color: #4e5860;
            }
            /*Field labels:*/
            
            #pardot-form .field-label {
                font-weight: 600;
                text-align: left;
                width: 100%;
                font-family: 'HelveticaNeueW01-45Ligh', Helvetica, sans-serif;
                font-size: 15px;
                padding: 3px 13px 3px 0;
                color: #28386f;
                margin-bottom: 10px;
            }
            /* required symbol adjustments */
            
            #pardot-form .required .field-label {
                background-image: none;
                padding-left: 0;
            }
            
            #pardot-form .required .field-label:after {
                content: ' *';
                color: #28386f;
            }
            /* URL Colour - on the EPC Page this will be the color of the "Opt out from all communications link": */
            
            a {
                color: #3D71B7;
                text-decoration: none;
            }
            /*Text inputs (email address, name etc):*/
            
            #pardot-form input.text {
                text-align: left;
                font-size: 20px;
                font-weight: lighter;
                letter-spacing: 1px;
                width: 104%;
                height: 46px;
                padding: 5px;
                padding-left: 10px;
                border: 2px solid #b7bac9;
                margin-bottom: 5px;
                margin-top: 5px;
                color: #4e5860;
                background-color: #fff;
                border-radius: 3px;
                display: inline block;
            }
            /*Dropdown Inputs:*/
            
            #pardot-form .select {
                text-align: center;
                font-size: 15px;
                width: 104%;
                height: 46px;
                padding: 5px;
                border: 2px solid #b7bac9;
                margin-bottom: 5px;
                margin-top: 5px;
                color: #4e5860;
                background-color: #fff;
                border-radius: 3px;
                display: inline block;
            }
            /*Checkbox Inputs:*/
            
            #pardot-form input[type="checkbox"] {}
            /*Text Area Inputs:*/
            
            #pardot-form textarea {
                height: 70px;
                text-align: center;
                font-size: 15px;
                width: 100%;
                padding: 5px;
                border: 1px solid #d6d6d6;
                margin-bottom: 5px;
                color: #4e5860;
                background-color: #fff;
                border-radius: 3px;
                display: inline block;
            }
            /*Submit button:*/
            
            #pardot-form .submit input {
                padding: 9px 10px;
                background-color: #00b9fe;
                font-family: 'HelveticaNeueW01-45Ligh', Helvetica, sans-serif;
                font-weight: lighter;
                font-size: 25.77px;
                color: #fff;
                text-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
                text-transform: normal;
                border-radius: 4px;
                border: 1px solid #00b9fe;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                margin-bottom: 15px;
                /*margin-left: 10px !important;*/
                white-space: normal;
                width: 106%;
                line-height: 130%;
                margin-top: 10px;
            }
            
            #pardot-form .submit input:hover {
                background: #47cdff;
                border-color: #47cdff;
            }
            /*Submit button Positioning:*/
            
            #pardot-form.form p.submit {
                margin: .2em .5em .6em 0px;
                padding: 0;
                text-align: center;
            }
            
            #pardot-form.form p.submit input {
                text-align: center;
            }
            /*Email Preference label positioning:*/
            
            #pardot-form.form p.no-label,
            #pardot-form.form p.email-pref {
                margin: .2em .5em .6em 0px;
                padding: 0;
            }
            /* Pardot Imp Specialist: Leave this styling here - it makes the form responsive */
            /*Simple Responsive Media Query*/
            
            @media (min-width: 0px) and (max-width: 768px) {
                /* left content div */
                #left_content {
                    width: 100%;
                    float: none;
                }
                /* right content div */
                #right_content {
                    padding-left: 0;
                    width: 100%;
                    float: none;
                }
                /*Field labels:*/
                #pardot-form .field-label {
                    width: 100%;
                    float: left;
                }
                /*Text inputs:*/
                #pardot-form input.text {
                    width: 100%;
                }
                /*Dropdowns:*/
                #pardot-form select {
                    width: 100%;
                }
                /*Textareas:*/
                #pardot-form textarea {
                    width: 100%;
                    height: 80px;
                }
                /*Submit button:*/
                #pardot-form .submit input {
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        </style>

        <style type="text/css">
            form.form p label {
                color: #28386f;
            }
        </style>

        <p><img alt="" border="0" height="56" src="<?php echo get_stylesheet_directory_uri(); ?>/img/hand_icon.png" style="width: 64px; height: 56px; margin-left: 232px; margin-right: 232px; border-width: 0px; border-style: solid;" width="64"></p>

        <p><span style="font-size:30px;"><span style="color:#040030;"><span style="font-family:arial,helvetica,sans-serif;"><strong>You’re one step away from </strong></span></span>
            </span><span style="font-size:30px;"><span style="color:#040030;"><span style="font-family:arial,helvetica,sans-serif;"><strong>connecting with Boston’s top talent.</strong></span></span>
            </span>
        </p>

        <p>&nbsp;</p>

        <p class="form-field  email pd-text required    ">

            <label class="field-label" for="323011_10411pi_323011_10411">Work Email</label>

            <input type="text" name="323011_10411pi_323011_10411" id="323011_10411pi_323011_10411" value="" class="text" size="30" maxlength="255" onchange="piAjax.auditEmailField(this, 323011, 10411, 949549);">

        </p>
        <div id="error_for_323011_10411pi_323011_10411" style="display:none"></div>

        <p class="form-field  first_name pd-text required    ">

            <label class="field-label" for="323011_10413pi_323011_10413">First Name</label>

            <input type="text" name="323011_10413pi_323011_10413" id="323011_10413pi_323011_10413" value="" class="text" size="30" maxlength="40" onchange="">

        </p>
        <div id="error_for_323011_10413pi_323011_10413" style="display:none"></div>

        <p class="form-field  last_name pd-text required    ">

            <label class="field-label" for="323011_10415pi_323011_10415">Last Name</label>

            <input type="text" name="323011_10415pi_323011_10415" id="323011_10415pi_323011_10415" value="" class="text" size="30" maxlength="80" onchange="">

        </p>
        <div id="error_for_323011_10415pi_323011_10415" style="display:none"></div>

        <p class="form-field  company pd-text required    ">

            <label class="field-label" for="323011_10417pi_323011_10417">Company</label>

            <input type="text" name="323011_10417pi_323011_10417" id="323011_10417pi_323011_10417" value="" class="text" size="30" maxlength="255" onchange="">

        </p>
        <div id="error_for_323011_10417pi_323011_10417" style="display:none"></div>

        <p class="form-field  Company_Size pd-select required    ">

            <label class="field-label" for="323011_10421pi_323011_10421">Company Size</label>

            <select name="323011_10421pi_323011_10421" id="323011_10421pi_323011_10421" class="select" onchange="">
                <option value="" selected="selected"></option>
                <option value="107969">&lt;20</option>
                <option value="107971">20-100</option>
                <option value="107973">101-200</option>
                <option value="107975">201-499</option>
                <option value="107977">500+</option>
            </select>

        </p>
        <div id="error_for_323011_10421pi_323011_10421" style="display:none"></div>

        <p style="position:absolute; width:190px; left:-9999px; top: -9999px;visibility:hidden;">
            <label for="pi_extra_field">Comments</label>
            <input type="text" name="pi_extra_field" id="pi_extra_field">
        </p>

        <!-- forces IE5-8 to correctly submit UTF8 content  -->
        <input name="_utf8" type="hidden" value="☃">

        <p class="submit">
            <input type="submit" accesskey="s" value="Submit">
        </p>

        <input type="hidden" name="hiddenDependentFields" id="hiddenDependentFields" value="">
    </form>

</body>

</html>