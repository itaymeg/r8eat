myApp.controller("foodCtrl", ['$scope','proxy', function ($scope, proxy) {
	console.log("adf");
	console.log(proxy.getTodaysMenu());


	var menu = proxy.getTodaysMenu();

	$scope.display = {
		options: { doShow: true, value: menu},
		tinder: { doShow: false,  value: null},
		explain: { doShow: false, value: null }
	}



	$scope.showOptions = false; 

	$scope.currentImg = menu.mainProducts[0].imgSrc;
	$scope.currentTitle = menu.mainProducts[0].title;

	$("#foodImg").on("swiperight", function () {
		swipeRight();
	});

	$("#foodImg").on("swipeleft", function () {
		swipeLeft();
	});

	function swipeRight() {
		proxy.likeFood();
		$scope.currentImg = menu.mainProducts[1].imgSrc;
		$scope.currentTitle = menu.mainProducts[1].title;
		$scope.$apply();
	}

	function swipeLeft() {
		proxy.dislikeFood();
		$scope.showOptions = true;
		$scope.$apply();
		
	}
}])