'use strict';

var updateContent = function(data){
    var section = document.getElementById("section");
    section.innerHTML = "";
    for(var i=0;i<data.RelatedTopics.length;i++){
        var result;
        // console.log(data.RelatedTopics[i].FirstURL)
        if(data.RelatedTopics[i].FirstURL != undefined){
             result = data.RelatedTopics[i].FirstURL;
        }
        
        
        if(!result){
            continue;
        }
        var a = document.createElement("a");
        var newLine = document.createElement("br")
        var linkText = document.createTextNode(data.RelatedTopics[i].Text);
        a.appendChild(linkText);
    
        a.href = data.RelatedTopics[i].FirstURL;
        // p.innerHTML = data.RelatedTopics[i].FirstURL;
        section.append(a);

       section.append(newLine);

    }
}

var loadData = function(){
    console.log("Search Button clicked")
    var query = document.getElementById("searchBox").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";
    console.log(url)
    var request = new XMLHttpRequest();
    request.open("get",url);
    request.send();
    request.onreadystatechange = function(data){
        if(request.readyState == 4 && request.status == 200){
            var jsonData = JSON.parse(request.responseText);
            updateContent(jsonData);
        }
    }
    
}
document.getElementById("search-button").addEventListener("click",loadData);