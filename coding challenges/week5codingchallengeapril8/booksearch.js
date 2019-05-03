'use strict';

var express = require("express");
var mongo = require("mongodb");

var app = express();

app.set("view engine", "hbs");

var DB;

var mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error) {

    if(error) {
        console.log("Error establishing connection")
    } else {
        console.log("DB connection established");
        DB = mongoClient.db("library");
    }
})

app.get("/", function(request, response) {

    response.render("index.hbs");
})

app.get("/search", function(request, response) {

    var language = request.query.language;
    
    DB.collection("books").find({ language: language}).toArray(function(error, data) {
        
        if(error) {
            console.log(error);
            response.send("server error");
            return;
        }
        
        var data = {
            data: data
        };
        response.render("index.hbs", data);
    })
})

app.listen(3000);