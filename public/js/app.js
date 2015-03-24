var app = angular.module('app', ['ngRoute','ngResource']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        controller: ''
    }).
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    }).
    when('/signFirst', {
        templateUrl: 'views/signFirst.html',
        controller: ''
    }).
    when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
    }).
    when('/writepost', {
        templateUrl: 'views/writepost.html',
        controller: ''
    }).
    otherwise({
        redirectTo: '/home'
    });


}]);
