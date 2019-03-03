/*

1. Get id of input text and button.
2. Assign click functions to all buttons.
3. When we click respective operation should be performed.

*/
//Function to get values from the text input

getValues = function () {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    resultObject = {
        "number1": number1,
        "number2": number2
    }
    return resultObject;
}

//Function to show result

showResult = function (result) { 
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
}

//Plus operation


plusButton = document.getElementById("plusButton");
plusOperation = function(){

    numberValues = getValues();
    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);

    showResult(sum);

}

plusButton.addEventListener("click", plusOperation);


//Minus operation

minusButton = document.getElementById("minusButton");
minusOperation = function(){

numberValues = getValues();

minus = parseInt(numberValues.number1) - parseInt(numberValues.number2);

showResult(minus);

}

minusButton.addEventListener("click", minusOperation);


//Multiplication operation

multButton = document.getElementById("multButton");
multOperation = function() {

    numberValues = getValues();
    mult = parseInt(numberValues.number1) * parseInt(numberValues.number2);

    showResult(mult);

}

multButton.addEventListener("click", multOperation);



//division  operation

divisionButton = document.getElementById("divisionButton");
divisionOperation = function(){

    numberValues = getValues();
    division = parseInt(numberValues.number1) / parseInt(numberValues.number2);

    showResult(divisin);

}

divisionButton.addEventListener("click", divisionOperation);