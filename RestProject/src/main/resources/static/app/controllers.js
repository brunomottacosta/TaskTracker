( function(angular) {
	
	var ProjetoCtrl = function($scope, Projeto) {
		Projeto.query(function(response) {
			$scope.projetos = response ? response : [];
		});

		$scope.addProjeto = function() {
			new Projeto({
				descricao : $scope.descricao
			}).$save(function(projeto) {
				$scope.projetos.push(projeto);
			});
			$scope.descricao = "";
		};

	};

	ProjetoCtrl.$inject = [ '$scope', 'Projeto' ];
	angular.module("Application.controllers").controller("ProjetoCtrl",	ProjetoCtrl);
	
} (angular));
