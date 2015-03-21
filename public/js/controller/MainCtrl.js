angular.module('app')
  .controller('mainCtrl', ['$scope', 'testFactory', function($scope, testFactory) {
  	testFactory.getUser(function(data){
  		console.log(data);
  		$scope.show = data;
  	});


  }]);
