// Get value function 

getvalue = function() {
    number1= document.getElementById("number1");
    number2= document.getElementById("number2");
    returnobject = {
        "number1" : number1,
        "number2" : number2

    }

    return returnobject ;
}

// function to show result

showvalues = function(result) {
    resultelement= document.getElementById("result1");
    resultelement.innerText = result;
    
}

// validate the two number

validate = function(numbervalues) {
    if(numbervalues.number1.value == "" || numbervalues.number2.value == "") {
        alert("please enter two number");
        return false;
    }

    else {
        return true ;
    }
}




//sum of two number

plus= document.getElementById("plus");
plusoperation = function() {

    numbervalues = getvalue();
     if (validate(numbervalues)== false) {
         return;
     }
    

    sum = parseInt(numbervalues.number1.value) + parseInt(numbervalues.number2.value);
    
     showvalues(sum);
}



 plus.addEventListener("click",plusoperation);
 
 //difference of two number

 minus= document.getElementById("minus");
minusoperation = function() {
    numbervalues= getvalue();

    if (validate(numbervalues)== false) {
        return;
    }
   
    difference = parseInt(numbervalues.number1.value) - parseInt(numbervalues.number2.value);
    showvalues(difference);
}



 minus.addEventListener("click",minusoperation);

 // divide of two number

 divide= document.getElementById("divide");
divideoperation = function() {

    numbervalues= getvalue();
    if (validate(numbervalues)== false) {
        return;
    }
   

    divide = parseInt(numbervalues.number1.value) / parseInt(numbervalues.number2.value);
    showvalues(divide);

}

divide.addEventListener("click",divideoperation);
 
// multiplication of two number
multiply= document.getElementById("multiply");
multiplyoperation = function() {

    numbervalues= getvalue();

    if (validate(numbervalues)== false) {
        return;
    }
   
    multiply = parseInt(numbervalues.number1.value) * parseInt(numbervalues.number2.value);
   console.log(multiply);
    showvalues(multiply);
}
 multiply.addEventListener("click", multiplyoperation) ;