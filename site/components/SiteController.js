function SiteController($scope,$routeParams,librarian){

	$scope.style = "water-lotus";



		var section = $routeParams.section;
		var item = $routeParams.item;

		//first test our params
		if(section == null| section == "")
		{
			return "/content/default.html"; 
		}

		if(item == null | item == "")
		{
			return "/" + section + "/default.html";
		}

		var targetItem = librarian.getItem(section,item);

		if(targetItem == null ){

			var dummy = new Object();

			scope$.currentItem = dummy.prototype.path = "/content/default.html";

		}else
		{
			$scope.currentItem = targetItem;
		}

}



