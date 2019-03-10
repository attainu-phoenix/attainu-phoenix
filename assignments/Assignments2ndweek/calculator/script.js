getText=function(){
n1=parseInt(document.getElementById("n1").value);
n2=parseInt(document.getElementById("n2").value);
var num=new Object();
num.num1=n1;
num.num2=n2;
return num;
}

setResult=function(res){
    result1=document.getElementById("result");
    result1.innerText=res;
}

document.getElementById("addbtn").addEventListener("click",function add(){
    Numbers=getText();
    if(isNaN(Numbers.num1)==true){
        alert("please enter the first number");
        return;
    }    
    else if(isNaN(Numbers.num2)==true){
        alert("please enter the second number");
        return;
    }
    
    else {
        res=Numbers.num1+Numbers.num2;
        setResult(res);
    }
    
   
});
document.getElementById("subbtn").addEventListener("click",function sub(){
    Numbers=getText();
    if(isNaN(Numbers.num1)==true){
        alert("please enter the first number");
        return;
    }    
    else if(isNaN(Numbers.num2)==true){
        alert("please enter the second number");
        return;
    }
    
    else {
        res=Numbers.num1-Numbers.num2;
        setResult(res);
    }});
document.getElementById("mulbtn").addEventListener("click",function multiply(){
    Numbers=getText();
    if(isNaN(Numbers.num1)==true){
        alert("please enter the first number");
        return;
    }    
    else if(isNaN(Numbers.num2)==true){
        alert("please enter the second number");
        return;
    }
    
    else {
        res=Numbers.num1*Numbers.num2;
        setResult(res);
    }
});
document.getElementById("divbtn").addEventListener("click",function div(){
    Numbers=getText();
    if(isNaN(Numbers.num1)==true){
        alert("please enter the first number");
        return;
    }    
    else if(isNaN(Numbers.num2)==true){
        alert("please enter the second number");
        return;
    }
    
    else {
        res=Numbers.num1/Numbers.num2;
        setResult(res);
    }
});

