"use strict";

let ar = [1, 2, 3, 4];

document.getElementById("op").innerText = ar;

let pushBtn = document.getElementById("push");

pushBtn.addEventListener("click", () => {
  let pushInput = document.getElementById("ip").value;
  if (pushInput == "") {
    alert("Enter The Number Please..");
  } else {
    ar.push(pushInput);
    document.getElementById("op").innerText = ar;
    alert(`You Have Added ${pushInput} To The Array`);
    document.getElementById("ip").value = "";
  }
});

let popBtn = document.getElementById("pop");

popBtn.addEventListener("click", () => {
  let removePop = ar.pop();
  document.getElementById("op").innerText = ar;
  alert(`You Have Removed ${removePop} From The Array`);
});

let shiftBtn = document.getElementById("shift");

shiftBtn.addEventListener("click", () => {
  let removeShift = ar.shift();
  document.getElementById("op").innerText = ar;
  alert(`You Have Removed ${removeShift} From The Array`);
});
