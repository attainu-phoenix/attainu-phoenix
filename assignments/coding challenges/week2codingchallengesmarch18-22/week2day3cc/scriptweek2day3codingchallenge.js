'use strict';

var citiesBeginWith = function(cities, char) {
    var count = 0;
    for(var counter = 0; counter < cities.length; counter = counter + 1) {
        if(cities[counter].name[0] == char) {
            count = count + 1;
        }
    }
    console.log(count);
}
var loadContent = function() {
    var request=new XMLHttpRequest();
    request.open("get", "citiesweek2day1codingchallenge.json");
    request.send();
    request.onreadystatechange=function(){
        if(request.readyState == 4 && request.status == 200){
            var cities=JSON.parse(request.responseText);
            citiesBeginWith(cities, 'A');    
        }
    }
}
loadContent();