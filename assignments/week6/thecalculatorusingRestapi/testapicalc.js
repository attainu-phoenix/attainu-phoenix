"use strict";
var express = require ("express");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false  }));

app.use(bodyParser.json());

app.post("/add", function(request,response) {
   
    var data = {
    num1: request.body.num1,
    num2: request.body.num2,
    result:parseInt(request.body.num1) + parseInt(request.body.num2)
    }
console.log(data)
response.json(data)
});

app.post("/sub", function(request,response) {
   
    var data = {
    num1: request.body.num1,
    num2: request.body.num2,
    result:parseInt(request.body.num1) - parseInt(request.body.num2)
    }
console.log(data)
response.json(data)
});

app.post("/mul", function(request,response) {
   
    var data = {
    num1: request.body.num1,
    num2: request.body.num2,
    result:parseInt(request.body.num1) * parseInt(request.body.num2)
    }
console.log(data)
response.json(data)
});

app.post("/div", function(request,response) {
   
    var data = {
    num1: request.body.num1,
    num2: request.body.num2,
    result:parseInt(request.body.num1)/parseInt(request.body.num2)
    }
console.log(data)
response.json(data)
});

app.listen(3000);