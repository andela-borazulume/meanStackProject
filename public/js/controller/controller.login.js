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
			alert("You have successfully logged in");
			$location.path('/home');

		}, function(err){
			alert(err.data.message);
			$scope.username = '';
			$scope.password = '';

		});

	};

}]);