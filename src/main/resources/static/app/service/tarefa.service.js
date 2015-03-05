app.factory('Tarefa', function($resource) {
	
	
	return $resource('/tarefas/:id', {
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
});