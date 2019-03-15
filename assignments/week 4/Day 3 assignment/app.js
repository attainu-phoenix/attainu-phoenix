"use strict";
var stack = [];
var push = document.getElementById("push");
var pop = document.getElementById("pop");
var result = document.getElementById("result");

var pushFunc = () => {
  var ele = document.getElementById("ele").value;
  if (!ele) {
    alert("please enter an element to push into stack");
  } else {
    stack.push(ele);
    result.innerHTML = stack.join();
  }
};

var popFunc = () => {
  if (stack.length == 0) {
    alert("stack is empty, nothing to pop");
  }
  stack.pop();
  result.innerHTML = stack.join();
};

push.addEventListener("click", pushFunc);
pop.addEventListener("click", popFunc);
