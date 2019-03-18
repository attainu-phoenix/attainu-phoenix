'use strict';

var updateContent = function(data) {
    for(var counter = 0; counter < data.length; counter = counter + 1) {
        if(data[counter].state == "Maharashtra" || data[counter].state == "Gujarat") {
            console.log(data[counter].name);
        } else if(counter < data.length) {
            continue;
        }
    }
    return false;
}

var loadContent = function() {
    var request = new XMLHttpRequest();

    request.open("get", "cities.json");

    request.send();

    request.onreadystatechange = function() {
        if(request.readystate == 4 && request.status == 200) {
            var jsonData = JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    }
}