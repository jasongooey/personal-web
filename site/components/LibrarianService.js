function LibrarianService($resource){

  var  index = null;

  var  indexRequest = $resource('index.json');
  indexRequest.get(function(data){
      index = data;
  });
  


  return{

     getItem: function(section,item,$scope){

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

