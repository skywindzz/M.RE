var app = angular.module('MRE');

app.service('ReservationService', function($q, $http, $window) {
	
	this.getDayClass = function(date, mode) {
		if (mode === 'day') {
		  var dayToCheck = new Date(date).setHours(0,0,0,0);

		  for (var i=0;i<$scope.events.length;i++){
		    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		    if (dayToCheck === currentDay) {
		      return $scope.events[i].status;
		    }
		  }
		}
		return '';
	};

	this.submitRes = function(obj) {
		var dfd = $q.defer();
		console.log('obj form reservationService: ', obj);
		return $http({
			method: 'POST',
			url: '/api/reservation',
			data: obj
		}).then(function(response) {
<<<<<<< HEAD
=======
			console.log('response from reservationService: ', response);
>>>>>>> 1944bcff7bace34f4583b3a5973ba4d2932f312c
			$window.location.href = '/public';
		})
	};
})