var app = angular.module('TaskTracker', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
		// home
		.when("/", {
			templateUrl: "pages/home.html", 
			controller: "MainCtrl"
		})
		// about
		.when("/about", {
			templateUrl: "pages/about.html", 
			controller: "MainCtrl"
		})
		// view projeto
		.when("/projetos/:id", {
			templateUrl: "pages/projeto.view.html", 
			controller: "MainCtrl"				
		})
	
}]);
