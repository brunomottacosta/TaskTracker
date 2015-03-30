app.factory('TokenStorage', function() {
	
	var storageKey = 'auth_token';
	return {
		store : function(token) {
			return localStorage.setItem(storageKey, token);
		},
		retrieve : function() {
			return localStorage.getItem(storageKey);
		},
		clear : function() {
			return localStorage.removeItem(storageKey);
		}
	};
}).factory('TokenAuthInterceptor', function($q, TokenStorage) {
	return {
		request : function(config) {
			var authToken = TokenStorage.retrieve();
			if (authToken) {
				config.headers['X-AUTH-TOKEN'] = authToken;
			}
			return config;
		},
		responseError : function(error) {
			if (error.status === 401 || error.status === 403) {
				TokenStorage.clear();
			}
			return $q.reject(error);
		}
	};
}).config(function($httpProvider) {	
	$httpProvider.interceptors.push('TokenAuthInterceptor');	
}).run(function($rootScope, $state, $location) {
	
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
		$http.get('/api/users/current').success(function(user) {
			if (user.username !== 'anonymousUser') {
				$rootScope.authenticated = true;
			}
		});	
		if (!$rootScope.authenticated) {
			 if (!$state.is('login')) {
				$location.path('/login');
			 } else {
				 event.preventDefault();
			 }
		}	   
	});
});