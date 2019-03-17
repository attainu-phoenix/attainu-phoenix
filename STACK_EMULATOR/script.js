
'use strict';

var stack = [];

var showstack = function(){

    var stackdisplay = document.getElementById("stackdisplay");
    stackdisplay.innerText = stack.join(" ");
}

var pushoperation = function(){
    var inputValue = document.getElementById("inputText").value;

    if(inputValue == ""){
        alert("Please enter something to add to stack");
        return;
    }
    stack.push(inputValue);
    showstack();
}


var popoperation = function(){
    stack.pop();
    showstack();

}

var PushButton = document.getElementById("PushButton");
var PopButton = document.getElementById("PopButton");

PushButton.addEventListener("click", pushoperation);
PopButton.addEventListener("click",popoperation);