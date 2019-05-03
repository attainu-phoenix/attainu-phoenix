'use strict';

var mongo = require("mongodb");
var fs = require("fs");

var mongoClient = new mongo.MongoClient("mongodb://127.0.0.1:27017/library", { useNewUrlParser: true});

mongoClient.connect(function(error){

    if(error) {
        console.log("Error connecting to DB");
        return;
    }

    console.log("Connection established");
    var DB = mongoClient.db("library");

    DB.collection("books").find({}).toArray(function(error, data){
        
        if(error) {
            console.log("Error fetching data from books");
            return;
        }
        data = JSON.stringify(data);

        fs.writeFile("books.json", data, "utf-8", function(error){

            if(error) {
                console.log("Error writing to file");
            } else { 
                console.log("File written successfully");
            }
        })
    })
})