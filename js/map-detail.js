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
        initMapDetail();
        $(window).scroll(function() {
            var heightHeader = $('.layout-container > .header').outerHeight(),
                heightFooter = $('.layout-container > footer').outerHeight(),
                heightBasement = $('.basement').outerHeight(),
                heightToolbar = 0;

            var main_conent_height = $('.l-content.right').outerHeight();

            if ($(window).scrollTop() >= (heightHeader+250)) {
                $('.wrap-sticky').addClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').addClass('is-fixed');
            }else {
                $('.wrap-sticky').removeClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').removeClass('is-fixed');
            }

            if ($(window).scrollTop() >= main_conent_height ) {
                $('.wrap-sticky').removeClass('is-sticky');
                $('.block-bix-companies-we-hiring-block').removeClass('is-fixed');
            }

            if ($(window).scrollTop() >= (heightHeader)) {
                $('.block-bix-jobs-apply').addClass('is-fixed');
            }else {
                $('.block-bix-jobs-apply').removeClass('is-fixed');
            }

            if ($(window).scrollTop() >= main_conent_height - 200 ){
                $('.block-bix-jobs-apply').removeClass('is-fixed');
            }
        });



    });
})(jQuery);