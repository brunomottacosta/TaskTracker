'use strict';

app.controller('AuthCtrl', function($rootScope, $scope, $http, $state, $location, Authentication) {
	
	$scope.user = {};
	
	$scope.login = function(user) {
		Authentication.login(user).then(function(res) {		
			$rootScope.authenticated = true;
			$location.path('/home');
		}, function(err) {
			$scope.err = err.status;
		});
	};
	
});