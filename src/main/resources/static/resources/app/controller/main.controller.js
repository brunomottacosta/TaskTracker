app.controller('ApplicationController', function($scope, $state, Authentication) {
	
	$scope.init = function() {
		return Authentication.set();	
	};
	
	$scope.logout = function() {
		Authentication.logout();
		$state.go('login');
	};
	
	$scope.isAuthenticated = function() {
		setUser(Authentication.user);		
		return Authentication.isAuthenticated();
	}
	
	var setUser = function(user) {
		$scope.user = user;
	}
	
});