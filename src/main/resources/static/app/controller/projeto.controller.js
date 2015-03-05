/*
 * 
 */

app.controller('ProjetoCtrl', function($scope, $route, $location, Projeto) {
	
	$scope.edicao = false;
	
	// libera para edicao
	$scope.habilitarEdicao = function() {
		if ($scope.edicao) {
			$scope.edicao = false;
		} else {
			$scope.edicao = true;
		}
	}
	
	// listar todas as projetos
	$scope.findAll = function() {		
		Projeto.query( function(response) {
			$scope.projetos = response ? response : [];	
		});
	};
	
	// buscar uma projeto
	$scope.find = function() {
		$scope.projeto = Projeto.get({
			id: $route.current.params.id
		});
	};
	
	// adicionar projeto
	$scope.adicionar = function() {
		new Projeto({
			descricao : $scope.descricao,
			projeto : $scope.projeto
		})
		.$save( function(projeto) {
			$scope.projetos.push(projeto);
		});
		$scope.descricao = "";
	};
	
	// atualizar projeto
	$scope.atualizar = function(projeto) {
		projeto.$update(function() {
			$scope.edicao = false;
		});
	} 
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		projeto.$remove(function() {
			$scope.projetos.splice($scope.projetos.indexOf(projeto), 1);
		});
	};

});