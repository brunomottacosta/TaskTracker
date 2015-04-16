'use strict';

/* ######################
 * TAREFA MAIN CONTROLLER
 * ######################
 * */
app.controller('TarefaCtrl', function(
		/* injections */ 
		$scope, $state, $location, $stateParams, $modal, TarefaService, ProjetoService, Functions,
		/* resolve objects */
		tarefas, projetos) {

	$scope.tarefas = angular.copy(tarefas);
	$scope.projetos = angular.copy(projetos);

	// add in list view function
	$scope.adicionar = function() {
		
		var tarefa = {
			descricao: $scope.descricao,
			projeto: $scope.projeto,
			criacao: $scope.inicio.date,
			prazo: $scope.prazo.date
		}

		TarefaService.save(tarefa).then(function() {
			$scope.descricao = "";
			$scope.projeto = {};
			$scope.inicio = "";
			$scope.prazo = "";
			$scope.tarefas = TarefaService.tarefas;
		});
	};
	
	// open confirm dialog
	$scope.toDelete = function(tarefa) {
		var msg = 'Deseja excluir essa Tarefa?';
		Functions.mConfirmDialog(tarefa, msg, deletar);
	};
	
	// remove in list view function
	var deletar = function(tarefa) {
		TarefaService.remove(tarefa).then(function() {
			$state.reload();
		});
	};
	
	/* #################
	 * FUNCOES DA PAGINA
	 * #################
	 * */	
	
	// check array return true if empty or null
	$scope.isEmpty = function(array) {
		return Functions.isEmpty(array);
	}
	
	// clean form inputs
	$scope.limparFormulario = function() {
		$scope.descricao = "";
		$scope.projeto = {};
		$scope.inicio = "";
		$scope.prazo = "";
	};	
	
	// array table header
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
		type: "criacao",
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
	
	// ordenation variable
	$scope.sort = {
		column: '',
		descending: false
    }
	    
	// ordenation function
    $scope.ordenar = function(column) {
    	var sort = $scope.sort;
    	var columns = $scope.columns; 
    	// call sort table function
    	Functions.tSort(column, columns, sort); 
    }
	
	// execute initial ordenation
	$scope.ordenar($scope.columns[0].type);
	
})
/* ######################
 * TAREFA VIEW CONTROLLER
 * ######################
 * */
.controller('TarefaViewCtrl', function(
		/* injections */
		$scope, $state, $stateParams, $modal, TarefaService, 
		/* resolve objects */
		tarefa) {
	
	$scope.tarefa = angular.copy(tarefa);
	
	// remove in view page function
	var deletar = function(tarefa) {
		TarefaService.remove(tarefa).then(function() {
			$state.go('lista-tarefas');
		});
	};
	
	// update function
	var atualizar = function(tarefa) {
		TarefaService.update(tarefa).then(function() {
			$state.reload();
		});
	};
	
	// open modal to edit object function
	$scope.editar = function(size) {
		
		// initiate modal instance
		var modal = $modal.open({
			templateUrl: 'resources/pages/modals/tarefa.edit.modal.html',
			controller: 'TarefaFnCtrl',
			size: size,
			resolve: {
				tarefa: function() {
					return $scope.tarefa;
				}
			}
		});
		
		// after modal action ended
		modal.result.then(function(tarefa) {				
			atualizar(tarefa);
		}, function() {			
			$scope.tarefa = TarefaService.tarefa;			
		});
	}
	
	
})
/* ######################
 * TAREFA VIEW CONTROLLER
 * ######################
 * */
.controller('TarefaFnCtrl', function($scope, $modalInstance, tarefa) {
	
	$scope.tarefa = angular.copy(tarefa);	
	
	$scope.ok = function() {		
		$modalInstance.close($scope.tarefa);		
	};
	
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
});


