'use strict';

angular.module('angularGruntSeed')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .otherwise({ redirectTo: '/' });
}]);