angular.module('app').
controller('loginCtrl', ['$scope', 'loginUser','$location',  function($scope, loginUser, $location){
	$scope.login = function(){
		var loginuser = new loginUser({
			username: $scope.username,
			password: $scope.password
		});

		loginuser.$save(function(data){
			$location.path('/home');
			console.log(data);

		}, function(err){
			console.log(err);

		});

	};

}]);