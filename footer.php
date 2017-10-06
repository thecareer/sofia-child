
   <footer role="contentinfo" class="footer-boston">
    <div class="footer-wrapper">

        <div class="region region-footer-first">
            <div id="block-footerbuiltinchicago" class="block block-block-content block-block-content767deb42-b900-4191-b543-398d5b805cd3">

                <h2 class="box-title">Startups in Vietnam</h2>

                <div class="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                    <p>Startup.JOBS is the job post site
                        <br> for startups and tech companies.
                        <br> Find startup jobs, company and startup blog.</p>
                    <p>© Startup.JOBS 2017</p>
                </div>

            </div>

        </div>

        <div class="region region-footer-second">
            <nav role="navigation" aria-labelledby="block-getinvolved-menu" id="block-getinvolved" class="block block-menu navigation menu--get-involved">

                <h2 class="box-title" id="block-getinvolved-menu">Get involved</h2>

                <ul class="menu">
                    <li class="menu-item">
                        <a href="#" target="_blank">Recruit With Startup.JOBS</a>
                    </li>
                    <li class="menu-item">
                        <a href="#" target="_blank">Send Us a Tip</a>
                    </li>
                    <li class="menu-item">
                        <a href="#" target="_blank">Contact Us</a>

                    </li>
                </ul>

            </nav>

        </div>

        <div class="region region-footer-third">
            <nav role="navigation" aria-labelledby="block-about-menu" id="block-about" class="block block-menu navigation menu--about">

                <h2 class="box-title" id="block-about-menu">About</h2>

                <ul class="menu">
                    <li class="menu-item">
                        <a href="#" target="_blank">Careers</a>
                    </li>
                    <li class="menu-item">
                        <a href="#" target="_blank">Privacy Policy</a>
                    </li>
                    <li class="menu-item">
                        <a href="#" target="_blank">Terms of Use</a>
                    </li>
                </ul>

            </nav>

        </div>

        <div class="region region-footer-fourth">
            <nav role="navigation" aria-labelledby="block-stayconnected-menu" id="block-stayconnected" class="block block-menu navigation menu--stay-connected">

                <h2 class="box-title" id="block-stayconnected-menu">Stay Connected</h2>

                <ul class="menu">
                    <li class="menu-item">
                        <a href="https://www.facebook.com/go.startup.jobs" target="_blank">Facebook</a>
                    </li>
                    <li class="menu-item">
                        <a href="http://twitter.com/gostartupjobs" target="_blank">Twitter</a>
                    </li>
                </ul>

            </nav>

        </div>

        <div class="region region-footer-fifth">
            <nav role="navigation" aria-labelledby="block-poweredbybuiltin-menu" id="block-poweredbybuiltin" class="block block-menu navigation menu--powered-by-built-in">

                <h2 class="box-title" id="block-poweredbybuiltin-menu">Startup in Asia</h2>

                <ul class="menu">
                    <li class="menu-item">
                        <a href="//startup.jobs/sg" target="_blank">Startup.JOBS In Singapore</a>
                    </li>
                    <li class="menu-item">
                        <a href="//startup.jobs/vn" target="_blank">Startup.JOBS In Vietnam</a>
                    </li>
                    <li class="menu-item">
                        <a href="//startup.jobs/id" target="_blank">Startup.JOBS In Indonesia</a>
                    </li>
                    <li class="menu-item">
                        <a href="//startup.jobs/my" target="_blank">Startup.JOBS In Malaysia</a>
                    </li>
                    <li class="menu-item">
                        <a href="//startup.jobs/th" target="_blank">Startup.JOBS In Thailand</a>
                    </li>
                </ul>

            </nav>

        </div>

    </div>
</footer>
<div class="overlay"></div>
<div class="basement">Love your Startup <span></span> Love your job</div>
</div>
    <?php wp_footer() ?>

    <div id="apply-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Apply Now</h2>
    </div>
    <div class="modal-body">
        <form>
            <input type="hidden" name="job_id" value="<?php the_ID(); ?>" />
              <div class="message-wraper">
                    <label>Message to Employer</label>
                    <textarea name="message" required="true"></textarea>
              </div>
              <div class="info">
                  <div class="width-50">
                        <label>First name</label>
                        <input type="text" name="first_name" required="true" />
                  </div>

                  <div class="width-50">
                        <label>Last name</label>
                        <input type="text" name="last_name" required="true" />
                  </div>
                    <div class="width-50">
                      <label>Email</label>
                        <input type="email" name="email" required="true" />
                    </div>
                    <div class="width-50">
                      <label>Phone</label>
                        <input type="text" name="phone" required="true" />
                    </div>
                    <div class="width-100">

                        <label>Your CV</label>
                        <?php
                        jeg_get_template_part('additional/upload-file', array(
                            'id' => 'upload_cv_file',
                            'name' => 'cv_file',
                            'source' =>'',
                            'button' => 'btn-upload',
                            'maxsize' => esc_html(vp_option('joption.max_image_size', '2') . 'mb' ),
                            'multi' => false
                        ));
                        ?>
                    </div>

                        <button type="submit" class="btn-submit-apply">SEND YOUR APPLICATION</button>
                </div>
                <div class="clearfix"></div>
            </form>
        </div>
        
    </div>
  </div>

</div>

    </body>
</html>