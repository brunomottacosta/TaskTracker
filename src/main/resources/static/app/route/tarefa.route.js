/**
 * 
 */

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
	
		// ver todas as tarefas
		.when("/tarefas", {
			templateUrl: "pages/tarefa/tarefa.lista.html",
			controller: "TarefaCtrl"
		})
		
		// ver uma tarefa
		.when("/tarefas/:id", {
			templateUrl: "pages/tarefa/tarefa.view.html", 
			controller: "TarefaCtrl"			
		})	
	
}]);