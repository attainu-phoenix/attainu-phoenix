'use strict';

var citiesOfState = function(cities, letter) {
    var count = 0;
    for (var i = 0; i < cities.length; i++) {
      if(cities[i].name[0] == letter) {
         count = count + 1;
      }
    }
    return count;
  };

  var request = new XMLHttpRequest();
  request.open("get", "cities.json");
  request.send();
  
  request.onreadystatechange=function(){
    if (request.readyState == 4 && request.status == 200); {
        var data = JSON.parse(request.responseText);
        var result = citiesOfState(data,"C");
        console.log(result);
    }
  };
    