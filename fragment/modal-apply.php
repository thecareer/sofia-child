<?php if(is_singular( 'job' )) :?>
<script>
  function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
</script>
<div id="apply-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
  	<div class="modal-header">
        <span class="close">&times;</span>
    </div>
    <iframe onload="resizeIframe(this)" src="https://apply.startup.jobs/apply/embed/form/<?php echo vp_metabox('jobplanet_job.jazzid'); ?>" frameborder="0" scrolling="no"></iframe>
  </div>
</div>

<?php endif; ?>