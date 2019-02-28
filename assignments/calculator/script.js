/*
    A Simple Calculator
    Author : Shivam
    Date   : 28/02/2019
*/
const giveNumbers = function () {

    let number1 = document.getElementById("idNumber1").value;
    let number2 = document.getElementById("idNumber2").value;

    let numbers = {
        number1: number1,
        number2: number2
    }
    return numbers;
}
const add = function () {

    number1 = giveNumbers().number1;
    number2 = giveNumbers().number2;
    if(number1 == "" || number2 == ""){
        alert("Enter two Numbers")
        return;
    }
    document.getElementById("idResult").innerHTML = parseInt(number1) + parseInt(number2);
}

const minus = function () {

    number1 = giveNumbers().number1;
    number2 = giveNumbers().number2;
    if(number1 == "" || number2 == ""){
        alert("Enter the two numbers")
        return;
    }
    document.getElementById("idResult").innerHTML = parseInt(number1) - parseInt(number2);
}
const multiply = function () {

    number1 = giveNumbers().number1;
    number2 = giveNumbers().number2;

    if (number1 == "" || number2 == "") {
        alert("Please Enter two numbers");
        return;
    }

    document.getElementById("idResult").innerHTML = parseInt(number1) * parseInt(number2);
}
const division = function () {

    number1 = giveNumbers().number1;
    number2 = giveNumbers().number2;
    if(number1 == "" || number2== ""){
        alert("Enter two numbers");
        return;
    }
    document.getElementById("idResult").innerHTML = parseInt(number1) / parseInt(number2);
}
document.getElementById("idPlusButton").addEventListener("click", add);
document.getElementById("idMinsButton").addEventListener("click", minus);
document.getElementById("idMulButton").addEventListener("click", multiply);
document.getElementById("idDivButton").addEventListener("click", division);


