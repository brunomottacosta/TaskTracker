app

.factory('Projeto', function($http) {
	// lista de projetos
	var o = {
		projeto: {},	
		projetos: []
	};
	// request lista completa
	o.getAll = function() {
		return $http.get('/projetos').success( function(data) {
			angular.copy(data, o.projetos);
		});
	};
	// request apenas um projeto
	o.get = function(id) {
		return $http.get('/projetos/' + id).success( function(data) {
			angular.copy(data, o.projeto);
		});
	};
	
	o.create = function(projeto) {
		return $http.post('/projetos', projeto).success( function(data) {
			o.projetos.push(data);
		});
	};
	return o;
})

.factory('Tarefa', function($resource) {
	
	
	return $resource('/tarefas/:id', {
		id : '@id'
	}, 
	{
		update : {
			method : "PUT"
		},
		remove : {
			method : "DELETE"
		}
	});
});
