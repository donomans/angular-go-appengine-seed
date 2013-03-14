'use strict';

// Declare app level module which depends on filters, and services
angular.module('goseed', ['ui', 'ui.bootstrap','goseed.filters', 'goseed.services', 'goseed.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'app/partials/home.html'});
    $routeProvider.when('/view1', {templateUrl: 'app/partials/partial1.html'});
    $routeProvider.when('/view2', {templateUrl: 'app/partials/partial2.html'});
    $routeProvider.when('/aboutus', {templateUrl: 'app/partials/aboutus.html', controller: AboutUs});
    $routeProvider.when('/legal', {templateUrl: 'app/partials/legal.html', controller: Legal});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);