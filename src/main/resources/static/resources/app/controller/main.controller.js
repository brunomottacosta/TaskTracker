'use strict';

app.controller('ApplicationController', function($scope, $rootScope, $timeout, $state, $modal, Authentication) {
	
	$scope.init = function() {
		return Authentication.set();	
	};
	
	/**
     * FUNCOES AUTENTICACAO
     */
	
	$scope.logout = function() {
		$rootScope.fnLoading(true);
		Authentication.logout();
		$timeout(function() {
			$state.go('login');
			$rootScope.fnLoading(false);
		}, 1000);
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
	
    /**
     * FUNCOES LOADING 
     */
    
    $rootScope.loading = 'loading-off';
    
    $rootScope.fnLoading = function(val) {
    	if (val) {
    		$rootScope.loading = 'loading-on';
    	}
    	else {
			$rootScope.loading = 'loading-off';
    	}    	
    };
    
    $rootScope.isLoading = function() {
    	return ($rootScope.loading === 'loading-on' ? true : false);
    };  
    
    /**
     * FUNCOES MENU
     */
    
    $rootScope.isSelected = function(item) {
    	if ($state.is(item)) {
    		return 'active';
    	}
    	return '';
    }; 
    
});