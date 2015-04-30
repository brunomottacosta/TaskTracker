'use strict';

app.factory('ComentarioService', function($http) {	
	
	var o = {
			comentarios: [],
			comentario: {},
		};	
		
		o.list = function() {
			return $http.get('/api/comentarios').success(function(data) {
				angular.copy(data, o.comentarios);
			});
		};
		
		o.get = function(id) {
			return $http.get('/api/comentarios/' + id).success(function(data) {
				angular.copy(data, o.comentario);
			});
		};
 		
		o.save = function(comentario) {
			return $http.post('/api/comentarios', comentario).success(function(comentario) {
				o.list();
			});
		};
		
		o.update = function(comentario) {
			return $http.put('/api/comentarios/' + comentario.id, comentario).success(function() {
				o.list();
			});
		};
		
		o.remove = function(comentario) {
			return $http.delete('/api/comentarios/' + comentario.id).success(function() {
				o.list();
			});
		};
		
		return o;
});