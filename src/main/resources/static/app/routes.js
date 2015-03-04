app.config(['$routeProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
	
		// home
		.when("/", {
			templateUrl: "pages/home.html", 
			controller: "MainCtrl"
		})
		// ver todos os projetos
		.when("/projetos", {
			templateUrl: "pages/projeto/projeto.lista.html",
			controller: "ProjetoCtrl",
			resolve: {
				postPromise: ['Projeto', function(Projeto) {
					return Projeto.getAll();
				}]
			}
		})
		// ver um projeto
		.when("/projetos/:id", {
			templateUrl: "pages/projeto/projeto.view.html", 
			controller: "ProjetoCtrl"
		})		
		// ver tarefas por projeto
		.when("/projetos/:id/tarefas", {
			templateUrl: "pages/tarefa/tarefa.lista.html",
			controller: "TarefaCtrl"
		})
	
}]);