// Get value function 

getvalue = function() {
    number1 = document.getElementById("num1");
    number2 = document.getElementById("num2");
    returnobject = {
        "number1": number1,
        "number2": number2

    }

    return returnobject;
}



// validating the two number

validate = function(numbervalues) {
    if (numbervalues.number1.value == "" || numbervalues.number2.value == "") {
        alert("please enter two number");
        return false;
    } else {
        return true;
    }
}




//sum of two number

plus = document.getElementById("addButton");
addOp = function() {

    numbervalues = getvalue();
    if (validate(numbervalues) == false) {
        return;
    }


    sum = parseInt(numbervalues.number1.value) + parseInt(numbervalues.number2.value);

    showres(sum);
}



plus.addEventListener("click", addOp);

//Sub of two number

minus = document.getElementById("subButton");
subOp = function() {
    numbervalues = getvalue();

    if (validate(numbervalues) == false) {
        return;
    }

    difference = parseInt(numbervalues.number1.value) - parseInt(numbervalues.number2.value);
    showres(difference);
}



minus.addEventListener("click", subOp);

// div of two number

divide = document.getElementById("divButton");
divOp = function() {

    numbervalues = getvalue();
    if (validate(numbervalues) == false) {
        return;
    }
    //Check if dividing by 0
    if (parseInt(numbervalues.number2.value) != 0) {
        divide = parseInt(numbervalues.number1.value) / parseInt(numbervalues.number2.value);
        showres(divide);
    } else {
        showres("Cannot divide number by 0");
    }

}

divide.addEventListener("click", divOp);

//Mul of two numbers

multiply = document.getElementById("mulButton");
mulOp = function() {

    numbervalues = getvalue();

    if (validate(numbervalues) == false) {
        return;
    }

    multiply = parseInt(numbervalues.number1.value) * parseInt(numbervalues.number2.value);

    showres(multiply);
}
multiply.addEventListener("click", mulOp);

// function to show result

showres = function(result) {
    //Validation for Result is its NAN
    if (isNaN(result)) {
        alert("You Did Not Entered Number, It was string");
    } else {
        resultelement = document.getElementById("result");
        resultelement.innerText = result;
    }

}