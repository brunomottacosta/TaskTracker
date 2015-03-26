app.controller('AuthCtrl', function($scope, $http, TokenStorage) {
	
	$scope.login = function() {
		$http.post('/api/login', {
			username : $scope.username,
			password : $scope.password
		}).success(function(result, status, headers) {
			$scope.authenticated = true;
			TokenStorage.store(headers('X-AUTH-TOKEN'));
		});
	};
});