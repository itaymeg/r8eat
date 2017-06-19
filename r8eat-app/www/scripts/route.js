myApp.config(function ($routeProvider) {
	$routeProvider.when("/",
		{
			templateUrl: "views/homePage.html",
			controller: "homeCtrl"
		}).when("/foodRate",
		{
			templateUrl: "views/FoodRate.html",
			controller: "foodCtrl"
		}).when("/menu",
		{
			templateUrl: "views/Menu.html",
			controller: "menuCtrl"
		}).otherwise({
			templateUrl: "views/homePage.html",
			controller: "homeCtrl"
		})
})