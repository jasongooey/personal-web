function LibraryItem($compile){

	var binder = function(scope, element, attrs) {
		

		element.html("<ng-include src='currentItem.url'></ng-include>").show();

		$compile(element.contents())(scope);
	}

	return {
		restrict: "E",
		link: binder
		
	};

}