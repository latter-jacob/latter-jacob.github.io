var myApp = angular.module('myApp', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

function appController($scope) {
  $scope.name = 'Robin Hood';
}
