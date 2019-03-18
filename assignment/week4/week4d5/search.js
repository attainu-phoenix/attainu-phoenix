'use strict';

var updateData = function(data) {
    var section = document.getElementById("section");
    section.innerHTML = " ";

    for (var i = 0; i< data.RelatedTopics.Length; i++){
        var resultText = data.RelatedTopics[i].Result,
        url = data.RelatedTopics[i].FirstURL;

        if(!resultText || !url) {
            continue;
        }

        var link = document.createElement("a");
        link.innerText = resultText;
        link.href = url;

        var li = document.createElement ("li");
        li.innerHTML = data.RelatedTopics[i].Result;
        li.appendChild ( link );

        var section = document.getElementById("section");
        section.appendChild ( li );

    }
}

var loadContent = function() {
    var query = document.getElementById("searchInput").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";

    if(!query){
        alert ("please enter something to search");
    };

    // create an ajax object
    var request = new XMLHttpRequest();

    //open to connect a URL
    request.open("get", url);

    //send the request to the server resource.
    request.send();

    //to fetch the data and use accordingly.
    request.onreadystatechange = function(data){
        if (request.readystate == 4 && request.status==200){
            var jasonData = JSON.parse(request.responseText)
            updateData(jsondata);
        }
    };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadContent);