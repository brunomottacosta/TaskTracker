/**
 * 
 */

app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', '$locationProvider', 
            
            function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	
	$stateProvider
	
		.state('admin', {
			url: '/admin',
			templateUrl: 'resources/pages/admin/admin.panel.html', 
			controller: 'AdminCtrl',
			data: {
				security: false
			},
			resolve: {
				users: function('AdminService') {
					return AdminService.listUsers().then(function(res) {
						return res.data;
					});
				}
			}
		});
		
		
}]);	