var myApp = angular.module("myApp", ['ngRoute', 'swipe']);

myApp.controller("homeCtrl", function ($scope, $location) {
	$scope.startRate = function () {
		$location.url('/foodRate');
	}
})