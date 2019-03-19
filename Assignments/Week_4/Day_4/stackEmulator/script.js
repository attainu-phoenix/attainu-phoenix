'use strict';

var stack = [];

var showStackContents = function() {
    var stackDisplay = document.getElementById("stackDisplay");
    stackDisplay.innerText = stack.join(" | ");
}



var pushOperation = function () {
    var inputValue = document.getElementById("inputElement").value;

    if (inputValue == "") {
        alert ("Please enter something...");
        return;
    }

    stack.push(inputValue);
    showStackContents();
    
};

var popOperation = function () {
    stack.pop();
    showStackContents();
}


var pushButton = document.getElementById("pushButton");
var popButton = document.getElementById("popButton");


// Event listeners.

pushButton.addEventListener("click",pushOperation);
popButton.addEventListener("click",popOperation);