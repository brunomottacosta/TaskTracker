'use strict';

app.controller('AuthCtrl', function($scope, $location, Authentication) {
	
	$scope.login = function(user) {
		Authentication.login(user).then(function(res) {
			Authentication.set();
			$location.path('/home');
		}, function(err) {
			$scope.err = err.status;
		});
	};
	
});