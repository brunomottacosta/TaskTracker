app.factory('TarefaService', function($http, ProjetoService) {
	
	var o = {
			tarefas: [],
			tarefa: {}
		};	
		
		o.list = function() {
			return $http.get('/tarefas').success(function(data) {
				angular.copy(data, o.tarefas);
				$.each(data, function(key, obj) {
					if (obj.projeto.descricao != null) {	
					} else {
						ProjetoService.get(obj.projeto).then(function(res) {
							obj.projeto = res.data;
						});
					}			 
				});	
			});
		};
		
		o.listByProjeto = function(id) {
			return $http.get('/projetos/' + id + '/tarefas').success(function(data) {
				angular.copy(data, o.tarefas);
			});
		};
		
		o.get = function(id) {
			return $http.get('/tarefas/' + id).success(function(data) {
				angular.copy(data, o.tarefa);
			});
		};
		
		o.save = function(tarefa) {
			return $http.post('/tarefas', tarefa).success(function(tarefa) {
				o.list();
			});
		};
		
		o.update = function(tarefa) {
			return $http.put('/tarefas/' + tarefa.id, tarefa).success(function() {
				o.list();
			});
		};
		
		o.remove = function(tarefa) {
			return $http.delete('/tarefas/' + tarefa.id).success(function() {
				o.list();
			});
		};
		
		return o;
});