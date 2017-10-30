<?php if(is_singular( 'job' )) :?>
<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>
<div id="apply-modal" class="modal">
  <?php if(vp_metabox('jobplanet_job.application_url')) : ?>
    <!-- Modal content -->
    <div class="modal-content">
    	<div class="modal-header">
          <span class="close">&times;</span>
      </div>
      <iframe onload="resizeIframe(this)" src="https://apply.startup.jobs/apply/embed/form/<?php echo vp_metabox('jobplanet_job.jazzid'); ?>" frameborder="0" scrolling="no"></iframe>
    </div>
  <?php else ?>

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
  <?php endif; ?>

</div>

<?php endif; ?>