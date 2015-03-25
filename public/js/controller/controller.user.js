angular.module('app').controller('signupCtrl', ['$scope','Users','Categories','post','comment', '$location',
 	function($scope, Users, Categories, post, comment, $location) {
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
       			console.log(data.signupMessage);
       		} else if (data.message) {
       			console.log("Please fill in the whole fields");
       		} else {
       			$location.path('/login');
       		}
          });
      };

  	$scope.getUsers = function(){
  		var users = Users.query(function() {
  			for(var i=0; i < users.length; i++){
  				console.log(users[i].lastName);

  			}
    		console.log(users);
 	    });

  	};

    var categories = Categories.query(function(){
      $scope.category = categories;
    });


    $scope.showPost = function(query){

      post.getPosts(query, function(data){
        $scope.post = data;
        console.log(data);
        
      });

    };

    $scope.post = {};
    $scope.comments = function(query){
      console.log(query);
      comment.postComment(query, $scope.post, function(data){
      console.log(data);

      });
    };

}]);

$(document).ready(function(){
  $(".dropdown-button").dropdown();
});




