'use strict';

app.factory('Authentication', function($http, $state, TokenStorage) {
	
	var auth = {};
	
	auth.login = function(user) {
		return $http.post('/api/login', {
			username : user.username, 
			password : user.password
		}).success(function(result, status, headers) {
			TokenStorage.store(headers('X-AUTH-TOKEN'));
		});
	};
	
	auth.logout = function(callback) {
		TokenStorage.clear();		
	};
	
	return auth;
	
});