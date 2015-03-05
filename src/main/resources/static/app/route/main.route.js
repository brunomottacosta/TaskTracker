/**
 * 
 */

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
	
		// home
		.when("/", {
			templateUrl: "pages/home.html", 
			controller: "MainCtrl"
		})
		
}]);	