"use strict";
var express = require("express");
var app = express();

app.get("/add/:num1/:num2", function(request,response) {
 
 var num1 = request.params.num1;
 var num2 = request.params.num2;
 var sum = parseInt(num1) + parseInt(num2);
 response.send("Sum of specified 2 numbers is " +sum )

});

app.get("/sub/:num1/:num2", function(request,response) {
 
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var difference = parseInt(num1) - parseInt(num2);
    response.send("Difference of specified 2 numbers is " +difference )

});

app.get("/mul/:num1/:num2", function(request,response) {
 
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var product = parseInt(num1) * parseInt(num2);
    response.send("Product of specified 2 numbers is " +product )

});

app.get("/quotient/:num1/:num2", function(request,response) {
 
    var num1 = request.params.num1;
    var num2 = request.params.num2;
    var quotient = parseInt(num1)/parseInt(num2);
    response.send("Quotient of specified 2 numbers is " +quotient )
    
});

app.listen(3000);