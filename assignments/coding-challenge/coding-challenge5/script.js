'use strict'

// var body = document.getElementsByTagName("body")[0];
// var container = document.createElement("div")
// container.className = "container-fluid"
// var row = document.createElement("div")
// row.className = "row"
// var col_md_5 = document.createElement("div")
// col_md_5.className ="col-md-5"
// col_md_5.className ="offset-md-5"
// row.appendChild(col_md_5) 
// container.appendChild(row)
// body.appendChild(container)
// var createTable = function () {

//     console.log("createTable called")

//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     // for (var i = 1; i <= 10; i++) {
//     //     var row = document.createElement('tr')

//     //     for (var j = 1; j <= 2; j++) {

//     //         var cell = document.createElement('td')
//     //         var cellText = document.createTextNode(i +" "+(i*i))
//     //         cell.appendChild(cellText)
//     //         row.appendChild(cell)
//     //     }

//     //     tblBody.appendChild(row)
//     // }


//     for (var i = 1; i <= 10; i++) {
//         var numberRow = document.createElement('tr')
//         tblBody.appendChild(numberRow)
//         var numberColumn = document.createElement('td')
//         var numberColumnText = document.createTextNode(i)
//         numberColumn.appendChild(numberColumnText)
//         numberRow.appendChild(numberColumn)

//         var squareNumberColumn = document.createElement('td')
//         var squareNumberColumnText = document.createTextNode(i*i)
//         squareNumberColumn.appendChild(squareNumberColumnText)
//         numberRow.appendChild(squareNumberColumn)
//     }
//     // var row = document.createElement('tr')
//     // var cell = document.createElement('td')

//     // cell.appendChild(cellText)
//     // row.appendChild(cell)
//     // tblBody.appendChild(row)

//     tbl.setAttribute("border", "2");
// }

// createTable()

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

// var secondRow = document.createElement("div")
// secondRow.className = "row"
// col.appendChild(secondRow)

// var number = document.createElement("h2")
// number.innerHTML = "Number"
// secondRow.appendChild(number)
// var square = document.createElement("h2")
// square.innerHTML = "Square"
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