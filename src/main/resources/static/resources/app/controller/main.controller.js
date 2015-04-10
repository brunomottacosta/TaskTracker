'use strict';

app.controller('ApplicationController', function($scope, $rootScope, $timeout, $state, $modal, Authentication) {
	
	$scope.init = function() {
		return Authentication.set();	
	};
	
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
    
    /* para ordenação de tabelas */	
//	$rootScope.ordenar = function(val) {
//		var str = val.replace(".", "-");
//		var element = angular.element("#" + str);
//		var ordenacao = element.parent().children('th');
//		var i = ordenacao.length;
//		var selected = 'ordered-by-this';
//		
//		if (element.hasClass(selected)) {
//			$scope.ordem = $scope.ordem.slice(1, $scope.ordem.length - 1);			
//			if ($scope.ordem === val) {
//				$scope.ordem = "-" + val;
//				element.children('i').remove();
//				element.append(' <i class="fa fa-chevron-up"></i>');	
//			} else {
//				$scope.ordem = val;
//				element.children('i').remove();
//				element.append(' <i class="fa fa-chevron-down"></i>');	
//			}
//		} else {
//			$scope.ordem = val;
//			element.addClass(selected);
//			element.append(' <i class="fa fa-chevron-down"></i>');			
//		}
//		
//		if ($scope.ordem.split(".").length > 1) {
//			$scope.ordem = "'" + $scope.ordem + "'";
//		}
//		
//		while (i--) {
//			if (ordenacao[i].id !== "") {
//				var e = angular.element("#" + ordenacao[i].id);
//				if (ordenacao[i].id !== str && e.hasClass(selected)) {
//					e.removeClass(selected);
//					e.children('i').remove();
//				}
//			}
//		}
//	}
    
    
    $rootScope.ordenar = function(column) {
    	var sort = $scope.sort;
    	if (sort.column == column) {
    		sort.descending = !sort.descending;
    	} else {
    		sort.column = column;
    		sort.descending = false;
    	}
    }
    
});