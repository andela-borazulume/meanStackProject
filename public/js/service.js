angular.module('app').
factory('testFactory', ['$http', function($http) {
    return {
        getResponse: function(callback) {
            return $http.get('http://localhost:3000/api/details')
                .success(callback)
                .error(function(error) {

                });


        }

    };

}]);
