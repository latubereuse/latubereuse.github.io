angular
.module('MaryamApp', ['ngAnimate'])
.controller('MaryamCtrl', ['$scope', '$http', '$location',
function($scope, $http, $location) {
  $scope.location = $location;
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
    window.scrollTo({top: 0, behavior: "smooth"});
  });
}]);