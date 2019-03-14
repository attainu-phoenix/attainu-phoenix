/*
1.  Get ID of input text and push and pop buttons.
2.  Assign click function to push and pop buttons.
3.  When we click "push button"elements should be
entered into the stack array and when we click "pop button"
elements should be removed from the stack array. 
*/

//Function to get values from text input box.
'use strict';
getValue = function (){
number = document.getElementById("number").value;
resultObject = {
    "number": number,
    }
return resultObject;
}

//Function for push Button, adds elements entered in textbox

var stack = [];
pushOperation = function() {
    numberValue = getValue();
    if(numberValue.number == "") {
    alert("Please enter a number");
    }
stack.push(numberValue.number);
var myNewString = stack.join();

resultElement = document.getElementById("result");
resultElement.innerText = stack.join(' ');
}

pushButton = document.getElementById("pushButton");
pushButton.addEventListener("click", pushOperation);

//Function pop Button - removes elements from array

popOperation = function() {
    numberValue = getValue();
    if(numberValue.number == "") {
        alert("Please enter a number");
    }
stack.pop();
resultElement = document.getElementById("result");
resultElement.innerText = (stack);
}

popButton = document.getElementById("popButton");
popButton.addEventListener("click", popOperation);
