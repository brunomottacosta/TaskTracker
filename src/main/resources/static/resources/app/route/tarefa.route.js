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
			},
			resolve: {				
				tarefas: function(TarefaService) {
					return TarefaService.list().then(function(res) {
						return res.data;
					});
				},
				projetos: function(ProjetoService) {
					return ProjetoService.list().then(function(res) {
						return res.data;
					});
				}				
			}
		})
		
		// ver uma tarefa
		.state('tarefa', {
			url: '/tarefas/{id}',
			templateUrl: 'resources/pages/tarefa/tarefa.view.html', 
			controller: 'TarefaViewCtrl',
			data: {
				security: true
			},
			resolve: {
				tarefa: function(TarefaService, $stateParams) {
					return TarefaService.get($stateParams.id).then(function(res) {
						return res.data;
					});
				},
				status: function(UtilsService) {
					return UtilsService.listarStatus().then(function(res) {
						return res.data;
					});
				}
			}
		})	
	
}]);