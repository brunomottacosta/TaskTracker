'use strict';


app.controller('ProjetoCtrl', function($scope, $stateParams, $state, $location, $modal, ProjetoService) {
 	
	$scope.projetos = ProjetoService.projetos;
	$scope.projeto = ProjetoService.projeto;
	
	$scope.findAll = function() {
		ProjetoService.list();		
	};
	
	$scope.limparFormulario = function() {
		$scope.descricao = "";
		$scope.criacao = "";
	};
	
	// buscar uma projeto
	$scope.find = function() {
		ProjetoService.get($stateParams.id);
	};
	
	// adicionar projeto
	$scope.adicionar = function(projeto) {
		if ($scope.descricao !== "") {
			projeto.descricao = $scope.descricao;
			projeto.criacao = $scope.criacao.date;
			ProjetoService.save(projeto).then(function() {
				$scope.descricao = "";
				$scope.criacao = "";
			});			
		};		
	};
	
	$scope.editar = function(size) {
		
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
		
		modal.result.then(function(projeto) {				
			atualizar(projeto);
		}, function() {			
			$scope.projeto = ProjetoService.projeto;			
		});
		
	};
	
	// atualizar projeto
	var atualizar = function(projeto) {
		ProjetoService.update(projeto).then(function() {
			$state.reload();
		});
	}; 
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		ProjetoService.remove(projeto).then(function() {
			$location.path('/projetos'); 
		});				
	};

})

/* controller extra para projeto */
.controller('ProjetoFnCtrl', function($scope, $modalInstance, projeto) {	
	
	$scope.editando = angular.copy(projeto);	
	
	$scope.ok = function() {		
		$modalInstance.close($scope.editando);		
	};
	
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
});
