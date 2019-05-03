'use strict';

var mongo = require("mongodb");
var fs = require("fs");

var mongoClient = new mongo.MongoClient("mongodb://127.0.0.1:27017/library", {useNewUrlParser: true});
mongoClient.connect(function(error){

    if(error) {
        console.log("Error connecting to DB");
        return;
    }
    console.log("DB connection established");
    var DB = mongoClient.db("library");

    fs.readFile("books.json", "utf-8", function(error, data){

        if(error) {
            console.log("Error reading the file");
            return;
        }
        console.log("File is read. Inserting Data into DB");
        
        data = JSON.parse(data);

        DB.collection("books").insertMany(data, function(error, success){

            if(error) {
                console.log(error);
                console.log("\n\nData was not written in the file");
                return;
            }
            console.log("Data inserted into DB")
        })
    })
})