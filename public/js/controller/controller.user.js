angular.module('app').controller('signupCtrl', ['$scope','Users','Categories','post','comment','getAllPosts', 'getPostById',
  'getComments', 'loginUser','Authentication','UpdateUser',  '$location',
 	function($scope, Users, Categories, post, comment , getAllPosts ,getPostById, getComments , loginUser, Authentication, UpdateUser, $location) {
    $scope.isLoggedin = false;
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
       		} else {
            alert('Registration successful');
       			$location.path('/login');
       		}
          });
      };

       $scope.updateProfile = function(){
        var updateuser = new UpdateUser ({
          lastName: $scope.lastName,
          firstName: $scope.firstName,
          username: $scope.username,
          password: $scope.password,
          email: $scope.email,
          phoneNumber: $scope.phoneNumber
        });

        updateuser.$update(function(data) {
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
          } else {
            console.log(data);
            alert('Update successful');
            $location.path('/home');
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

    $scope.addCategory = function(){
        var categories = new Categories ({
        categoryName: $scope.addcategory

      });

        categories.$save(function(data){
            window.location.reload();

        });
    };



    // $scope.commentBtn = function(query){
    // getComments.getComment(query, function(data){
    //   console.log(data);

    //   });
    // };

    $scope.showPost = function(query){

      post.getPosts(query, function(data){
        $scope.post = data;
      });
    };

    $scope.posts = {};

    $scope.commentBtn = function(query) {
      console.log('query: ', query);
      comment.postComment(query, $scope.posts, function(data){
      // window.location.reload();
      // $scope.addcomm = data.comments;
      
      console.log(data);
      $scope.addcomm = data.comments;
      console.log("comment added");

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


    $scope.authentication = Authentication;

    $scope.login = function() {
      var loginuser = new loginUser({
        username: $scope.username,
        password: $scope.password
      });

      loginuser.$save(function(data){
        $scope.authentication.user = data;
        if(data){
          console.log("hello:");
          $scope.isLoggedin = true;
          console.log($scope.isLoggedin );

        }

        else {
          $scope.isLoggedin = false;
          console.log($scope.isLoggedin );

        }
        alert("You have successfully logged in");
        $location.path('/home');

      }, function(err){
        alert(err.data.message);
        $scope.username = '';
        $scope.password = '';

      });

    };

}]);




$(document).ready(function(){
  $(".dropdown-button").dropdown();
});




