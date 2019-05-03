'use strict';

var express = require ("express");

var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false  }));

var PLAYERS=[];

app.get("/players", function (request, response){
    var data = {
      players: PLAYERS,
      userName : "Monish",
    };
   response.render("players.hbs", data);
});

app.post("/players", function(request, response) {
    var playerName = request.body.playerName;
    var playerLocation = request.body.playerLocation;
    var details = {};
    details.players = playerName;
    details.location = playerLocation;
    PLAYERS.push(details);
    
    
   
    response.redirect("/players");
});

app.listen(3000);