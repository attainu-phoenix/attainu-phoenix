/*
A JS calculator.
Date : 07/03/2019




*/

// Plus Operation

plusButton = document.getElementById("plusButton");
plusOperation = function() {

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    sum = parseInt(number1.value) + parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = sum;
}

plusButton.addEventListener("click",plusOperation);

// Subtraction Operation

minusButton = document.getElementById("minusButton");
minusOperation = function() {

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    minus = parseInt(number1.value) - parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = minus;
}

minusButton.addEventListener("click",minusOperation);

// Multiplication Operation

mulButton = document.getElementById("mulButton");
mulOperation = function() {

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    mul = parseInt(number1.value) * parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = mul;
}

mulButton.addEventListener("click",mulOperation);

// Division Operation

divButton = document.getElementById("divButton");
divOperation = function() {

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

    div = parseInt(number1.value) / parseInt(number2.value);

    result = document.getElementById("result");
    result.innerText = div;
}

divButton.addEventListener("click",divOperation);

