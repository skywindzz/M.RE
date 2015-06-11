var app = angular.module('MRE');

app.controller('BusinessLoginCtrl', function($scope, $log, $modalInstance, $location, businessService) {

	$scope.login = function() {
		console.log('$scope.user: ', $scope.User);
		businessService.login($scope.User).then(function(res) {
			console.log('Logged in');
			$location.path('/re');
		}).catch(function(err) {
			console.log('err from login: ', err);
		});;
	};


	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});