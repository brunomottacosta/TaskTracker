app.factory('TokenStorage', function() {
	
	var storageKey = 'auth_token';
	
	return {
		store : function(token) {
			return sessionStorage.setItem(storageKey, token);
		},
		retrieve : function() {
			return sessionStorage.getItem(storageKey);
		},
		clear : function() {
			return sessionStorage.removeItem(storageKey);
		}
	};
});

app.config(function($httpProvider) {	
	
	$httpProvider.interceptors.push('TokenAuthInterceptor');
	$httpProvider.interceptors.push('HttpRequestInterceptor');
	
});

app.run(function($rootScope, $state, $location, Authentication) {
	
	
	
//	$rootScope.$on('$stateChangeStart', function (event) {	
//		if (!Authentication.isAuthenticated()) {			
//			if (!$state.is('login')) $location.path('/login');			
//		} 				
//	});
});