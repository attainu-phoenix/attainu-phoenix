getValues = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    resultObject = {
        "number1": number1,
        "number2": number2
    }
    return resultObject;
}

showResult = function(result) {
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
}

validateInput = function(numberValues) {
    if(numberValues.number1 == "" || numberValues.number2 == "") {
        alert("Please enter two numbers");
        return false;
    } else {
        return true;
    }
}

addButton = document.getElementById("addButton");

buttonAdd = function() {
    numberValues = getValues();

    if(validateInput(numberValues) == false) {
        return;
    }

    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);

    showResult(sum);
}

addButton.addEventListener("click", buttonAdd);

minusButton = document.getElementById("minusButton");

buttonMinus = function() {
    numberValues = getValues();

    if(validateInput(numberValues) == false) {
        return;
    }

    minus =  parseInt(numberValues.number1) - parseInt(numberValues.number2);

    showResult(minus);
}

minusButton.addEventListener("click", buttonMinus);

mulButton = document.getElementById("mulButton");

buttonMul = function() {
    numberValues = getValues();

    if(validateInput(numberValues) == false) {
        return;
    }
    
    mul = parseInt(numberValues.number1) * parseInt(numberValues.number2);

    showResult(mul);
}

mulButton.addEventListener("click", buttonMul);

divButton = document.getElementById("divButton");

buttonDiv = function() {
    numberValues = getValues();

    if(validateInput(numberValues) == false) {
        return;
    }

    div = parseInt(numberValues.number1) / parseInt(numberValues.number2);
    
    showResult(div);
}

divButton.addEventListener("click", buttonDiv);