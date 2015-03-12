app.factory('ProjetoService', function($http) {	
	
	var o = {
			projetos: [],
			projeto: {}
		};	
		
		o.list = function() {
			return $http.get('/projetos').success(function(data) {
				angular.copy(data, o.projetos);
			});
		};
		
		o.get = function(id) {
			return $http.get('/projetos/' + id).success(function(data) {
				angular.copy(data, o.projeto);
			});
		};
		
		o.save = function(projeto) {
			return $http.post('/projetos', projeto).success(function(projeto) {
				o.list();
			});
		};
		
		o.update = function(projeto) {
			return $http.put('/projetos/' + projeto.id, projeto).success(function() {
				o.list();
			});
		};
		
		o.remove = function(projeto) {
			return $http.delete('/projetos/' + projeto.id).success(function() {
				o.list();
			});
		};
		
		return o;
});