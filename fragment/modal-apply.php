<?php if(is_singular( 'job' )) :?>
<div id="apply-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <iframe src="https://apply.startup.jobs/apply/embed/form/<?php echo vp_metabox('jobplanet_job.jazzid'); ?>"></iframe>
  </div>
</div>
<?php endif; ?>