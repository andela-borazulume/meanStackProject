angular.module('app').
factory('loginUser',['$resource', function($resource){
	return $resource('/api/login');
}])
.factory('Authentication', [
	function () {
	
	var _this = this;

		_this.data = {
			user: window.user
		};

	return _this.data;
	
}]);