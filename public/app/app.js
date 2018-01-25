const app = angular.module('myApp', [ 'ngRoute' ]);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/home.html'
		})
		.when('/about', {
			templateUrl: 'app/views/pages/about.html'
		})
		.when('/register', {
			templateUrl: 'app/views/pages/users/register.html',
			controller: 'regCtrl',
			controllerAs: 'register',
			authenticated: false
		})
		.otherwise({ redirectTo: '/' });
});
