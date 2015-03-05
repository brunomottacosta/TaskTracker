app.factory('Projeto', function($resource) {
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
})