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
					imgSrc: "https://goo.gl/images/eZLMS5"
				},
				{
					productId: "2",
					title: "עוד אוכל",
					imgSrc: "https://goo.gl/images/QFdxmt"
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
}])