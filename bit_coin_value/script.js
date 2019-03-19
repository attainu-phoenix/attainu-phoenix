'use strict';
var request = new XMLHttpRequest;
request.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json");
request.send();

request.onreadystatechange =function() {
    if(request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);
            var bpi = data.bpi;

            for (var currency in bpi){
            var tr =document.createElement("tr");
            var currencycode = document.createElement("td");
            currencycode.innerText = bpi[currency].code;
            tr.append(currencycode);

            var currencyvalue = document.createElement("td");
            currencyvalue.innerText = bpi[currency].rate;
            tr.append(currencyvalue);

            var tablebody = document.getElementById("tablebody");
            tablebody.appendChild(tr);
            
        }
    }
};