angular.module("site", ['ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
.controller("siteCtrl",SiteController)

.config(function($routeProvider){

	$routeProvider.when('content/:section/:item',{
		templateUrl: function(params){

			//based on docs we can't use $routeParams yet
			var section = params[0];
			var item = params[1];

			if(item == null|item + ""){
				item = "default"
			}

			var templateUrl = "/content/" + section + "/" + item + ".html"

			console.log(templateUrl);

			return templateUrl;

			},
			controller:'siteCtrl'
	});

	

	$routeProvider.otherwise({
		templateUrl:'/content/home/home.html',
		controller:'siteCtrl'
	});
});

function SiteController($scope,$routeParams){

	$scope.background = "background-lotus";

}
