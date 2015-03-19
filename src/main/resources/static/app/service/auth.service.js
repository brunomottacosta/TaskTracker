'use strict';

app.factory('Authentication', function($http, $cookieStore, $rootScope, $timeout) {

	var service = {

	};

	service.login = function(username, password, callback) {
		$timeout(function() {
			var response = {
				success : username === 'test' && password === 'test'
			};

			if (!response.success) {
				response.message = 'Bad credentials!';
			}
			callback(response);
		}, 1000);
	};
	
	service.set = function(username, password) {
		var authdata = username + ':' + password;
		
		$rootScope.globals = {
			currentUser: {
				username: username,
				authdata: authdata
			}	
		};
		
		$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
		$cookieStore.put('globals', $rootScope.globals);
	}
	
	service.clear = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return service;

});