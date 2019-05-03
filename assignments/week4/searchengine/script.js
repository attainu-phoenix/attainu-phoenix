'use strict';

var updateContent = function(data) {
    var section = document.getElementById("section");
    section.innerHTML = "";
    console.log(data.RelatedTopics);

    for(var counter = 0; counter < data.RelatedTopics.length; counter = counter + 1) {
        var resultText = data.RelatedTopics[counter].FirstURL;

        if(!resultText) {
            continue;
        }

        var a = document.createElement("a");
        a.innerHTML = data.RelatedTopics[counter].FirstURL;
        section.appendChild(a);
        a.href = data.RelatedTopics[counter].FirstURL;

        section.append("\n");
    }
};

var loadContent = function() {
    var request = new XMLHttpRequest();
    var query = document.getElementById("searchInput").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";
    
    request.open("get", url);
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            var jsonData = JSON.parse(request.responseText);
            updateContent(jsonData);
        }
    };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadContent);