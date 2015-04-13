/*
 * 
 */

app.controller('TarefaCtrl', function(
		// dependencias
		$rootScope, $scope, $location, $stateParams, TarefaService, ProjetoService, Functions) {

	$scope.tarefas = TarefaService.tarefas;
	$scope.projetos = ProjetoService.projetos;
	$scope.tarefa = TarefaService.tarefa;
	
	// buscar todas as tarefas
	$scope.findAll = function() {
		TarefaService.list();
		ProjetoService.list();
	};

	// buscar uma tarefa
	$scope.find = function() {
		TarefaService.get($stateParams.id);
	};

	// adicionar tarefa
	$scope.adicionar = function(tarefa) {

		tarefa.descricao = $scope.descricao;
		tarefa.projeto = $scope.projeto;
		tarefa.criacao = $scope.inicio.date;
		tarefa.prazo = $scope.prazo.date;

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
			$state.reload();
		});
	};
	
	/* #################
	 * FUNCOES DA PAGINA
	 * 
	 * */	
	
	// limpar formulario
	$scope.limparFormulario = function() {
		$scope.descricao = "";
		$scope.projeto = {};
		$scope.inicio = "";
		$scope.prazo = "";
	};	
	
	// array cabecalho
	$scope.columns = [{
		type: "descricao",
		name: "NOME",
		classe: "",
		arrow: "",
		size: "col-xs-3"
	},{
		type: "projeto.descricao",
		name: "PROJETO",
		classe: "",
		arrow: "",
		size: "col-xs-3"
	},{
		type: "inicio",
		name: "DATA INICIAL",
		classe: "",
		arrow: "",
		size: "col-xs-2"
	},{
		type: "prazo",
		name: "DATA FINAL",
		classe: "",
		arrow: "",
		size: "col-xs-2"
	}];
	
	// variavel de ordenacao 
	$scope.sort = {
		column: '',
		descending: false
    }
	    
	// funcao de ordenacao
    $scope.ordenar = function(column) {
    	var sort = $scope.sort;
    	var columns = $scope.columns;    	
    	Functions.ordenacaoTabela(column, columns, sort);    	
    }
	
	// executa ordenacao inicial
	$scope.ordenar($scope.columns[0].type);
	
});