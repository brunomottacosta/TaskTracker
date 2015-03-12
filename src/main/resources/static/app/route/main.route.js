/**
 * 
 */

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	
	$routeProvider
	
		// home
		.when("/", {
			templateUrl: "pages/home.html", 
			controller: "MainCtrl"
		})
		
		.when("/login", {
			templateUrl: "pages/login.html",
			controller: "MainCtrl"
		})
		
		.when("/404", {
			templateUrl: "pages/states/404.html",
		})
		
		.when("/error", {
			templateUrl: "pages/states/error.html",
		})
		
		.otherwise('/');
	
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		
}]);	