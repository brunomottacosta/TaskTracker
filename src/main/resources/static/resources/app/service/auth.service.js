'use strict';

app.factory('Authentication', function($http, TokenStorage) {
	
	var _this = {
		user : ""
	};
	
	_this.login = function(user) {
		return $http.post('/api/login', {
			username : user.username, 
			password : user.password
		}).success(function(result, status, headers) {
			TokenStorage.store(headers('X-AUTH-TOKEN'));
			_this.set();
		});
	};
	
	_this.logout = function() {
		TokenStorage.clear();
		_this.user = "";		
	};
	
	_this.set = function() {
		return $http.get('/api/users/current').success(function(user) {
			if (user.username !== 'anonymousUser') {
				_this.user = user;
			}
		}); 
	};
	
	_this.isAuthenticated = function() {
		return (_this.user) ? _this.user : false; 
	};
	
	return _this;
	
});