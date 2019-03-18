'use strict';

var updateContent = function(cities, state) {
       for (var i = 0; i < cities.length; i++){
      if(cities[i].state== state) {
          console.log(cities[i].state, cities[i].name);
      }
  }
};

var request = new XMLHttpRequest();
request.open("get","cities.json");
request.send();

  request.onreadystatechange = function(cities) {
        if (request.readyState == 4 && request.status == 200 ) {
            var data = JSON.parse(request.responseText);

            updateContent(data, "Maharashtra");
            updateContent(data, "Gujarat");
        }
    }
