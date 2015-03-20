angular.module('app').
factory('testFactory', ['$http', function($http) {
	var url = 'http://localhost:3000/api';
    return {
        getResponse: function(callback) {
            return $http.get(url+'/details')
                .success(callback)
                .error(function(error) {

                });


        }

    };

}]);
