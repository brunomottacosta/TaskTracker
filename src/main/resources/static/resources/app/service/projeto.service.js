app.factory('ProjetoService', function($http) {	
	
	var o = {
			projetos: [],
			projeto: {}
		};	
		
		o.list = function() {
			return $http.get('/api/projetos').success(function(data) {
				angular.copy(data, o.projetos);
			});
		};
		
		o.get = function(id) {
			return $http.get('/api/projetos/' + id).success(function(data) {
				angular.copy(data, o.projeto);
			});
		};
		
		o.save = function(projeto) {
			return $http.post('/api/projetos', projeto).success(function(projeto) {
				o.list();
			});
		};
		
		o.update = function(projeto) {
			return $http.put('/api/projetos/' + projeto.id, projeto).success(function() {
				o.list();
			});
		};
		
		o.remove = function(projeto) {
			return $http.delete('/api/projetos/' + projeto.id).success(function() {
				o.list();
			});
		};
		
		return o;
});