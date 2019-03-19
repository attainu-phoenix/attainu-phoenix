//Getting the id of body tag using getElementById method.
var content=document.getElementById("struct");

//Creating the div container using document.createElement method.
var container=document.createElement("div");
container.className="container-fluid";
content.appendChild(container);

//creating row div using document.createElement method.
var divrow=document.createElement("div");
divrow.className="row";
container.appendChild(divrow);

//creating column element 
var divcol=document.createElement("div");
divcol.className="offset-md-4 col-md-4";
divrow.appendChild(divcol);

//creating h1 element 
var heading=document.createElement("h1");
divcol.appendChild(heading);
heading.innerText="Numbers and Squares";
var hr=document.createElement("hr");
divcol.appendChild(hr);

//creating table element
var table=document.createElement("table");
table.className="table table-striped";
divcol.appendChild(table);


//creating thead element
var thead=document.createElement("thead");
table.appendChild(thead);


//creating th element inside thead
var th1=document.createElement("th");
thead.appendChild(th1);
th1.innerText="Number";
var th2=document.createElement("th");
thead.appendChild(th2);
th2.innerHTML="Square";


//creating tr and td tag and printing number and square into them using dor loop.
for(var i=0;i<100;i++){
    var tr=document.createElement("tr");
    table.appendChild(tr);
    var td1=document.createElement("td");
    tr.appendChild(td1);
    td1.innerText=i;
    var td2=document.createElement("td");
    tr.appendChild(td2);
    td2.innerText=i*i;

}








