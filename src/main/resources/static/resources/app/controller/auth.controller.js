'use strict';

app.controller('AuthCtrl', function($scope, $http, $state,Authentication) {
	
	$scope.user = {};
	
	$scope.login = function(user) {
		Authentication.login(user).then(function(res) {
			$scope.authenticated = true;
			$state.go('home');
		}, function(err) {
			$scope.err = err.status;
		});
	};
	
});