'use strict';

app.controller('ApplicationController', function($scope, $state, $modal, Authentication) {
	
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
	};
	
	$scope.isAuthorized =  function(role) {
		return Authentication.isAuthorized(role);
    };
	
   
    	
    
	var setUser = function(user) {
		$scope.user = user;
	};
	
});