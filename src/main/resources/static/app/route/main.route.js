/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', '$locationProvider', 
            
            function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	
	$stateProvider
	
		.state('home', {
			url: '/home',
			templateUrl: 'pages/home.html', 
			controller: 'MainCtrl',
			data: {
				authentication: true
			}
		})
		
		.state('login', {
			url: '/login',
			templateUrl: 'pages/login.html',
			controller: 'AuthCtrl',
			data: {
				authentication: false
			}
		})
		
		.state("404", {
			url: '/404',
			templateUrl: "pages/states/404.html",
		})
		
		.state('error', {
			url: '/error',
			templateUrl: "pages/states/error.html",
		});
		
	$urlRouterProvider.otherwise('home');
	
		
}]);	