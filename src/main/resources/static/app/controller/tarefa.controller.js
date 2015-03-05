app.controller('TarefaCtrl', function($scope, $location, $routeParams, Tarefa, Projeto) {
	
	// listar todas as tarefas
	$scope.findAll = function() {		
		Tarefa.query( function(response) {
			$scope.tarefas = response ? response : [];	
		});
		Projeto.query( function(response) {
			$scope.projetos = response ? response : [];
		});
	};
	
	// buscra uma tarefa
	$scope.find = function() {
		$scope.tarefa = Tarefa.get({
			id: $routeParams.id
		});
	};
	
	// adicionar tarefa
	$scope.adicionar = function() {
		new Tarefa({
			descricao : $scope.descricao,
			projeto : $scope.projeto
		})
		.$save( function(tarefa) {
			$scope.tarefas.push(tarefa);
		});
		$scope.descricao = "";
	};
	
	// deletar tarefa
	$scope.deletar = function(tarefa) {
		tarefa.$remove( function() {
			$scope.tarefas.splice($scope.tarefas.indexOf(tarefa), 1);
		});
	};
});