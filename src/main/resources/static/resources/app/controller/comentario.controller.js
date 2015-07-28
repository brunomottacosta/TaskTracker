'use strict';

/* ###########################
 * COMENTARIO MODAL CONTROLLER
 * ###########################
 * */

app.controller('ComentarioFnCtrl', function($scope, $modalInstance, comentario) {

    $scope.comentario = angular.copy(comentario);

    $scope.ok = function() {
        $modalInstance.close($scope.comentario);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

});