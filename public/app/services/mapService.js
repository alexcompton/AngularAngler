angular.module('mapService', [])

    .factory('mapService', function ($rootScope, $http) {
        
        // Service our factory will return
        var mapService = {}; 
        
        // // User Selected Location (initialize to center of America)
        // var selectedLat = 39.50;
        // var selectedLong = -98.35;

        // // Refresh the page upon window load. Use the initial latitude and longitude
        // google.maps.event.addDomListener(window, 'load',
        //     googleMapService.refresh(-34.397, 150.644));

        return mapService;
    });