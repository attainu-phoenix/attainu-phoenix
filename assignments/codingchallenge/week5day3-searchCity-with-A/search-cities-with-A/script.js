'use strict';

var citiesOfState = function(cities, state) {
    for (var i = 0; i < cities.length; i++) {
      if(cities[i].name[0] == "A") {
        console.log(cities[i].name);
      }
    }
  };
    
    
    //create a new ajax object
      var request = new XMLHttpRequest();
  
    //Open a connect to a URL
      request.open("get", "cities.json");
  
      //Send request to the server resources.
      request.send();
  
      //receive the data 
      request.onreadystatechange = function() {
          if(request.readyState == 4 && request.status == 200) {
              var data = JSON.parse(request.responseText);
              console.log("Cities starting with A");
              citiesOfState (data, "A");
                
              
            }
          };
           
  
          
  