"use strict";
var stack = [];
var push = document.getElementById("push");
var pop = document.getElementById("pop");
var result = document.getElementById("result");

var pushFunc = () => {
  var ele = document.getElementById("ele").value;
  stack.push(ele);
  result.innerHTML = stack.join();
};

var popFunc = () => {
  stack.pop();
  result.innerHTML = stack.join();
};

push.addEventListener("click", pushFunc);
pop.addEventListener("click", popFunc);
