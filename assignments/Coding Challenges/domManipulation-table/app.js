//main body
var main = document.getElementById("content");

//container tag
var divContainer = document.createElement("div");
divContainer.className = "container";
main.appendChild(divContainer);

//row tag
var divRow = document.createElement("div");
divRow.className = "row";
divContainer.appendChild(divRow);

//col tag
var divCol = document.createElement("div");
divCol.className = "col text-center";
divRow.appendChild(divCol);

//h3 tag
var h3Tag = document.createElement("h3");
h3Tag.innerText = "Number and Squares";
divCol.appendChild(h3Tag);

// hr tag
var hrTag = document.createElement("hr");
divCol.appendChild(hrTag);

// table tag
var tableTag = document.createElement("table");
tableTag.className = "table table-striped";
divCol.appendChild(tableTag);

// thead tag
var theadTag = document.createElement("thead");
tableTag.appendChild(theadTag);

// tr tag
var trTag = document.createElement("tr");
theadTag.appendChild(trTag);

// th tag
var th1Tag = document.createElement("th");
th1Tag.innerText = "Numbers";
trTag.appendChild(th1Tag);

var th2Tag = document.createElement("th");
th2Tag.innerText = "Sqaures";
trTag.appendChild(th2Tag);

// tbody tag
var tbodyTag = document.createElement("tbody");
tableTag.appendChild(tbodyTag);

// loop over numbers and sqaures
for (var i = 1; i <= 10; i++) {
  var trTag = document.createElement("tr");
  tbodyTag.appendChild(trTag);

  var td1Tag = document.createElement("td");
  td1Tag.innerText = i;
  trTag.appendChild(td1Tag);

  var td2Tag = document.createElement("td");
  td2Tag.innerText = i * i;
  trTag.appendChild(td2Tag);
}
