"use strict";

var updateContent = function(data) {
  var section = document.getElementById("section");
  section.innerHTML = "";

  for (var i = 0; i < data.RelatedTopics.length; i++) {
    var resultText = data.RelatedTopics[i].Result;

    if (!resultText) {
      continue;
    }

    var p = document.createElement("p");
    p.innerHTML = data.RelatedTopics[i].Result;
    section.appendChild(p);
  }
};

var loadContent = function() {
  var query = document.getElementById("searchInput").value;

  if (!query) {
    alert("Please enter text to search");
  }

  var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";

  // Create an ajax object
  var request = new XMLHttpRequest();

  // Open a connect to a URL
  request.open("get", url);

  // Send the request to the server resource.
  request.send();

  // Receive the data and do some thing with it.
  request.onreadystatechange = function(data) {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      updateContent(jsonData);
    }
  };
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadContent);
