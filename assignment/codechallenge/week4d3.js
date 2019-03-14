players=[ 
  {name: "Roger Federer", rank: 1},
  {name: "Rafel Nadal", rank: 2},
  {name:"Nalbandian", rank: 12},
  {name:"Andy Murray", rank: 14},
  {name: "Pete Sampras", rank: 4},
  {name: "Rod Laver", rank: 3},
  {name: "Andre Agassi", rank:11},
  {name: "Novak Djokovic", rank: 5},
  {name: "Arthur Ashe", rank: 8}
]

topPlayers=function(){
  for (i=0; i<players.length; i++){
    if(players[i].rank <= 10) {
      console.log(players[i].name);
    }
  }
}
topPlayers();