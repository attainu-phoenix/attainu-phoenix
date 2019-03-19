"use strict";

alert("inside js");

var updateC = function(data) {
    for(var i = 0; i<data.length;i++) {
        if(data[i].state == "Maharashtra" || data[i].state == "Gujarat") {

            console.log(data[i].state, data[i].name); 
        }
    }  
};



var loadC = function() {

    // Create an ajax object
    var request = new XMLHttpRequest();

    // Open a connect to the URL
    request.open("get","citiesweek2day1codingchallenge.json");

    // Send the request to the server resource.
    request.send();

    // Receive the data 
    request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            var jsonData =  JSON.parse(request.responseText)
            updateC(jsonData);
            
        }
    }    
};
loadC();