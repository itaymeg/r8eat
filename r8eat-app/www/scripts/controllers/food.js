myApp.controller("foodCtrl", ['$scope','proxy', function ($scope, proxy) {

	var currentProductIndex = 0;

	var menu = proxy.getTodaysMenu();

	$scope.display = {
		options: { doShow: true, value: menu},
		tinder: { doShow: false,  value: null},
		explain: { doShow: false, value: null }
	}



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
		$scope.showOptions = true;
		$scope.$apply();
		
	}

	$scope.showTinder = function (obj, index) {
		$scope.display.options.doShow = false;
		$scope.display.tinder.doShow = true;
		currentProductIndex = index;
		$scope.display.tinder.value = angular.copy(obj);
	}
}])