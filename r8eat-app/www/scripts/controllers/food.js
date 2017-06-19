myApp.controller("foodCtrl", ['$scope','proxy', function ($scope, proxy) {
	console.log("adf");
	console.log(proxy.getTodaysMenu());
}])