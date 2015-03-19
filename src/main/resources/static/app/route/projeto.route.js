/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider', 
            
            function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
	
		// ver todos os projetos
		.state('lista-projetos', {
			url: '/projetos',
			templateUrl: 'pages/projeto/projeto.lista.html',
			controller: 'ProjetoCtrl'
		})
		
		// ver um projeto
		.state('projeto', {
			url: '/projetos/{id}',
			templateUrl: 'pages/projeto/projeto.view.html', 
			controller: 'ProjetoCtrl'			
		});
	
}]);