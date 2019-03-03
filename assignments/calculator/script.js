/* 
   A simple calculator
   Author:  Ravi Shankar
   Date:  Feb 28, 2019

   1.  Listen and capture all the button events.
   2.  When an event occurs, depending on the button, I will do +-/*
   3.  For any operation, i have to get values from the text boxes too.
*/
//Functions

// Plus operation
plusButton = document.getElementById("plusButton");

plusOperation = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    sum = parseInt(number1) + parseInt(number2);
    
    result = document.getElementById("result");
    result.innerText = sum;

}

plusButton = document.addEventListener("click", plusOperation);

//Minus operation

minusButton = document.getElementById("minusButton");

minusOperation = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    difference = parseInt(number1) - parseInt(number2);
    
    result = document.getElementById("result");
    result.innerText = difference;

}

minusButton = document.addEventListener("click", minusOperation);

//Multiplication operation

mulButton = document.getElementById("mulButton");

mulOperation = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    mul = parseInt(number1) * parseInt(number2);
    
    result = document.getElementById("result");
    result.innerText = mul;

}

mulButton = document.addEventListener("click",mulOperation);

//Division operation

divButton = document.getElementById("divButton");

divOperation = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    div = parseInt(number1) / parseInt(number2);
    
    result = document.getElementById("result");
    result.innerText = div;

}

divButton = document.addEventListener("click",divOperation);