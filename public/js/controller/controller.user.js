angular.module('app').controller('signupCtrl', ['$scope','Users','Categories','post','comment','getAllPosts', 'getPostById',
  'getComments', '$location',
 	function($scope, Users, Categories, post, comment , getAllPosts ,getPostById, getComments , $location) {
		 $scope.register = function(){
        var user = new Users ({
          lastName: $scope.lastName,
          firstName: $scope.firstName,
          username: $scope.username,
          password: $scope.password,
          email: $scope.email,
          phoneNumber: $scope.phoneNumber
        });

        user.$save(function(data) {
       		if (data.signupMessage) {
       			alert(data.signupMessage);
            $scope.lastName = '';
            $scope.firstName = '';
            $scope.username = '';
            $scope.password = '';
            $scope.email = '';
            $scope.phoneNumber = '';
       		} else if (data.message) {
       			alert("Please fill in the whole fields");
              $scope.lastName = '';
              $scope.firstName = '';
              $scope.username = '';
              $scope.password = '';
              $scope.email = '';
              $scope.phoneNumber = '';
       		} else {
              alert('Registration Successful');
       			$location.path('/login');
       		}
          });
      };

  	$scope.getUsers = function(){
  		var users = Users.query(function() {
        $scope.details = users;
    		console.log(users);
 	    });

  	};

    var categories = Categories.query(function(){
      $scope.category = categories;
    });

    $scope.commentBtn = function(query){
    getComments.getComment(query, function(data){
      console.log(data);

      });
    };


    $scope.showPost = function(query){

      post.getPosts(query, function(data){
        $scope.post = data;
      });
    };

    $scope.posts = {};

    $scope.comments = function(query) {
      console.log('query: ', query);
      comment.postComment(query, $scope.posts, function(data){
      // window.location.reload();
      });
    };

    $scope.getPost = function(){
      var getAll = getAllPosts.query(function(){
        $scope.getAllPosts = getAll;

      });
    };

    $scope.showPostById = function(query){

      getPostById.getpost(query, function(data){
        $scope.userPost = data;
        console.log(data);
        
      });
    };

}]);




$(document).ready(function(){
  $(".dropdown-button").dropdown();
});




