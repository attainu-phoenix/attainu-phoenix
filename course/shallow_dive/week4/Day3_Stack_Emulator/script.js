'use strict';

var stack = [];

var getValue = function() {
    var number = document.getElementById("number").value;
    return number;
}

var showResult = function(result) {
    var resultElement = document.getElementById("result");
    resultElement.innerText = stack.join(" ");
}

var validateInput = function(number) {
    if(number == "") {
        alert("Please enter a number");
        return false;
    } else {
        return true;
    }
}

var btn1 = document.getElementById("btn1"); 

var pushElements = function() {
    var number = getValue();
    
    if(validateInput(number) == false) {
        return;
    }

    showResult(stack.push(number));
} 

btn1.addEventListener("click", pushElements);

var btn2 = document.getElementById("btn2");

var popElements = function() {
    if(stack.length == 0) {
        alert("Stack is empty!");
        return;
    }

    showResult(stack.pop());
}

btn2.addEventListener("click", popElements);
