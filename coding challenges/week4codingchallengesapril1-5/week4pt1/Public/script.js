'use strict';

var PERSONS = [];

var updateContent = function() {

    var tbody = document.getElementById("tbody");

    tbody.innerHTML = "";

    for(var i = 0; i < PERSONS.length; i = i + 1) {

        var tr = document.createElement("tr");
        var name = document.createElement("td");
        var phone = document.createElement("td");
        
        name.innerText = PERSONS[i].name;
        phone.innerText = PERSONS[i].phone;

        tr.appendChild(name);
        tr.appendChild(phone);
        tbody.appendChild(tr); 
    

    }
}


var loadPersons = function() {
    var request = new XMLHttpRequest();
    request.open("get", "/persons");
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            PERSONS = JSON.parse(request.responseText);
            updateContent();
        }
    }
}

var button = document.getElementById("button");
button.addEventListener("click", function() {
    var personName = document.getElementById("personName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if(personName == "" || phoneNumber == "") {
        alert("Please enter Name and Phone Number");
        return;
    }
    
    var data = {
        name: personName,
        phone: phoneNumber  
    }
    
    var request = new XMLHttpRequest();
    request.open("post", "/persons");
    
    request.setRequestHeader("content-type", "application/json");

    request.send(JSON.stringify(data));
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            
            PERSONS.push(data);
            updateContent();
        }
    }

})


loadPersons();