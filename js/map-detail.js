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
        // Get the modal
        var modal = document.getElementById('apply-modal');
        // Get the button that opens the modal
        var btn = $(".apply-button");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the modal 
        btn.click(function() {
            modal.style.display = "block";
        });
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        initMapDetail();
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
            if ($(window).scrollTop() >= main_conent_height - 200) {
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
    });
})(jQuery);