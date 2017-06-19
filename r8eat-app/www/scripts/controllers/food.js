myApp.controller("foodCtrl", ['$scope','proxy', function ($scope, proxy) {
	console.log("adf");
	console.log(proxy.getTodaysMenu());

	var menu = proxy.getTodaysMenu();
	$scope.currentImg = menu.mainProducts[0].imgSrc;

	$("#foodImg").on("swipe", function () {
		swipeRight();
	});

	function swipeRight() {
		proxy.likeFood();
		$scope.currentImg = menu.mainProducts[1].imgSrc;
		$scope.$apply();
	}
}])