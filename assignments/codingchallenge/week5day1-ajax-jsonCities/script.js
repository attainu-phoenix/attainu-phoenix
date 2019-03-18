
var citiesOfState = function(cities, state) {
  for (var i = 0; i < cities.length; i++) {
    if(cities[i].state == state) {
      console.log(cities[i].state, cities[i].name);
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
            console.log("Cities of Maharashtra");
            citiesOfState (data, "Maharashtra");

            console.log("Cities of Gujarat");
            citiesOfState (data, "Gujarat");
            
          }
        };
         

        
