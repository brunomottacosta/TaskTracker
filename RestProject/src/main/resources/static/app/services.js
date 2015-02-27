( function(angular) {
	var ProjetoFactory = function($resource) {
		return $resource('/projetos/:id', {
			id : '@id'
		}, 
		{
			update : {
				method : "PUT"
			},
			remove : {
				method : "DELETE"
			}
		});
	};

	ProjetoFactory.$inject = [ '$resource' ];
	angular.module("Application.services").factory("Projeto", ProjetoFactory);
} (angular));