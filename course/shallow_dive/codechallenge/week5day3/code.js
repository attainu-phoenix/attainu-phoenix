'use strict';
var count = 0;
var search = function(cities, ch) {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].name[0] == ch) {
           count++;
        }
    }
    console.log(count);
};

var loadAjax = function() {
    var ch = "A";
    var request = new XMLHttpRequest();
    request.open("get", "cities.json");
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);
            search(data, ch);


        }
    }
};

loadAjax();