angular.module("site", ['ngRoute'])

.controller("siteCtrl",SiteController)
.factory("librarian", LibrarianService)

.config(function ($routeProvider){
		$routeProvider.when('/content/:section/:item/',{
			template : '<div ng-include="{{currentItem.path}}"></div>',
			controller:'siteCtrl'

		});

		$routeProvider.otherwise({
			templateUrl:'/content/home/home.html',
			controller:'siteCtrl'
		});
	});