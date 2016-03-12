angular.module('mapService', [])

    .factory('mapService', function($http) {

        // Service our factory will return
        var mapService = {};

        // Selected Location (initialize to center of America)
        var selectedLat = 27.937279;
        var selectedLong = -82.498325;
        var lastMarker = {};
        var service;
        var infowindow;

        // Refresh the Map with new data. Function will take 
        // new latitude and longitude coordinates.
        mapService.refresh = function(latitude, longitude) {

            // Set the selected lat and long equal to the ones 
            // provided on the refresh() call
            selectedLat = latitude;
            selectedLong = longitude;

            // Then initialize the map.
            initialize(latitude, longitude);
        };

        // Initializes the map
        var initialize = function(latitude, longitude) {

            // Uses the selected lat, long as starting point
            var myLatLng = { lat: selectedLat, lng: selectedLong };

            // If map has not been created already...
            if (!map) {
                // Create a new map and place in the index.html page
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: myLatLng
                });
            }

            // Set initial location as a bouncing red marker
            var initialLocation = new google.maps.LatLng(latitude, longitude);
            var centermarker = new google.maps.Marker({
                position: initialLocation,
                map: map,
                animation: google.maps.Animation.BOUNCE
            });

            infoWindow = new google.maps.InfoWindow();
            service = new google.maps.places.PlacesService(map);

            map.addListener('idle', function() {

                var request = {
                    bounds: map.getBounds(),
                    keyword: 'fishing'
                };

                service.radarSearch(request, function(results, status) {
                    if (status !== google.maps.places.PlacesServiceStatus.OK) {
                        console.error(status);
                        return;
                    }
                    for (var i = 0, result; result = results[i]; i++) {
                        addMarker(result);
                    }
                });
            });

            var addMarker = function(place) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: "assets/img/fish-icon.png"
                    // {
                    //     // custom fish icon
                    //     path: 'M -8,0 -6,4 0,6 6,6 10,4 12,2 14,4 16,6 16,-6 14,-4 12,-2 10,-4 6,-6 0,-6 -4,-6 z',
                    //     fillColor: '#E65C00',
                    //     fillOpacity: 1,
                    //     scale: 1,
                    //     strokeColor: '#000000',
                    //     strokeWeight: 1
                    // }
                });

                google.maps.event.addListener(marker, 'click', function() {
                    service.getDetails(place, function(result, status) {
                        if (status !== google.maps.places.PlacesServiceStatus.OK) {
                            console.error(status);
                            return;
                        }
                        infoWindow.setContent(result.name);
                        infoWindow.open(map, marker);
                    });
                });
            };
        };

        // Refresh the page upon window load. 
        // Use the initial latitude and longitude
        google.maps.event.addDomListener(window, 'load',
            mapService.refresh(selectedLat, selectedLong));

        return mapService;
    });