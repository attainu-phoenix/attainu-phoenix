
//add operation
 plusButton = document.getElementById("plusButton");
 plusoperation = function(){

     number1 = document.getElementById("number1");
     number2 = document.getElementById("number2");

   sum = parseInt(number1.value) + parseInt(number2.value);

    result= document.getElementById("result");

    result.innerText = sum;
}
plusButton.addEventListener("click", plusoperation); 


//Minus Operation

minusButton = document.getElementById("minusButton");
minusoperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  minus = parseInt(number1.value) - parseInt(number2.value);

   result= document.getElementById("result");

   result.innerText = minus;
}
minusButton.addEventListener("click", minusoperation); 


//multiply Operation
mulButton = document.getElementById("mulButton");
muloperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  mul = parseInt(number1.value) * parseInt(number2.value);

   result= document.getElementById("result");

   result.innerText = mul;
}
mulButton.addEventListener("click", muloperation); 


//Division Operation
divButton = document.getElementById("divButton");
divoperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  div = parseInt(number1.value) / parseInt(number2.value);

   result= document.getElementById("result");

   result.innerText = div;
}
divButton.addEventListener("click", divoperation); 


//Reminder Operation
rimButton = document.getElementById("rimButton");
rimoperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  rim = parseInt(number1.value) % parseInt(number2.value);

   result= document.getElementById("result");

   result.innerText = rim;
}
rimButton.addEventListener("click", rimoperation); 


//square Operation
sqrButton = document.getElementById("sqrButton");
sqroperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  sqr1 = parseInt(number1.value) * parseInt(number1.value);
  sqr2 = parseInt(number2.value) * parseInt(number2.value);

   result1= document.getElementById("result1");

   result1.innerText = sqr1;

   result2= document.getElementById("result2");

   result2.innerText = sqr2;
}
sqrButton.addEventListener("click", sqroperation); 


//cube Operation
cubeButton = document.getElementById("cubeButton");
cubeoperation = function(){

    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");

  cube1 = parseInt(number1.value) * parseInt(number1.value) * parseInt(number1.value);
  cube2 = parseInt(number2.value) * parseInt(number2.value) * parseInt(number2.value);

   result1= document.getElementById("result1");

   result1.innerText = cube1;

   result2= document.getElementById("result2");

   result2.innerText = cube2;
}
cubeButton.addEventListener("click", cubeoperation); 