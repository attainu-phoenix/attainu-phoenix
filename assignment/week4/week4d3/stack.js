'use strict';

var stack = [];
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

var showStack = function() {
  var resultElement = document.getElementById("result");
  resultElement.innerText = stack.join(" | ");
}

var pushOperation = function() {
  var input = document.getElementById("blank").value;
  if (input == "") {
  alert ("please enter number");
  return;
}
 showStack(stack.push(input));
} 
button1.addEventListener("click", pushOperation);

var popOperation = function() {
showStack(stack.pop());
}
button2.addEventListener("click", popOperation);
