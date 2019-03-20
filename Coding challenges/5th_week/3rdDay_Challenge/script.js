var loadContent = function() {
    var request = new XMLHttpRequest();
    request.open("get", "cities.json");
    request.send();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        var stateCity = JSON.parse(request.responseText);
        logCities(stateCity,"M");
      }
    };
  };
  var countCities=0;
  function logCities(City,startCharachter) {
    for (var i = 0; i < City.length; i++) {
      if (City[i].name[0] === startCharachter) {
        countCities=countCities+1;

      }
      
    }
    console.log(countCities);
    return;
  }
  loadContent();