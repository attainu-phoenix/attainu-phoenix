'use strict';

var express = require("express");

var bodyParser = require('body-parser')

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

var PERSONS = [
    {name: "Roger Federer", phone: 536596},
    {name: "Rafel Nadal", phone: 69534}

];

app.get("/", function(request, response) {

    response.render("hello.hbs");
});

app.get("/persons", function(request, response) {

    response.json(PERSONS);

});

app.post("/persons", function(request, response) {

    var newDataFromBrowser = {
        name: request.body.name,
        phone: request.body.phone

    };

    PERSONS.push(newDataFromBrowser);
    response.json(newDataFromBrowser);

});

app.listen(3000);