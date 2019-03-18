'use strict';

var updateContent = function (data) {
    for (let i = 0; i < data.length; i++) {
        if (data.state[i] != Maharashtra || data.state[i] != Gujarat) {
            continue;
        } else {
            console.log(data.name[i])
        }

    }
}


var loadContent = function () {

    // Create an ajax object
    var request = new XMLHttpRequest();

    // Open a connect to a URL
    request.open("get", "cities.json");

    // Send the request to the server resource.
    request.send();

    // Receive the data and do some thing with it.
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            var jsonData = JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    };
};