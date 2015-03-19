/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider',
            
            function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
	
		// ver todas as tarefas
		.state('lista-tarefas', {
			url: '/tarefas',
			templateUrl: 'pages/tarefa/tarefa.lista.html',
			controller: 'TarefaCtrl'
		})
		
		// ver uma tarefa
		.state('tarefa', {
			url: '/tarefas/{id}',
			templateUrl: 'pages/tarefa/tarefa.view.html', 
			controller: 'TarefaCtrl'			
		})	
	
}]);