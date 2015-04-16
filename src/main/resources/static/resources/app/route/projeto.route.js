/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
	
		// ver todos os projetos
		.state('lista-projetos', {
			url: '/projetos',
			templateUrl: 'resources/pages/projeto/projeto.lista.html',
			controller: 'ProjetoCtrl',
			data: {
				security: true
			},
			resolve: {
				projetos: function(ProjetoService) {
					return ProjetoService.list().then(function(res) {
						return res.data;
					});
				}
			}
		})
		
		// ver um projeto
		.state('projeto', {
			url: '/projetos/{id}',
			templateUrl: 'resources/pages/projeto/projeto.view.html', 
			controller: 'ProjetoViewCtrl',
			data: {
				security: true
			},
			resolve: {
				projeto: function(ProjetoService, $stateParams) {
					return ProjetoService.get($stateParams.id).then(function(res) {
						return res.data;
					});
				}
			}
		});
	
}]);