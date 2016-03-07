angular.module('spotsCtrl', ['geolocation', 'mapService'])

    .controller('spotsController', function ($scope, $http, geolocation, mapService) {
        
        $scope.message = 'spots';

        $scope.formData = {};
        
        // Get User's actual coordinates based on HTML5 at window load
        geolocation.getLocation().then(function (data) {

            // Set the latitude and longitude equal to the HTML5 coordinates
            coords = { lat: data.coords.latitude, long: data.coords.longitude };

            mapService.refresh(data.coords.latitude, data.coords.longitude);
        });
    });