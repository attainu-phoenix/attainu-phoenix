var arr=[];
function getText(){
var item=document.getElementById("itemToPush").value;
if(item==""){
    
    return null;
}
else{
   return item;
}
}

function pushValue(){
    value=getText();
    if(value==null){
        alert("Can't push empty value in stack please enter a value to push!");
        return;
    }
    else{
        arr.push(value);
    }

    displayArray();
    document.getElementById("itemToPush").value="";

}

function popValue(){
   
 
   if(arr.length==0){
        alert("Nothing to pop stack empty");
        return;
    }else{
    arr.pop();
    displayArray();
    }
    
    
}

function displayArray(){
    res=document.getElementById("resultArea");
    arr.join("|")
    console.log(arr);
    var result1=arr.join("  ");
    
    res.innerText=result1;
}

document.getElementById("pushBtn").addEventListener("click",pushValue);
document.getElementById("popBtn").addEventListener("click",popValue);
