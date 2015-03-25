var app = angular.module('app', ['ngRoute','ngResource']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        controller: 'signupCtrl'
    }).
    when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
    }).
    when('/signFirst', {
        templateUrl: 'views/signFirst.html',
        controller: 'signupCtrl'
    }).
    when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupCtrl'
    }).
    when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: ''
    }).
    otherwise({
        redirectTo: '/home'
    });


}]);
