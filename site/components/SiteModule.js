angular.module("site", ['ngRoute','ngResource'])
.controller("siteCtrl",SiteController)
.controller("articleCtrl", ArticleController)
.factory("librarian", LibrarianService)
.directive("library-item", LibraryItem)

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