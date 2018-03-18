angular
.module('MaryamApp', [])
.config(['$locationProvider', $provider => $provider.html5Mode({enabled: true, requireBase: false})])
.controller('MaryamCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
	$scope.hello = "test";

	$http.get('food.json').then((response) => {
		console.log(data);
	});
}]);