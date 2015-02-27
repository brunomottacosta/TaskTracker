// main controller
app.controller('MainCtrl' , function($scope, $routeParams, Projeto) {
	
	// listar todos os projetos
	$scope.findAll = function() {		
		Projeto.query( function(response) {
			$scope.projetos = response ? response : [];	
		});
	};
	
	// busca um projeto
	$scope.find = function() {
		$scope.projeto = Projeto.get({
			id: $routeParams.id
		});
	};	
	
	// salvar projeto
	$scope.adicionar = function() {
		new Projeto({
			descricao : $scope.descricao
		})
		.$save(function(projeto) {
			$scope.projetos.push(projeto);
		});
		$scope.descricao = "";
	};
	
	// atualizar projeto
	$scope.atualizar = function(projeto) {
		projeto.$update();
	}
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		projeto.$remove( function() {
			$scope.projetos.splice($scope.projetos.indexOf(projeto), 1);
		});
	};

});