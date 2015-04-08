'use strict';

angular.module('app').
controller('loginCtrl', ['$scope', 'loginUser','$location', 'Authentication',
	function($scope, loginUser, $location, Authentication){
  
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
			alert('You have successfully logged in');
			$location.path('/home');

		}, function(err){
			alert(err.data.message);
			$scope.username = '';
			$scope.password = '';

		});

	};

}]);