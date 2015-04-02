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

app.run(function($rootScope, $state, $location, $http, $timeout, Authentication) {
	
	Authentication.set().then(function(res) {		
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {	
			
			if (!Authentication.isAuthenticated()) {	
				if($state.current.data.security) {					
					$location.path('/login');
				} else {
					event.preventDefault();
				}				
			}	
			
		});			
	});		
});
