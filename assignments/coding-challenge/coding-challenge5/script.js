'use strict'

var body = document.getElementsByTagName("body")[0];
var container = document.createElement("div")
container.className = "container-fluid"
var row = document.createElement("div")
row.className = "row"
var col_md_5 = document.createElement("div")
col_md_5.className ="col-md-5"
col_md_5.className ="offset-md-5"
row.appendChild(col_md_5) 
container.appendChild(row)
body.appendChild(container)
var createTable = function () {
    
    console.log("createTable called")
    
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    // for (var i = 1; i <= 10; i++) {
    //     var row = document.createElement('tr')

    //     for (var j = 1; j <= 2; j++) {

    //         var cell = document.createElement('td')
    //         var cellText = document.createTextNode(i +" "+(i*i))
    //         cell.appendChild(cellText)
    //         row.appendChild(cell)
    //     }

    //     tblBody.appendChild(row)
    // }
   

    for (var i = 1; i <= 10; i++) {
        var numberRow = document.createElement('tr')
        tblBody.appendChild(numberRow)
        var numberColumn = document.createElement('td')
        var numberColumnText = document.createTextNode(i)
        numberColumn.appendChild(numberColumnText)
        numberRow.appendChild(numberColumn)

        var squareNumberColumn = document.createElement('td')
        var squareNumberColumnText = document.createTextNode(i*i)
        squareNumberColumn.appendChild(squareNumberColumnText)
        numberRow.appendChild(squareNumberColumn)
    }
    // var row = document.createElement('tr')
    // var cell = document.createElement('td')

    // cell.appendChild(cellText)
    // row.appendChild(cell)
    // tblBody.appendChild(row)

    tbl.setAttribute("border", "2");
}

createTable()