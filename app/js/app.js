'use strict';

// Declare app level module which depends on filters, and services
angular.module('goseed', ['ui', 'ui.bootstrap','goseed.filters', 'goseed.services', 'goseed.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'app/partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'app/partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);