myApp.controller("foodCtrl", ['$scope','proxy', function ($scope, proxy) {

	var currentProductIndex = 0;

	var menu = proxy.getTodaysMenu();

	$scope.display = {
		options: { doShow: true, value: menu},
		tinder: { doShow: false,  value: null},
		explain: { doShow: false, value: null }
	}

	$scope.congradsLink = "http://img245.imageshack.us/img245/1771/90388823vi4.gif";


	$("#foodImg").on("swiperight", function () {
		swipeRight();
	});

	$("#foodImg").on("swipeleft", function () {
		swipeLeft();
	});

	function swipeRight() {
		proxy.likeFood();
		$scope.display.tinder.value = angular.copy($scope.display.options.value.mainProducts[1-currentProductIndex]);
		$scope.$apply();
	}

	function swipeLeft() {
		proxy.dislikeFood();
		$scope.display.explain.doShow = true;
		$scope.display.explain = angular.copy($scope.display.explain);
		$scope.display.tinder.doShow = false;
		$scope.$apply();
		
	}

	$scope.showTinder = function (obj, index) {
		$scope.display.options.doShow = false;
		$scope.display.tinder.doShow = true;
		currentProductIndex = index;
		$scope.display.tinder.value = angular.copy(obj);
	}

	$scope.optionClicked = function () {
		$scope.showCongradulations = true;
		$scope.display.explain.doShow = false;


	}
}])