var app = angular.module('TaskTracker', [ 'ui.router', 'ngRoute', 'ngResource',	'ui.bootstrap', 'ngCookies' ]);

app.controller('ApplicationController', function($scope, $http, $state, TokenStorage) {
	
	$scope.authenticated = false;
	$scope.token; // For display purposes only
	$scope.init = function() {
		$http.get('/api/users/current').success(function(user) {
			if (user.username !== 'anonymousUser') {
				$scope.authenticated = true;
				$scope.username = user.username;
				// For display purposes only
				$scope.token = JSON.parse(atob(TokenStorage.retrieve().split('.')[0]));
			}
		});
	};
	
	$scope.logout = function() {
		// Just clear the local storage
		TokenStorage.clear();
		$scope.authenticated = false;
		$state.go('login');
	};
	
	$scope.$watch('authenticated', function() {
		
	});
	
});