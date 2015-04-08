'use strict';

app.controller('AuthCtrl', function($scope, $rootScope, $location, $timeout, Authentication) {
	
	$scope.login = function(user) {
		Authentication.login(user).then(function(res) {
			
			Authentication.set().then(function(res) {
				$rootScope.isLoading(true);
				$timeout(function() {
					$location.path('/home');
					$rootScope.isLoading(false);
				}, 1000);
			});			
			
		}, function(err) {
			$scope.err = err.status;
		});
	};
	
});