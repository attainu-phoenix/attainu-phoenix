'use strict';


var pushBtn = document.getElementById("push"); //BUTTON INIT FOR PUSH
var popBtn = document.getElementById("pop"); //BUTTON INIT FOR POP

var array = []; //ARRAY  DECLARE


/* GETTING VALUES FROM INPUT BOX */
var getvalues = function() {
    var input = document.getElementById("input");
    return input;

}

/* CLEAR INPUT BOX */
var inputclear = function() {
    input.value = "";


}

/* VALIDATION FOR NUMBER INPUT */
var validation = function(input) {
    if (input.value == "") {
        alert("Enter Number");
        return false;
    } else {
        return true;
    }

}

/* PUSH OPERATION */
var push = function() {
    var inputpass = getvalues();

    if (validation(inputpass) == false) {
        return;
    }

    array.push(inputpass.value);

    result(array);
    inputclear();
}
pushBtn.addEventListener("click", push);


/* POP OPERATION */
var pop = function() {


    if (array && array.length) {
        array.pop(array);
        result(array);

    } else {
        alert("No elements to pop");
    }


}
popBtn.addEventListener("click", pop);



/* DISPLAY RESULT, USED TABLE HERE TO DISPLAY DATA  */
var result = function(output) {

    var tab = document.getElementById("tab");
    var display = "";

    display = "<table class='table table-bordered'>";

    display += "<tbody>";
    display += "<tr>";
    for (var c = 0; c < array.length; c++) {
        display += "<td style='width:0.1%'>" + array[c] + "</td>";
    }
    display += "</tr>";
    display += "</tbody>";
    display += "</table>";

    tab.innerHTML = display;

}