"use strict";

let counter = 0;
let citiesStarts = function (data, letter) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name[0] == letter) {
            counter++;
        }
    }
    console.log(counter);
};

let loadContent = function () {
    // Create an ajax object
    let request = new XMLHttpRequest();

    // Open a connect to a URL
    request.open("get", "cities.json");

    // Send the request to the server resource.
    request.send();

    // Receive the data and do some thing with it.
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            let jsonData = JSON.parse(request.responseText);
            citiesStarts(jsonData, "A");
        }
    };
};
loadContent();