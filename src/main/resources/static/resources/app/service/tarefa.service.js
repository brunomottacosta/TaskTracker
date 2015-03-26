app.factory('TarefaService', function($http) {
	
	var o = {
			tarefas: [],
			tarefa: {}
		};	
		
		o.list = function() {
			return $http.get('/api/tarefas').success(function(data) {
				angular.copy(data, o.tarefas);
			});
		};
		
		o.get = function(id) {
			return $http.get('/api/tarefas/' + id).success(function(data) {
				angular.copy(data, o.tarefa);
			});
		};
		
		o.save = function(tarefa) {
			return $http.post('/api/tarefas', tarefa).success(function(tarefa) {
				o.list();
			});
		};
		
		o.update = function(tarefa) {
			return $http.put('/api/tarefas/' + tarefa.id, tarefa).success(function() {
				o.list();
			});
		};
		
		o.remove = function(tarefa) {
			return $http.delete('/api/tarefas/' + tarefa.id).success(function() {
				o.list();
			});
		};
		
		return o;
});