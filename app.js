angular
.module('MaryamApp', [])
.controller('MaryamCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
  $scope.homepage = true;
  $scope.data = {};

  $scope.setPage = (category) => {
    $location.path('/' + category.replace(/\s/g, '-'));
    $scope.category = category;
    $scope.homepage = false;
  }

  $http.get('food.json').then((response) => {
    $scope.data = response.data;
  });

  $scope.$watch(() => $location.path(), (page) => {
    page = page.replace('/', '');
    $scope.homepage = (page === '');
    $scope.category = page.replace(/-/g, ' ');
  });
}]);