function LibrarianService($http){

  var  index = angular.fromJson(indexData);

  return{

     getItem: function(section,item,$scope){


    //todo: Write asynch get here.  Only want it one tieme.
     for(x = 0; x < index.length; x++)
      {
        if(index[x].section == section)
        {
          for(y = 0; y < currSection.items.length; y++)
          {
            if(currSection.items[y].name == item)
            {
              $scope.currentItme = currSection.item[y];
            }
          }
        }
      }

    }
  }
}

