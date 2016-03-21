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

        // map elements
        var map = {};

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

            // Create the search box and link it to the UI element.
            var input = document.getElementById('location');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls.push(input);

            // // Bias the SearchBox results towards current map's viewport.
            // map.addListener('bounds_changed', function() {
            //     searchBox.setBounds(map.getBounds());
            // });

            // var markers = [];
            
            // // Listen for the event fired when the user selects a prediction 
            // // and retrieve more details for that place.
            // searchBox.addListener('places_changed', function() {
            //     var places = searchBox.getPlaces();

            //     if (places.length === 0) {
            //         return;
            //     }

            //     // Clear out the old markers.
            //     markers.forEach(function(marker) {
            //         marker.setMap(null);
            //     });

            //     markers = [];

            //     // For each place, get the icon, name and location.
            //     var bounds = new google.maps.LatLngBounds();
            //     places.forEach(function(place) {
            //         var icon = {
            //             url: place.icon,
            //             size: new google.maps.Size(71, 71),
            //             origin: new google.maps.Point(0, 0),
            //             anchor: new google.maps.Point(17, 34),
            //             scaledSize: new google.maps.Size(25, 25)
            //         };

            //         // Create a marker for each place.
            //         markers.push(new google.maps.Marker({
            //             map: map,
            //             icon: icon,
            //             title: place.name,
            //             position: place.geometry.location
            //         }));

            //         if (place.geometry.viewport) {
            //             // Only geocodes have viewport.
            //             bounds.union(place.geometry.viewport);
            //         } else {
            //             bounds.extend(place.geometry.location);
            //         }
            //     });

            //     map.fitBounds(bounds);
            // });

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