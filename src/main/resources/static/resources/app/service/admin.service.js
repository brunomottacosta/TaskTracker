'use strict';

app.factory('AdminService', function($http) {	
	
	var o = {
			usuarios: [],
			usuario: {}
		};	
		
		o.listUsers = function() {
			return $http.get('/admin/api/users').success(function(data) {
				angular.copy(data, o.usuarios);
			});
		};
		
		o.getUser = function(id) {
			return $http.get('/admin/api/users/' + id).success(function(data) {
				angular.copy(data, o.usuario);
			});
		};
 				
		o.saveUser = function(usuario) {
			return $http.post('/admin/api/users', usuario).success(function(usuario) {
				o.list();
			});
		};
		
		o.updateUser = function(usuario) {
			return $http.put('/admin/api/users/' + usuario.id, usuario).success(function() {
				o.list();
			});
		};
		
		o.removeUser = function(usuario) {
			return $http.delete('/admin/api/users/' + usuario.id).success(function() {
				o.list();
			});
		};
		
		return o;
});