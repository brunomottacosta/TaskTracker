(function(angular) {
  angular.module("Application.controllers", []);
  angular.module("Application.services", []);
  angular.module("Application", ["ngResource", "ui.bootstrap","Application.controllers", "Application.services"]);
}(angular));