angular.module('app').
factory('testFactory', ['$http', function($http) {
	var url = 'http://localhost:3000/api';
    return {
        getUser: function(callback) {
            return $http.get(url+'/users')
                .success(callback)
                .error(function(error) {

                });


        }

    };

}]);
