'use strict';

app.controller('ApplicationController', function($scope, $rootScope, $state, $modal, Authentication) {
	
	$scope.init = function() {
		return Authentication.set();	
	};
	
	$scope.logout = function() {
		Authentication.logout();
		$state.go('login');
	};
	
	$scope.isAuthenticated = function() {
		if (!$scope.user) {
			$scope.user = angular.copy(Authentication.user);	
		}			
		return Authentication.isAuthenticated();
	};
	
	$scope.isAuthorized =  function(role) {
		return Authentication.isAuthorized(role);
    };   
	
    $rootScope.loading = 'loading-off';
    
    $rootScope.isLoading = function(val) {
    	if (val) $rootScope.loading = 'loading-on';
    	else $rootScope.loading = 'loading-off';
    };
    
});