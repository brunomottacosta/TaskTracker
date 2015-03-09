app.controller('TarefaCtrl', function($scope, $location, $routeParams, TarefaService, ProjetoService) {
	
	$scope.tarefas = TarefaService.tarefas;
	$scope.projetos = ProjetoService.projetos;
	$scope.tarefa = TarefaService.tarefa;
	
	$scope.findAll = function() {
		TarefaService.list();
		ProjetoService.list();
	};
	
	// buscar uma tarefa
	$scope.find = function() {
		TarefaService.get($route.current.params.id);		
	};
	
	// adicionar tarefa
	$scope.adicionar = function(tarefa) {
		if ($scope.descricao !== "") {
			tarefa.descricao = $scope.descricao;
			tarefa.projeto = $scope.projeto;
			TarefaService.save(tarefa).then(function() {
				$scope.descricao = "";
				$scope.projeto = "";
			});			
		};		
	};
	
	// atualizar tarefa
	$scope.atualizar = function(tarefa) {
		TarefaService.update(tarefa).then(function() {
			$location.path('/tarefas/' + tarefa.id);
		});
	}; 
	
	// deletar tarefa
	$scope.deletar = function(tarefa) {
		TarefaService.remove(tarefa).then(function() {
			$location.path('/tarefas');
		});				
	};
});