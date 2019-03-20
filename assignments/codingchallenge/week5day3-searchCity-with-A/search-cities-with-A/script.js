'use strict';

var loadContent = function () {
  //create a new ajax object
  var request = new XMLHttpRequest();

  //Open a connect to a URL
  request.open("get", "cities.json");

  //Send request to the server resources.
  request.send();

  //receive the data 
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.responseText);
      console.log("Cities starting with C");
      citiesOfState(data, "C");


    }
  };

};   
       
var counter = 0;
var citiesOfState = function (cities, letter) {
  for (var i = 0; i < cities.length; i++) {
    if (cities[i].name[0] == letter) {
      //console.log(cities[i].name);
      counter = counter + 1;
    }

  }
  console.log(counter);
  return;
};

loadContent();          
  