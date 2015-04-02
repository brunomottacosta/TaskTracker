/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider',
            
            function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
	
		// ver todas as tarefas
		.state('lista-tarefas', {
			url: '/tarefas',
			templateUrl: 'resources/pages/tarefa/tarefa.lista.html',
			controller: 'TarefaCtrl',
			data: {
				security: true
			}
		})
		
		// ver uma tarefa
		.state('tarefa', {
			url: '/tarefas/{id}',
			templateUrl: 'resources/pages/tarefa/tarefa.view.html', 
			controller: 'TarefaCtrl',
			data: {
				security: true
			}
		})	
	
}]);