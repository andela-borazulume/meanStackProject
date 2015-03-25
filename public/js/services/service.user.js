angular.module('app').factory('Users', ['$resource',  
		function($resource) {
			return $resource('/api/users');
	}]);

angular.module('app').
