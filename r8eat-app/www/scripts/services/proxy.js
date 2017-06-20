myApp.service("proxy", ['$http', function ($http) {
	var SERVER_URL = "";


	this.getTodaysMenu = function () {
		//$http.get(SERVER_URL + this.getCurrentDate()).then(function (res) {

		//})
		var stub = {
			mainProducts: [
				{
					productId: "1",
					title: "עוף",
					imgSrc: "../images/Chicken.jpeg"
				},
				{
					productId: "2",
					title: "שניצל",
					imgSrc: "../images/Shnitzel.jpg"
				},
				{
					productId: "3",
					title: "המבורגר",
					imgSrc: "../images/Hamburger.jpg"
				}
			]
		}
		return stub;
	}

	this.getProduct = function () {

	}

	this.getCurrentDate = function () {
		retrun(new Date().getYear() + new Date().getMonth() + new Date().getDay());
	}

	this.likeFood = function () {

	}

	this.dislikeFood = function () {

	}
}])