'use strict';
var loading = document.getElementById("loading");
loading.style.display ="none";
var laoddata =function() {
    loading.style.display ="block";
    var firstcurrency = document.getElementById("firstcurrency").value;
    var secondcurrency = document.getElementById("secondcurrency").value;
    
    if(firstcurrency ==""  || secondcurrency == "") {
        alert("enter the currencies");
        return;
    }

    var url = "https://api.exchangeratesapi.io/latest?symbols=";
    url = url + firstcurrency + "," + secondcurrency;

    var request = new XMLHttpRequest();
    request.open("get",url);
    request.send();
    

    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200){
             var data = JSON.parse(request.responseText);
             var firstcurrencyvalue = data.rates[firstcurrency];
             var secondcurrencyvalue = data.rates[secondcurrency];
             var h2 = document.getElementById("ratesdisplay");
             ratesdisplay.innerText = firstcurrency + " :" + firstcurrencyvalue + "," + secondcurrency + " :" + secondcurrencyvalue;
             
             loading.style.display = "none";
            
        }
        
    }
};

var laodbutton = document.getElementById("loadbutton");
laodbutton.addEventListener("click",laoddata);