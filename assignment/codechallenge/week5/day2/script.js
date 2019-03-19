'use strict';

var content=document.getElementById('content');

var container = document.createElement('div');
container.className="container-fluid";
content.appendChild(container);

var row = document.createElement('div');
row.className='row';
container.appendChild(row);

var column = document.createElement('div');
column.className= "col-md-12 text-center";
row.appendChild(column);

var h2 = document.createElement("h2");
h2.innerText = ("Numbers and Square");
column.appendChild(h2);

var hr= document.createElement("hr");
column.appendChild(hr);

//create table

var table = document.createElement("table");
table.className="table table-striped";
column.appendChild(table);

var thead = document.createElement("thead");
table.appendChild(thead);

var tr= document.createElement('tr');
thead.appendChild(tr);

var th1 = document.createElement('th');
th1.innerText="Number";
tr.appendChild(th1);

var th2=document.createElement('th')
th2.innerText = "square"
tr.appendChild(th2);
 
//table body

var tbody= document.createElement("tbody");
 table.appendChild (tbody);


for(var i=1; i<=10; i++){
    var square=i*i;

    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    var td1= document.createElement("td");
    td1.innerText = i;
    tr.appendChild(td1);

    var td2=document.createElement("td");
    td2.innerText = square;
    tr.append(td2);
}








