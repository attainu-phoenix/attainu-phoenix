'use strict';

var updateContent = function(data) {
    for (let i = 0; i < data.length; i++);
    if(data[i].state == "Maharashtra" && data[i].state == "Gujarat")
    console.log(data[i].name, data[i].name);
}

var loadData = function() {
    var request = new XMLHttpRequest();

    request.open("get","cities.json");

    request.send();

    request.onreadystatechange = function(cities) {
        if (request.readyState = 4 && request.status == 200 ) {
            var jsonData = JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    }
}