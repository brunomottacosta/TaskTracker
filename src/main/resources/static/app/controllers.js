// main controller
app.controller('MainCtrl', function($scope, $routeParams) {
	
	$scope.texto = "Bruno";
});

// ######################################################################################################################################## //
// projeto controller
app.controller('ProjetoCtrl', function($scope, $location, $routeParams, Projeto) {
	
	$scope.edicao = false;	

	$scope.projetos = Projeto.projetos;
	
	// libera para edicao
	$scope.habilitarEdicao = function() {
		if ($scope.edicao) {
			$scope.edicao = false;
		} else {
			$scope.edicao = true;
		}
	}
	
	// busca um projeto
	$scope.find = function() {
		console.log(Projeto.get($routeParams.id));
		$scope.projeto = Projeto.projeto;
	};	
	
	// salvar projeto
	$scope.adicionar = function() {
		Projeto.create({
			descricao : $scope.descricao
		});
		$scope.descricao = "";
	};
	
	// atualizar projeto
	$scope.atualizar = function() {
		var projeto = $scope.projeto;		
		
		projeto.$update( function() {
			$location.path("projetos");
		});
	}
	
	// deletar projeto
	$scope.deletar = function(projeto) {
		projeto.$remove( function() {
			$scope.projetos.splice($scope.projetos.indexOf(projeto), 1);
		});
	};

});

// ######################################################################################################################################## //
// tarefa controller
app.controller('TarefaCtrl', function($scope, $location, $routeParams, Tarefa, Projeto) {
	
	// listar todas as tarefas
	$scope.findAll = function() {		
		Tarefa.query( function(response) {
			$scope.tarefas = response ? response : [];	
		});
		Projeto.query( function(response) {
			$scope.projetos = response ? response : [];
		});
	};
	
	// buscra uma tarefa
	$scope.find = function() {
		$scope.tarefa = Tarefa.get({
			id: $routeParams.id
		});
	};
	
	// adicionar tarefa
	$scope.adicionar = function() {
		new Tarefa({
			descricao : $scope.descricao,
			projeto : $scope.projeto
		})
		.$save( function(tarefa) {
			$scope.tarefas.push(tarefa);
		});
		$scope.descricao = "";
	};
	
	// deletar tarefa
	$scope.deletar = function(tarefa) {
		tarefa.$remove( function() {
			$scope.tarefas.splice($scope.tarefas.indexOf(tarefa), 1);
		});
	};
});
