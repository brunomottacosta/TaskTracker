var app = angular.module('TaskTracker', [ 'ui.router', 'ngResource', 'ui.bootstrap' ]);

app.controller('ApplicationController', function($scope, $http, $state, TokenStorage, Authentication) {
	
	$scope.init = function() {
		$http.get('/api/users/current').success(function(user) {
			if (user.username !== 'anonymousUser') {
				$scope.authenticated = true;		
			}
		});		
	};
	
	$scope.logout = function() {
		Authentication.logout();
		$scope.authenticated = false;
		$state.go('login');
	};
	
	$scope.$watch(function(scope) {
		return scope.authenticated;
	}, function(newVal, oldVal) {
		if (newVal != oldVal) ;
	});
	
});