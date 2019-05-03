getValues = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
  
    resultObject = {
      number1: number1,
      number2: number2
    };
    return resultObject;
  };
  
  showResult = function(result) {
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
  };
  
  validate = function(numberValues) {
    if (numberValues.number1 == "" || numberValues.number2 == "") {
      alert("please enter two numbers");
      return false;
    } else {
      return true;
    }
  };
  
  plusButton = document.getElementById("plusButton");
  plusOperation = function() {
    numberValues = getValues();
    if (validate(numberValues) == false) {
      return;
    }
    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
  
    showResult(sum);
  };
  
  plusButton.addEventListener("click", plusOperation);
  
  minusButton = document.getElementById("minusButton");
  minusOperation = function() {
    numberValues = getValues();
    if (validate(numberValues) == false) {
      return;
    }
  
    minus = parseInt(numberValues.number1) - parseInt(numberValues.number2);
  
    showResult(minus);
  };
  
  minusButton.addEventListener("click", minusOperation);
  
  multButton = document.getElementById("multButton");
  multOperation = function() {
    numberValues = getValues();
    if (validate(numberValues) == false) {
      return;
    }
    mult = parseInt(numberValues.number1) * parseInt(numberValues.number2);
  
    showResult(mult);
  };
  
  multButton.addEventListener("click", multOperation);
  
  divisionButton = document.getElementById("divisionButton");
  divisionOperation = function() {
    numberValues = getValues();
    if (validate(numberValues) == false) {
      return;
    }
    division = parseInt(numberValues.number1) / parseInt(numberValues.number2);
  
    showResult(division);
  };
  
  divisionButton.addEventListener("click", divisionOperation);
  