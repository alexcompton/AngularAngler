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
		})
        
        // spots route
        .when('/spots', {
			templateUrl : 'app/views/pages/spots.html',
			controller  : 'spotsController',
			controllerAs: 'spots',
		})
        
        // fish id route
        .when('/fishId', {
			templateUrl : 'app/views/pages/fishId.html',
			controller  : 'fishIdController',
			controllerAs: 'fishId'
		})
        
        // tides route
        .when('/tides', {
			templateUrl : 'app/views/pages/tides.html',
			controller  : 'tidesController',
			controllerAs: 'tides'
		})
        
        // blog route
        .when('/blog', {
			templateUrl : 'app/views/pages/blog.html',
			controller  : 'blogController',
			controllerAs: 'blog'
		});

	$locationProvider.html5Mode(true);
});