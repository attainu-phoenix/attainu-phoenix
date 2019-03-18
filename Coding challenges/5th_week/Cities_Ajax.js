var loadContent=function() {
	var request=new XMLHttpRequest();
    request.open("get","cities.json");
    request.send();
    request.onreadystatechange=function(data) {
        if(request.readyState==4&&request.status==200) {
            var stateCity = JSON.parse(request.responseText)
           logCities(stateCity);
        }
    }; 
};

function logCities(City) {
    for(var i=0;i<City.length;i++) {
        if ((City.state[i]!=="Maharashtra")||(City.state[i]!=="Gujarat")) {
            continue;
        } else {
            console.log(City[i].name);
        }

    }
}
