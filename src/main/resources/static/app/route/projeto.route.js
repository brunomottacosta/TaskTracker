app.config(['$routeProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider
	
		// ver todos os projetos
		.when("/projetos", {
			templateUrl: "pages/projeto/projeto.lista.html",
			controller: "ProjetoCtrl"
		})
		
		// ver um projeto
		.when("/projetos/:id", {
			templateUrl: "pages/projeto/projeto.view.html", 
			controller: "ProjetoCtrl"			
		})	
	
}]);