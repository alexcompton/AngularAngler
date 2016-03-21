angular.module('spotsCtrl', ['geolocation', 'mapService'])

    .controller('spotsController', function ($scope, $http, geolocation, mapService) {

        $scope.formData = {};
        
        // Get User's actual coordinates based on HTML5 at window load
        geolocation.getLocation().then(function (data) {
            mapService.refresh(data.coords.latitude, data.coords.longitude);
        });
    });