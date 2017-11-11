(function($) {
    // "use strict";
    // var openMap = false;
    function initMapDetail() {
        console.log('map');
        if ($("#gmap_location_widget_map").length > 0) {
            var locationLat = $("#gmap_location_widget_map").data('lat'),
                locationLng = $("#gmap_location_widget_map").data('lng');
            var map = new GMaps({
                div: '#gmap_location_widget_map',
                lat: locationLat,
                lng: locationLng
            });
            map.addMarker({
                lat: locationLat,
                lng: locationLng,
            });
        }
    }
    $(document).ready(function(e) {
        $(".gallery").lightSlider({
            adaptiveHeight: true,
            item: 1,
            slideMargin: 0,
            loop: true
        });
        // Get the modal
        var modal = document.getElementById('apply-modal');
        // Get the button that opens the modal
        var btn = $(".open-apply-modal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal 
        btn.click(function() {
            modal.style.display = "block";
            $('body').addClass('modal-open');
        });
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            $('body').removeClass('modal-open');
        }
        // Get the modal
        var alert_modal = document.getElementById('alert-modal');
        // Get the button that opens the modal
        var alert_btn = $(".create-alert");
        // Get the <span> element that closes the modal
        var alert_span = document.getElementsByClassName("alert-close")[0];
        // When the user clicks the button, open the modal 
        alert_btn.click(function() {
            alert_modal.style.display = "block";
            $('body').addClass('modal-open');
        });
        // When the user clicks on <span> (x), close the modal
        alert_span.onclick = function() {
            alert_modal.style.display = "none";
            $('body').removeClass('modal-open');
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                $('body').removeClass('modal-open');
            }
            if (event.target == alert_modal) {
                alert_modal.style.display = "none";
                $('body').removeClass('modal-open');
            }
        }
        $('#mc-embedded-subscribe').click(function() {
            alert_modal.style.display = "none";
            $('body').removeClass('modal-open');
        });
        (function($) {
            $(document).ready(function() {
                $('#upload_cv_file').jFileUploader({
                    browse_button: 'btn-upload',
                    multi: false,
                    name: 'cv_file',
                    extension: 'pdf,doc,docx,xls,xlsx,ppt,pptx',
                    swf: 'https://startup.jobs/wp-content/plugins/jobplanet-plugin/assets/js/plupload/js/Moxie.swf',
                    upload_url: 'https://startup.jobs/wp-admin/admin-ajax.php?nonce=42078e247b',
                    maxsize: '2mb',
                });
            });
        })(jQuery);

        // initMapDetail();
        $(window).scroll(function() {
            var heightHeader = $('.layout-container > .header').outerHeight(),
                heightFooter = $('.layout-container > footer').outerHeight(),
                heightBasement = $('.basement').outerHeight(),
                heightToolbar = 0;
            var main_conent_height = $('.l-content.right').outerHeight();
            if ($(window).scrollTop() >= (heightHeader + 250)) {
                $('.wrap-sticky').addClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').addClass('is-fixed');
            } else {
                $('.wrap-sticky').removeClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').removeClass('is-fixed');
            }
            if ($(window).scrollTop() >= main_conent_height) {
                $('.wrap-sticky').removeClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').removeClass('is-fixed');
            }
            if ($(window).scrollTop() >= (heightHeader)) {
                $('.block-bix-jobs-apply').addClass('is-fixed');
            } else {
                $('.block-bix-jobs-apply').removeClass('is-fixed');
            }
            if ($(window).scrollTop() >= main_conent_height - 300) {
                $('.block-bix-jobs-apply').removeClass('is-fixed');
            }
        });
        var blog_page = 1;
        $('#load-more-blog').click(function(e) {
            e.preventDefault();
            var button = $(e.currentTarget);
            var exclude = $(this).attr('data-exclude');
            $.ajax({
                type: 'get',
                url: global.ajax_url,
                data: {
                    current: blog_page,
                    exclude: exclude,
                    action: 'load-more-post'
                },
                beforeSend: function() {
                    blog_page++;
                    button.text('Loading ...');
                },
                success: function(res) {
                    if (res.content) {
                        $('#list-post').append(res.content);
                    }
                    if (res.the_last) {
                        button.remove();
                    } else {
                        button.text('VIEW MORE');
                    }
                }
            });
        });
        $('.btn-submit-apply').click(function(e) {
            e.preventDefault();
            var button = $(this),
                form = button.parents('form');
            $('.alert').remove();
            $.ajax({
                type: 'post',
                url: global.ajax_url,
                data: {
                    data: form.serialize(),
                    action: 'apply-job'
                },
                beforeSend: function() {
                    button.text('Loading ...');
                },
                success: function(res) {
                    console.log(res);
                    if (res.success) {
                        var modal = document.getElementById('apply-modal');
                        modal.style.display = "none";
                        alert('You have successfully applied');
                    } else {
                        form.prepend(res.msg);
                    }
                    $('.apply-button').removeClass('open-apply-modal');
                    button.text('SEND YOUR APPLICATION');
                }
            });
        });
    });
})(jQuery);