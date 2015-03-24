angular.module('app').
factory('loginUser',['$resource', function($resource){
	return $resource('/api/login');

}]);