var myApp = angular.module("myApp", ['ngRoute']);

myApp.controller("homeCtrl", function ($scope, $location) {
	$scope.startRate = function () {
		$location.url('/foodRate');
	}
})