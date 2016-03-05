angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

        // home page route
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller  : 'mainController',
			controllerAs: 'main'
		})
        
        // terms and conditions route
        .when('/terms', {
			templateUrl : 'app/views/pages/terms.html',
			controller  : 'termsController',
			controllerAs: 'terms'
		});

	$locationProvider.html5Mode(true);
});