'use strict';

var content = document.getElementById("content");

var container = document.createElement("div");
container.className = "container-fluid";
content.appendChild(container);

var row = document.createElement("div");
row.className = "row";
container.appendChild(row);

var div1 = document.createElement("div");
div1.className = "offset-md-4 col-md-4";
row.appendChild(div1);
 
var h1 = document.createElement("h1");
div1.appendChild(h1);
h1.innerText = "Numbers and Squares";

var table = document.createElement("table");
table.className = "table table-striped";
div1.appendChild(table);

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var th1 = document.createElement("th");
tr.appendChild(th1);
th1.innerText = "Number";

var th2 = document.createElement("th");
tr.appendChild(th2);
th2.innerText = "Square";

var tbody = document.createElement("tbody");
table.appendChild(tbody);


for(var number = 1; number <= 10; number = number + 1) {
    var square = number * number;

    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = number;

    var td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerText = square;
}
