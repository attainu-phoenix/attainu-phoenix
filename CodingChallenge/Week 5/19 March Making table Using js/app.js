"use strict"

//Creating All The Required Elements 

let content = document.getElementById("content");

// Main Conatiner 

let container = document.createElement("div");
container.className = "container-fluid";
content.appendChild(container);

// Main Row 

let row = document.createElement("div");
row.className = "row";
container.appendChild(row);

// Full Width Column For The Title Of The Table

let title = document.createElement("div");
title.className = "col-md-12 text-center";
row.appendChild(title);

// H1 Title 

let h1 = document.createElement("h1");
h1.className = "display-4";
title.appendChild(h1);
h1.innerText = "Numbers and Square";

// Main Table Column

let col = document.createElement("div");
col.className = "col-md-6 offset-md-3";
row.appendChild(col);

// Creating Table Elements

let table = document.createElement("table");
table.className = "table table-striped";
col.appendChild(table);


let thead = document.createElement("thead");
table.appendChild(thead);

let tr1 = document.createElement("tr");
thead.appendChild(tr1);

let th1 = document.createElement("th");
tr1.appendChild(th1);
th1.innerText = "Numbers";

let th2 = document.createElement("th");
tr1.appendChild(th2);
th2.innerText = "Square";

let tbody = document.createElement("tbody");
table.appendChild(tbody);

// Looping Out The Data 

let loopFunc = () => {

    for (let i = 1; i <= 10; i++) {
        let trInsert = document.createElement("tr");
        tbody.appendChild(trInsert);

        // Inserting The Data To The Table 

        let tdInsert = document.createElement("td");
        trInsert.appendChild(tdInsert);
        tdInsert.innerText = i;

        let tdInsert2 = document.createElement("td");
        trInsert.appendChild(tdInsert2);
        tdInsert2.innerText = i * i;


    }
}


loopFunc();