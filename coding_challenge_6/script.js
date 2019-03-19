'use strict';

var content = document.getElementById("content");

var container = document.createElement("div");
container.className ="container-fluid";

var row =document.createElement("div");
row.className = "row";

var column = document.createElement("div");
column.className = "offset-md-4 col-md-6";

var heading = document.createElement("h1");
heading.innerText ="NUMBERS AND SQUARE";

content.appendChild(container);
container.appendChild(row);
row.appendChild(column);
column.appendChild(heading);


var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
var rowheading = document.createElement("tr");
var rowcolumn1 = document.createElement("th");
rowcolumn1.innerText= "NUMBER";

var rowcolumn2 = document.createElement("th");
rowcolumn2.innerText = "SQUARES";

column.appendChild(table);
table.appendChild(thead);
thead.appendChild(rowheading);
rowheading.appendChild(rowcolumn1);
rowheading.appendChild(rowcolumn2);

var tbody = document.createElement("tbody");

for(var i=1;i<11;i++){
    var innerrowheading = document.createElement("tr");
var innerrowcolumn1 = document.createElement("th");
innerrowcolumn1.innerText = i;

var innerrowcolumn2 = document.createElement("th");
innerrowcolumn2.innerText = i*i;
table.appendChild(tbody);
tbody.appendChild(innerrowheading);
innerrowheading.appendChild(innerrowcolumn1);
innerrowheading.appendChild(innerrowcolumn2);
}










