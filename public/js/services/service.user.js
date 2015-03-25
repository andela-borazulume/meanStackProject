angular.module('app').factory('Users', ['$resource',  
		function($resource) {
			return $resource('/api/users');
	}]);

angular.module('app').factory('Categories', ['$resource', 
	function($resource){
		return $resource('/api/categories');

}]);

 angular.module('app').factory('post', ['$http', function($http) {
  return {
    getPosts: function(query, callback) {
      console.log(query);
      return $http.get("/api/categories/"+query+"/posts")
        .success(callback);
    }
  };
}]);

angular.module('app').factory('comment', ['$http', function($http){
	return {
		postComment: function(query, data, callback){
			console.log(data);
			return $http.post("/api/posts/"+query+"/comments", data).
			success(callback);

		}
	};
}]);
