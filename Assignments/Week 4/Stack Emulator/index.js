"use strict";

let ar = [];

document.getElementById("op").innerText = ar;

let pushBtn = document.getElementById("push");

pushBtn.addEventListener("click", () => {
  let pushInput = document.getElementById("ip").value;
  if (pushInput == "") {
    alert("Enter The Number Please..");
  } else {
    ar.push(pushInput);
    document.getElementById("op").innerText = ar.join(" ");
    alert(`You Have Added ${pushInput} To The Array`);
    document.getElementById("ip").value = "";
  }
});

let popBtn = document.getElementById("pop");

popBtn.addEventListener("click", () => {
  if (ar.length == 0) {
    alert("There is nothing left in stack to pop");
  } else {
    let removePop = ar.pop();
    document.getElementById("op").innerText = ar.join(" ");
    alert(`You Have Removed ${removePop} From The Array`);
  }
});

let shiftBtn = document.getElementById("shift");

shiftBtn.addEventListener("click", () => {
  if (ar.length == 0) {
    alert("There is nothing left in stack to shift");
  } else {
    let removeShift = ar.shift();
    document.getElementById("op").innerText = ar.join(" ");
    alert(`You Have Removed ${removeShift} From The Array`);
  }
});
