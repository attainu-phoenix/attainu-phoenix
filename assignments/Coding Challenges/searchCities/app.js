"use strict";

var citiesBeginWith = (data, letter) => {
  var count = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].name[0] == letter) {
      count++;
    }
  }
  console.log(count);
};

var searchCities = letter => {
  var first = letter;
  var request = new XMLHttpRequest();

  request.open("get", "cities.json");

  request.send();

  request.onreadystatechange = function(data) {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      citiesBeginWith(jsonData, first);
    }
  };
};

searchCities("Z");
