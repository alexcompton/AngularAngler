angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

        // home page route
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller  : 'mainController',
			controllerAs: 'main'
		});

	$locationProvider.html5Mode(true);
});