angular.module('mapService', [])

    .factory('mapService', function ($http) {
        
        // Service our factory will return
        var mapService = {}; 
        
        // Selected Location (initialize to center of America)
        var selectedLat = 27.937279;
        var selectedLong = -82.498325;
        
        // Refresh the Map with new data. Function will take new latitude and longitude coordinates.
        mapService.refresh = function (latitude, longitude) {

            // Set the selected lat and long equal to the ones provided on the refresh() call
            selectedLat = latitude;
            selectedLong = longitude;
            
            // Then initialize the map.
            initialize(latitude, longitude);
        };
        
        // Initializes the map
        var initialize = function (latitude, longitude) {

            // Uses the selected lat, long as starting point
            var myLatLng = { lat: selectedLat, lng: selectedLong };

            // If map has not been created already...
            if (!map) {

                // Create a new map and place in the index.html page
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 12,
                    center: myLatLng
                });
            }
            
            // Set initial location as a bouncing red marker
            var initialLocation = new google.maps.LatLng(latitude, longitude);
            var marker = new google.maps.Marker({
                position: initialLocation,
                animation: google.maps.Animation.BOUNCE,
                map: map,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
            lastMarker = marker;

        };
        
        // Refresh the page upon window load. Use the initial latitude and longitude
        google.maps.event.addDomListener(window, 'load',
            mapService.refresh(selectedLat, selectedLong));

        return mapService;
    });