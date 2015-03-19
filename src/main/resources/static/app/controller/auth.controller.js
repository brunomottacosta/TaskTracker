app.controller('AuthCtrl', function($scope, $rootScope, $state, Authentication) {
	
	Authentication.clear();
	
	$scope.login = function() {
		$scope.dataLoading = true;
		
		Authentication.login($scope.username, $scope.password, function(response) {
			if (response.success) {
				Authentication.set($scope.username, $scope.password);
				$state.go('home');
			} else {
				$scope.err = response.message;
				$scope.dataLoading = false;
			}
		});
	};

});