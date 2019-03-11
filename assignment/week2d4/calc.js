plusButton = document.getElementById("add");
plusOperation= function(){
    
    numberValues = getValues();

    sum= parseInt(numberValues.firstBlank) + parseInt(numberValues.secondBlank);
   
    result=document.getElementById("result");
    result.innerText =sum;  
}
plusButton.addEventListener("click", plusOperation);

subButton = document.getElementById("subst");
minusOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    minus = parseInt(firstBlank.value) - parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =minus;  
}
subButton.addEventListener("click", minusOperation);

mulButton = document.getElementById("multi");
mulOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    mul = parseInt(firstBlank.value) * parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =mul;    
}
mulButton.addEventListener("click", mulOperation);

diviButton = document.getElementById("Div");
diviOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    divi = parseInt(firstBlank.value) / parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =divi;    
}
diviButton.addEventListener ("click", diviOperation);