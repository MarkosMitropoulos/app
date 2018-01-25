app.controller('regCtrl', function($http, $scope, $location, $timeout) {
	$scope.regUser = function(regData) {
		$http
			.post('/api/users', regData)
			.then((res) => {
				console.log('success');
				// Redirect to home page
				$timeout(function() {
					$location.path('/');
				}, 1000);
			})
			.catch((res) => console.warn(res.data));
	};
});
