function SiteController($scope,$routeParams,librarian){

		var section = $routeParams.section;
		var item = $routeParams.item;

		//first test our params
		if(section == undefined| section == "")
		{
			return "/content/default.html"; 
		}

		if(item == null | item == "")
		{
			return "/" + section + "/default.html";
		}

		$scope.targetItem = librarian.getItem(section,item);

		window.alert($scope.targetItem);
		
}



