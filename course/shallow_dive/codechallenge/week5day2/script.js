/*@Mayur

 DOM TO CREATE ELEMENTS DYNAMICALLY 

FOR CODE CHALLENGE WEEK 5 DAY 2 

 */

'use strict';

var content = document.getElementById('content');

var container = document.createElement('div');
container.className = "container-fluid";
content.appendChild(container);

var row = document.createElement('div');
row.className ="row";
container.appendChild(row);

var col1 = document.createElement('div');
col1.className ="col-md-12 text-center";
row.appendChild(col1);

var h1 = document.createElement('h1');
col1.appendChild(h1);
h1.innerText = "Numbers and Square";


var col2 = document.createElement('div');
col2.className ="col-md-6 offset-md-3";
row.appendChild(col2);


var table = document.createElement('table');
table.className ="table table-striped";
col2.appendChild(table);


var thead = document.createElement('thead');
table.appendChild(thead);

var tr1 = document.createElement('tr');
thead.appendChild(tr1);

var th1 = document.createElement('th');
tr1.appendChild(th1);
th1.innerText = "Numbers";

var th2 = document.createElement('th');
tr1.appendChild(th2);
th2.innerText = "Square";

var tbody = document.createElement('tbody');
table.appendChild(tbody);



for(var i=1;i<=10;i++){
  var tr_inner = document.createElement('tr');
tbody.appendChild(tr_inner);

	var td_inner = document.createElement('td');
    tr_inner.appendChild(td_inner);
    td_inner.innerText = i;

    var td_inner2 = document.createElement('td');
    tr_inner.appendChild(td_inner2);
    td_inner2.innerText = i*i;

   
}


