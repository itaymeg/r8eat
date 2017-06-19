myApp.config(function ($routeProvider) {
	$routeProvider.when("/",
		{
			templateUrl: "homePage.html",
			controller: "homeCtrl"
		}).when("/foodRate",
		{
			templateUrl: "FoodRate.html",
			controller: "foodCtrl"
		}).when("/menu",
		{
			templateUrl: "Menu.html",
			controller: "menuCtrl"
		}).otherwise({
			templateUrl: "homePage.html",
			controller: "homeCtrl"
		})
})