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
			controller: "ProjetoCtrl"
		})
		// ver um projeto
		.when("/projetos/:id", {
			templateUrl: "pages/projeto/projeto.view.html", 
			controller: "ProjetoCtrl"				
		})
	
}]);