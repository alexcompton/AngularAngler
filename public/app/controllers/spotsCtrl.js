angular.module('spotsCtrl', ['geolocation', 'mapService'])
    .controller('spotsController', function ($scope, $http, geolocation, mapService) {
        
        // var vm = this;        
        // vm.message = 'spots';    
        
        $scope.message = 'spots';

        mapService.refresh(40, -98);
        
        // Get User's actual coordinates based on HTML5 at window load
        geolocation.getLocation().then(function (data) {

            // Set the latitude and longitude equal to the HTML5 coordinates
            coords = { lat: data.coords.latitude, long: data.coords.longitude };

            // Display coordinates in location textboxes rounded to three decimal points
            $scope.formData.longitude = parseFloat(coords.long).toFixed(3);
            $scope.formData.latitude = parseFloat(coords.lat).toFixed(3);

            // Display message confirming that the coordinates verified.
            $scope.formData.htmlverified = "Yep (Thanks for giving us real data!)";

            gservice.refresh($scope.formData.latitude, $scope.formData.longitude);

        });
    });