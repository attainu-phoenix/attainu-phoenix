"use strict";

let players = [{
        name: "Roger Federer",
        rank: 1
    },
    {
        name: "Rafel Nadal",
        rank: 2
    },
    {
        name: "Nalbandian",
        rank: 12
    },
    {
        name: "Andy Murray",
        rank: 14
    },
    {
        name: "Andy Roddick",
        rank: 4
    },
    {
        name: "Pete Sampras",
        rank: 3
    },
    {
        name: "Rod Laver",
        rank: 190
    },
    {
        name: "Andre Agassi",
        rank: 11
    },
    {
        name: "Novak Djokovic",
        rank: 5
    },
    {
        name: "Arthur Ashe",
        rank: 8
    }
];


function top10Players() {
    for (let i = 0; i < players.length; i++) {
        if (players[i].rank > 10) {
            continue;
        } else {
            console.log(players[i].name);
        }
    }
}



top10Players();