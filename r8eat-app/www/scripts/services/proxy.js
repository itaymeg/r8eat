myApp.service("proxy", ['$http', function ($http) {
	var SERVER_URL = "";


	this.getTodaysMenu = function () {
		//$http.get(SERVER_URL + this.getCurrentDate()).then(function (res) {

		//})
		var stub = {
			mainProducts: [
				{
					productId: "1",
					title: "אוכל אוכל",
					imgSrc: "http://weknowyourdreams.com/images/food/food-08.jpg"
				},
				{
					productId: "2",
					title: "עוד אוכל",
					imgSrc: "http://www.ubmi.net/wp-content/uploads/2016/10/temp2.jpg"
				}
			]
		}
		return stub;
	}

	this.getProduct = function () {

	}

	this.getCurrentDate = function () {
		retrun(new Date().getYear() + new Date().getMonth() + new Date().getDate());
	}

	this.likeFood = function () {

	}
}])