'use strict'


var citiesBeginWith = function (cities, letter) {
    console.log("citiesBeginWith called")
    var count = 0
    for (var i = 0; i <cities.length; i++) {
        var name = cities[i].name
        
        if(name.charAt(0) == letter){
            //console.log(cities[i].name)
            count = count+1
        }

      
    }
    console.log(count)
}

var loadCities = function () {
console.log("loadCitites called")

    var request = new XMLHttpRequest();
    request.open("get", "cities.json");
    request.send();
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            var cities = JSON.parse(request.responseText)

            citiesBeginWith(cities, 'A')
           

        }
    };
};

document.getElementById("body").addEventListener("load", loadCities);