'use strict';

var citiesBeginWith = function(cities, char) {
    for(var counter = 0; counter < cities.length; counter = counter + 1) {
        if(cities[counter].name[0] == char) {
            console.log(cities[counter].name);
        }
    }
}

var loadContent = function() {
    var request=new XMLHttpRequest();
    request.open("get", "cities.json");
    request.send();
    request.onreadystatechange=function(){
        if(request.readyState == 4 && request.status == 200){
            var cities=JSON.parse(request.responseText);
            citiesBeginWith(cities, 'A');    
        }
    }
}

loadContent();