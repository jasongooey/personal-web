public function ($http){
	
	var index  = null;
	//poor mans synch
	
	var state = 0;

	$http.jsonp('/index.json').
  then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
	index = angular.fromJson(response.data);
	
	

  }, function(response) {

    // called asynchronously if an error occurs
    // or server returns response with an error status.
    
  });

  getUrlForResource: function(section,item){

  		for(int x; x<index.length)
  		{
  			
  		}
  	
  }



 

 
 

}