'use strict';

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

var UserDB = [
    {name: "ansal", password: "ansal123"},
    {name: "vaibhav", password: "vaibhav123"},
    {name: "divyam", password: "divyam123"},

];

app.get("/", function(request, response) {

    var data = {};

    if(request.query.loginFailed) {
        data.loginFailed = true;
    }
    response.render("index.hbs", data);
});

app.post("/login", function(request, response){

    var username = request.body.username;
    var password = request.body.password;

    for(var i = 0; i < UserDB.length; i = i + 1) {
        if(UserDB[i].name == username && UserDB[i].password == password) {
            return response.send("Hello " + username + " You Logged in");
        }
    }
    response.redirect("/?loginFailed=true");

})

app.listen(3000);