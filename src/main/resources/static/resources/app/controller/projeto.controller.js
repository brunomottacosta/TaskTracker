/*
 * 
 */

app.controller('ProjetoCtrl', function($scope, $stateParams, $location, ProjetoService) {
 	
	$scope.projetos = ProjetoService.projetos;
	$scope.projeto = ProjetoService.projeto;
	
	$scope.findAll = function() {
		ProjetoService.list();		
	};
	
	$scope.esconder = function(elem) {
		
	}
	
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
	
	// atualizar projeto
	$scope.atualizar = function(projeto) {
		ProjetoService.update(projeto).then(function() {
			$location.path('/projetos/' + projeto.id);
		});
	}; 
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		ProjetoService.remove(projeto).then(function() {
			$location.path('/projetos');
		});				
	};

});
