'use strict';

app.controller('AuthCtrl', function($scope, $location, $timeout, Authentication) {
	
	$scope.login = function(user) {
		Authentication.login(user).then(function(res) {
			
			Authentication.set().then(function(res) {
				$timeout(function() {
					$location.path('/home');
				}, 300);
			});			
			
		}, function(err) {
			$scope.err = err.status;
		});
	};
	
});