"use strict";

let ar = [1, 2, 3, 4];

document.getElementById("op").innerText = ar;

let pushBtn = document.getElementById("push");

pushBtn.addEventListener("click", () => {
    let pushInput = document.getElementById("ip").value;
    ar.push(pushInput);
    document.getElementById("op").innerText = ar;
    alert(`You Have Added ${pushInput} To The Array`);
    document.getElementById("ip").value = "";

})


let popBtn = document.getElementById("pop");

popBtn.addEventListener("click", () => {
    ar.pop();
    document.getElementById("op").innerText = ar;


})




let shiftBtn = document.getElementById("shift");

shiftBtn.addEventListener("click", () => {
    ar.shift();
    document.getElementById("op").innerText = ar;

})