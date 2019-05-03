'use strict';

var BOOKS = [];

var searchBook = function(language) {
    var resultArray = [];
    for(var i = 0; i < BOOKS.length; i++) {
        if(BOOKS[i].language == language) {
            resultArray.push(i);
        }
    }
    return resultArray;
};

var loadData = function() {
    var request = new XMLHttpRequest();
    request.open("get", "books.json");
    request.send();

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            BOOKS = JSON.parse(request.responseText);
        }
    };
};

var createTableRow = function(position) {
    var book = BOOKS[position];

    var tbody = document.getElementById("tbody");

    var tr = document.createElement("tr");
    tbody.appendChild( tr );
    
    var title = document.createElement("td");
    title.innerText = book.title;
    tr.append( title );

    var author = document.createElement("td");
    author.innerText = book.author;
    tr.append( author );

    var country = document.createElement("td");
    country.innerText = book.country;
    tr.append( country );
};

var button = document.getElementById("button");
button.addEventListener("click", function() {

    var language = document.getElementById("language").value;
    if(language == "") {
        alert("Hello, please enter a language first");
        return;
    }

    var bookResults =  searchBook(language);
    

    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for(var i = 0; i < bookResults.length; i++) {
        createTableRow( bookResults[i] );
    }

});


loadData(); 