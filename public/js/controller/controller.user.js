angular.module('app').controller('signupCtrl', ['$scope','Users','$location',
 	function($scope, Users, $location) {

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
  			for(var i=0; i < 8; i++){
  				console.log(users[i].lastName);

  			}
    		console.log(users);
 	  });

  	};

}]);




