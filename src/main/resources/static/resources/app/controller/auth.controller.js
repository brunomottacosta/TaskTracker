'use strict';

app.controller('AuthCtrl', function($scope, $rootScope, $location, $timeout, Authentication) {
	
	$scope.login = function(user) {
		$rootScope.fnLoading(true);
		Authentication.login(user).then(function(res) {			
			Authentication.set().then(function(res) {
				$location.path('/home');				
				$timeout(function() {
					$rootScope.fnLoading(false);
				}, 700);
			});			
			
		}, function(err) {
			$scope.err = err.status;
			$timeout(function() {
				$rootScope.fnLoading(false);
			}, 700);
		});
	};
	
});