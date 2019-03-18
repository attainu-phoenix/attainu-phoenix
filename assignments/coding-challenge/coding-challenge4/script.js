'use strict';


var printCities = function(cities){
    for(var i=0;i<cities.length;i++){
        
        if(cities[i].state == 'Maharashtra' || cities[i].state == 'Gujarat'){
            console.log(cities[i].name)    
        }
    }
}

var loadContent = function() {
    
    
    var request = new XMLHttpRequest();
    request.open("get", "cities.json");
    request.send();
    request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            var cities = JSON.parse(request.responseText)
           
            printCities(cities);

        }
    }; 
};

var button = document.getElementById("loadButton");
button.addEventListener("click", loadContent);