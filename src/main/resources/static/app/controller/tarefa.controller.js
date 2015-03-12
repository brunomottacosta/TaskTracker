/*
 * 
 */

app.controller('TarefaCtrl', function($scope, $location, $route, TarefaService,	ProjetoService) {

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

		tarefa.descricao = $scope.descricao;
		tarefa.projeto = $scope.projeto;
		tarefa.criacao = $scope.inicio.date;
		tarefa.prazo = $scope.prazo.date;

		console.log(tarefa);

		TarefaService.save(tarefa).then(function() {
			$scope.descricao = "";
			$scope.projeto = {};
			$scope.inicio = "";
			$scope.prazo = "";
		});
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