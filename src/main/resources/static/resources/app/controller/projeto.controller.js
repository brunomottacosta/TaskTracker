'use strict';

/* #######################
 * PROJETO MAIN CONTROLLER
 * #######################
 * */
app.controller('ProjetoCtrl', function(
		/* injections */
		$scope, $stateParams, $state, $location, $modal, ProjetoService, Functions, 
		/* resolve object */
		projetos) {
 		
	// resolve $scope.projetos (array of object)
	$scope.projetos = projetos;
	
	// add in list page function
	$scope.adicionar = function() {
		
		if ($scope.isAuthenticated) {
			
			var projeto = {
					descricao: $scope.descricao,
					criacao: $scope.criacao.date,
					user: $scope.user
			}	
			
			ProjetoService.save(projeto).then(function() {
				$scope.descricao = "";
				$scope.criacao = "";
				$scope.projetos = ProjetoService.projetos;
			});				
		}		
	}
	
	// open delete confirmation dialog
	$scope.toDelete = function(projeto) {
		var msg = 'Deseja excluir esse Projeto?';
		Functions.mConfirmDialog(projeto, msg, deletar);
	}
	
	// remove in list page function
	var deletar = function(projeto) {
		ProjetoService.remove(projeto).then(function() {
			$state.reload();
		});				
	}	
	
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
		$scope.criacao = "";
	}
	
	// array table header
	$scope.columns = [{
		type: "descricao",
		name: "NOME",
		classe: "",
		arrow: "",
		size: "col-xs-4"
	},{
		type: "criacao",
		name: "DATA DE CRIACAO",
		classe: "",
		arrow: "",
		size: "col-xs-2"
	},{
		type: "tarefas",
		name: "Nº DE TAREFAS",
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
/* #######################
 * PROJETO VIEW CONTROLLER
 * #######################
 * */
.controller('ProjetoViewCtrl', function(
		/* injections */
		$scope, $stateParams, $state, $location, $modal, ProjetoService, TarefaService, Functions, 
		/* resolve objects*/
		projeto) {
	
	// resolve $scope.projeto (object)
	$scope.projeto = angular.copy(projeto);
	
	/**
	 * open add tarefa modal
	 */
	$scope.toAddTarefa = function() {
		
		var tarefa = {};
		var modal = $modal.open({
			templateUrl: 'resources/pages/modals/tarefa.novo.modal.html',
			controller: 'TarefaFnCtrl',
			size: '',
			resolve: {
				tarefa: function() {
					return tarefa;
				}
			}
		});
		
		// after modal action ended
		modal.result.then(function(tarefa) {	
			tarefa.projeto = $scope.projeto;
			addTarefaToProjeto(tarefa);
		}, function() {			
				
		});
	}
	
	/**
	 * save tarefa to projeto
	 */
	var addTarefaToProjeto = function(tarefa) {
		TarefaService.save(tarefa).then(function(res) {
			$state.reload();
		});
	}
	
	// open confirmation dialog
	$scope.toDelete = function(projeto) {
		var msg = 'Deseja excluir esse projeto?';
		Functions.mConfirmDialog(projeto, msg, deletar);
	}
	
	// remove in view page function
	var deletar = function(projeto) {
		ProjetoService.remove(projeto).then(function() {
			$state.go('lista-projetos');
		});				
	}	
	
	// update in view page function
	var atualizar = function(projeto) {
		ProjetoService.update(projeto).then(function(res) {
			$scope.projeto = angular.copy(res.data);
		});
	}
	
	
	// open modal to edit object function
	$scope.editar = function(size) {
		
		// initiate modal instance
		var modal = $modal.open({
			templateUrl: 'resources/pages/modals/projeto.edit.modal.html',
			controller: 'ProjetoFnCtrl',
			size: size,
			resolve: {
				projeto: function() {
					return $scope.projeto;
				}
			}
		});
		
		// after modal action ended
		modal.result.then(function(projeto) {				
			atualizar(projeto);
		}, function() {			
			$state.reload();			
		});
		
	}
	
	/* #################
	 * FUNCOES DA PAGINA
	 * #################
	 * */	
	
	// check array return true if empty or null
	$scope.isEmpty = function(array) {
		return Functions.isEmpty(array);
	}
	
})
/* ########################
 * PROJETO MODAL CONTROLLER
 * ########################
 * */
.controller('ProjetoFnCtrl', function($scope, $modalInstance, projeto) {	
	
	$scope.projeto = angular.copy(projeto);	
	
	$scope.ok = function() {		
		$modalInstance.close($scope.projeto);		
	};
	
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
});
