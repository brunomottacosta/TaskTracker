// servico para gravar o token apos autenticado
app.factory('TokenStorage', function() {
	
	var storageKey = 'auth_token';
	
	return {
		// guarda o token na sessao
		store : function(token) {
			return sessionStorage.setItem(storageKey, token);
		},
		// recupera o token da sessao
		retrieve : function() {
			return sessionStorage.getItem(storageKey);
		},
		// limpa o token, usado para logout
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
				if ($state.current.data.security) {					
					$location.path('/login');
				} else {
					if ($state.is('login')) {
						if (toState.name !== 'home') {
							event.preventDefault();
						}						
					} else if ($state.is('home')) {
						if (toState.name !== 'login') {
							event.preventDefault();
						}
					} 					
				}				
			}		
		});			
	});		
});
