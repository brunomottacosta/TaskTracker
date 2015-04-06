/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', '$locationProvider', 
            
            function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	
	$stateProvider
	
		.state('home', {
			url: '/home',
			templateUrl: 'resources/pages/home.html', 
			data: {
				security: false
			}
		})
		
		.state('login', {
			url: '/login',
			templateUrl: 'resources/pages/login.html',
			controller: 'AuthCtrl',
			data: {
				security: false
			}	
		})
		
		.state("404", {
			url: '/404',
			templateUrl: "resources/pages/states/404.html",
		})
		
		.state('error', {
			url: '/error',
			templateUrl: "resources/pages/states/error.html",
		});
		
	$urlRouterProvider.otherwise('home');	
		
}]);	