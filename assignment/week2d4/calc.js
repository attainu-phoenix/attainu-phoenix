plusButton = document.getElementById("add");
plusOperation= function(){
    
    firstBlank=document.getElementById("blank1");
    secondBlank=document.getElementById("blank2");

    sum= parseInt(firstBlank.value) + parseInt(secondBlank.value);
   
    result=document.getElementById("result");
    result.innertext = sum;  
}
plusButton.addEventListener("click", plusOperation);