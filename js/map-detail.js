(function($) {
    "use strict";
    var openMap = false;

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
    $(document).ready(function() {
        initMapDetail();
    });
})(jQuery);