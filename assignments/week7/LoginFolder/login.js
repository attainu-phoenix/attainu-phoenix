'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')

var app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");

//Create  the DB connection
var DB;

//Create a Mongo client
var mongoClient = new mongodb.MongoClient("mongodb://localhost:27017/users", { useNewUrlParser: true });
mongoClient.connect(function (errr) {
    if (errr) {
        console.log("Error connecting to MongoDB.")
    } else {
        console.log("Connection to MongoDB database blog established.");
    }
    DB = mongoClient.db("users");
});

//The Signup Form app routes

app.get("/signup", function (req, res) {

    var data = {}
    if (req.query.success) {
        data.userCreated = true;
    }
    res.render("signup.hbs", data)
});

app.post("/signup", function (request, response) {
    
    var data = {
        userName: request.body.userName,
        password: request.body.password
    }

    DB.collection("user").insertOne(data, function (error, result) {
        if (error) {
            response.send("Error while signup.");
        } else {
            response.redirect("/login?Signup-Successful");
        }
    })
});

//The login form

app.get("/login", function (request, response) {
    var data = {}
    if(request.query.success){
        data.login = true;
    }
    response.render("login.hbs",data)
});

app.post("/login", function (request, response) {
  var data = {
    username: request.body.username,
    password: request.body.password
}
DB.collection("user").findOne({ username: data.username, password: data.password }, function(error, data) {
    if (error) {
        response.send("Error");
        return;
    } 
    if (!data) {
      response.redirect("/login?please-retry");
      return;
    }
  return response.send("success");  
})
});

  
app.listen(3000);