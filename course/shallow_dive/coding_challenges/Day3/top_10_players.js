'use strict';

var players = [
    {name: "Roger Federer", rank: 1},
    {name: "Rafel Nadal", rank: 2},
    {name: "Nalbandian", rank: 12},
    {name: "Andy Murray", rank: 14},
    {name: "Andy Roddick", rank: 4},
    {name: "Pete Sampras", rank: 3},
    {name: "Rod Laver", rank: 190},
    {name: "Andre Agassi", rank: 11},
    {name: "Novak Djokovic", rank: 5},
    {name: "Arthur Ashe", rank: 8},
];

var top10Players = function() {
    for(var counter=0; counter<players.length; counter++) {
        if(players[counter].rank <= 10) {
            console.log(players[counter].name);
        }
    }
}

top10Players();