angular.module('app')
  .controller('mainCtrl', ['$scope', 'testFactory', function($scope, testFactory) {
  	testFactory.getResponse(function(data){
  		console.log(data);
  		$scope.show = data;
  	});


  }]);
