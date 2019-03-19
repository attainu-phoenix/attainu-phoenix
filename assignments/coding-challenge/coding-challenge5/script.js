'use strict'

var body = document.getElementById("section")

var container = document.createElement("div")
container.className = "container-fluid"
var row = document.createElement("div")
row.className = "row"

var col = document.createElement('div')
col.className = "col-md-5 offset-md-4"

var h1 = document.createElement("h1")
h1.innerHTML = "Numbers And Squares"

col.appendChild(h1)
var hr = document.createElement("hr")
col.appendChild(hr)


var table = document.createElement("table")
table.className = "table table-striped"
var thead = document.createElement("thead")

var tr = document.createElement("tr")
var number = document.createElement("th")
number.innerHTML = "Number"

tr.appendChild(number)

var square = document.createElement("th")
square.innerHTML = "square"

tr.appendChild(square)

thead.appendChild(tr)
var tbody = document.createElement("tbody")

table.appendChild(tbody)
col.appendChild(table)

row.appendChild(col)

container.appendChild(row)
body.appendChild(container)

for (var i = 1; i <= 10; i++) {
    var numRow = document.createElement("tr")
    var number = document.createElement("td")
    number.innerHTML = i
    var numberSquare = document.createElement("td")
    numberSquare.innerHTML = i * i
    table.appendChild(thead)
    tbody.appendChild(numRow)
    numRow.appendChild(number)
    numRow.appendChild(numberSquare)

}