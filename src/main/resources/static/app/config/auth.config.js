app.run(function($rootScope, $state, $location, $cookieStore, $http) {
	
	$rootScope.globals = $cookieStore.get('globals') || {};
	
	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
	}
	
	$rootScope.$on('$locationChangeStart', function(event, next, current) {	
		if (!$rootScope.globals.currentUser) {			
			if ($state.is('login')) {
				event.preventDefault();
				$state.reload();
			} else {
				event.preventDefault();
				$state.go('login');				
			}
		}
	});
});

//app.factory('httpErrorResponseInterceptor', function($q, $state) {
//	return {
//		response : function(responseData) {
//			return responseData;
//		},
//		responseError : function error(response) {
//			switch (response.status) {
//			case 401:
//				$state.go('login');
//				break;
//			case 404:
//				$state.go('404');
//				break;
//			default:
//				$state.go('error');
//			}
//			return $q.reject(response);
//		}
//	};
//});
//
//app.config(function($httpProvider) {
//	$httpProvider.interceptors.push('httpErrorResponseInterceptor');
//});