'use strict';
var updateContent = function(data) {
  var section = document.getElementById("section");
  section.innerHTML = "";
  data = JSON.parse(data);
    
  for(var i = 0; i < data.RelatedTopics.length; i++) {
     
   var resultText = data.RelatedTopics[i].FirstURL;
   if(resultText == undefined) {
     continue;
   }
    var a = document.createElement("a");
    a.innerHTML = data.RelatedTopics[i].FirstURL;
    section.appendChild( a );
    a.href = data.RelatedTopics[i].FirstURL;
  }
 
};

var loadContent = function() {
  
  var searchQuery = document.getElementById("text").value;
  var url = "https://api.duckduckgo.com/?q=" + searchQuery +"&format=json&pretty=1";

  
  //create a new ajax object
    var request = new XMLHttpRequest();

    //Open a connect to a URL
    request.open("get", url);

    //Send request to the server resources.
    request.send();

    //receive the data 
    request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            
          updateContent(request.responseText);   

        }
    };
};

var button = document.getElementById("search");

button.addEventListener("click", loadContent);