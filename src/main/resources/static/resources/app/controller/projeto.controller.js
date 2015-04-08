'use strict';


app.controller('ProjetoCtrl', function($scope, $stateParams, $state, $location, $modal, $filter, ProjetoService) {
 	
	$scope.projetos = ProjetoService.projetos;
	$scope.projeto = ProjetoService.projeto;
	
	$scope.findAll = function() {
		ProjetoService.list();		
	}
	
	$scope.limparFormulario = function() {
		$scope.descricao = "";
		$scope.criacao = "";
	}
	
	// buscar uma projeto
	$scope.find = function() {
		ProjetoService.get($stateParams.id);
	}
	
	// adicionar projeto
	$scope.adicionar = function(projeto) {
		
		if ($scope.descricao !== "") {
			
			projeto.descricao = $scope.descricao;
			projeto.criacao = $scope.criacao.date;
			projeto.seila = "asdfsadf";
			
			ProjetoService.save(projeto).then(function() {
				$scope.descricao = "";
				$scope.criacao = "";
			});			
		};		
		
	}
	
	// funcao editar projeto, abre modal para editar dados 
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
		
	}
	
	// atualizar projeto
	var atualizar = function(projeto) {
		ProjetoService.update(projeto).then(function() {
			$state.reload();
		});
	}
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		ProjetoService.remove(projeto).then(function() {
			$location.path('/projetos'); 
		});				
	}
	
	// para ordenação da lista
	$scope.ordem = "descricao";
	
	$scope.ordenar = function(val) {		
		var element = angular.element("#" + val);
		var ordenacao = element.parent().children('th');
		var i = ordenacao.length;
		var selected = 'ordered-by-this';
		
		if (element.hasClass(selected)) {
			if ($scope.ordem === val) {
				$scope.ordem = "-" + val;
				element.children('i').remove();
				element.append(' <i class="fa fa-chevron-up"></i>');	
			} else {
				$scope.ordem = val;
				element.children('i').remove();
				element.append(' <i class="fa fa-chevron-down"></i>');	
			}
		} else {
			$scope.ordem = val;
			element.addClass(selected);
			element.append(' <i class="fa fa-chevron-down"></i>');			
		}
		
		while (i--) {
			if (ordenacao[i].id !== "") {
				var e = angular.element("#" + ordenacao[i].id);
				if (ordenacao[i].id !== val && e.hasClass(selected)) {
					e.removeClass(selected);
					e.children('i').remove();
				}
			}
		}
	}
	

})

.controller('ProjetoListCtrl', function($scope, $stateParams, $state, $location, ProjetoService) {
	
	
	
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
