plusButton = document.getElementById("add");
plusOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");
    
    sum= parseInt(firstBlank.value) + parseInt(secondBlank.value);

    if(firstBlank.value == "" || secondBlank.value == "") {
        alert("Please Enter Any Number in Both BLANKS");
        return;
    }   
    
    result=document.getElementById("result");
    result.innerText =sum;  
}
plusButton.addEventListener("click", plusOperation);

subButton = document.getElementById("subst");
minusOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    if(firstBlank.value == "" || secondBlank.value == "") {
        alert("Please Enter Any Number in Both BLANKS");
        return;
    }   

    minus = parseInt(firstBlank.value) - parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =minus;  
}
subButton.addEventListener("click", minusOperation);

mulButton = document.getElementById("multi");
mulOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    if(firstBlank.value == "" || secondBlank.value == "") {
        alert("Please Enter Any Number in Both BLANKS");
        return;
    }   

    mul = parseInt(firstBlank.value) * parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =mul;    
}
mulButton.addEventListener("click", mulOperation);

diviButton = document.getElementById("Div");
diviOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    if(firstBlank.value == "" || secondBlank.value == "") {
        alert("Please Enter Any Number in Both BLANKS");
        return;
    }   

    divi = parseInt(firstBlank.value) / parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innerText =divi;    
}
diviButton.addEventListener ("click", diviOperation);

clearBlanks=document.getElementById("clear");
onclick="clear"
