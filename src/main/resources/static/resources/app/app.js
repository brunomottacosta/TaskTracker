var app = angular.module('TaskTracker', [ 'ui.router', 'ngResource', 'ui.bootstrap' ]);

app.controller('ApplicationController', function($rootScope, $scope, $http, $state, TokenStorage, Authentication) {
	
	$rootScope.authenticated = false;
	
	$scope.init = function() {
		$http.get('/api/users/current').success(function(user) {
			if (user.username !== 'anonymousUser') {
				$rootScope.authenticated = true;
			}
		});		
	};
	
	$scope.logout = function() {
		Authentication.logout();
		$rootScope.authenticated = false;
		$state.go('login');
	};
	
	$scope.isAuthenticated = function() {
		return $rootScope.authenticated;
	}
	
});