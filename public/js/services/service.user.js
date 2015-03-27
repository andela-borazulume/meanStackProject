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
      console.log("/api/categories/"+query+"/posts");
      return $http.get("/api/categories/"+query+"/posts")
        .success(callback);
    }
  };
}]);

angular.module('app').factory('comment', ['$http', function($http) {
	return {
		postComment: function(query, data, callback){
			return $http.post("/api/posts/"+query+"/comments", data)
				.success(callback);

		}
	};
}]);

angular.module('app').factory('getAllPosts', ['$resource', 
	function($resource){
		return $resource('/api/posts');

}]);

 angular.module('app').factory('getPostById', ['$http', function($http) {
  return {
    getpost: function(query, callback) {
      return $http.get("/api/users/"+query+"/posts")
        .success(callback);
    }
  };
}]);

angular.module('app').factory('getComments', ['$http', function($http) {
  return {
    getComment: function(query, callback) {
      return $http.get("/api/posts/"+query+"/comments")
        .success(callback);
    }
  };
}]);

angular.module('app').factory('UpdateUser', function($resource) {
  return $resource('/api/users/:user_id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});

