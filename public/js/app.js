var app = angular.module('app', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
    }).
    when('/geek', {
        templateUrl: 'views/geek.html',
        controller: ''
    }).
    when('/Nerd', {
        templateUrl: 'views/Nerd.html',
        controller: ''
    }).
    otherwise({
        redirectTo: '/home'
    });


}]);
