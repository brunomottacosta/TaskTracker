/*
 * 
 */

app.controller('ProjetoCtrl', function($scope, $route, $location, ProjetoService, TarefaService) {
	
	$scope.projetos = ProjetoService.projetos;
	$scope.projeto = ProjetoService.projeto;
	
	$scope.findAll = function() {
		ProjetoService.list();		
	};
	
	// buscar uma projeto
	$scope.find = function() {
		ProjetoService.get($route.current.params.id).then(function() {
			TarefaService.listByProjeto($route.current.params.id).then(function() {
				$scope.tarefas = TarefaService.tarefas;
			});
		});		
	};
	
	// adicionar projeto
	$scope.adicionar = function(projeto) {
		if ($scope.descricao !== "") {
			projeto.descricao = $scope.descricao;
			ProjetoService.save(projeto).then(function() {
				$scope.descricao = "";
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