myApp.config(function ($routeProvider) {

	$.mobile.ajaxEnabled = false;
	$.mobile.linkBindingEnabled = false;
	$.mobile.hashListeningEnabled = false;
	$.mobile.pushStateEnabled = false;
	$.mobile.changePage.defaults.changeHash = false;

	$routeProvider.when("/",
		{
			templateUrl: "views/homePage.html",
			controller: "homeCtrl"
		})
		.when("/foodRate",
		{
			templateUrl: "views/FoodRate.html",
			controller: "foodCtrl"
		})
		.when("/menu",
		{
			templateUrl: "views/Menu.html",
			controller: "menuCtrl"
		}).otherwise({
			templateUrl: "views/homePage.html",
			controller: "homeCtrl"
		})
})