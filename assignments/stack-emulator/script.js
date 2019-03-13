// Declare stack array which will share single instance across whole programm
// and can be modified
let stack = [];
/* 
    This function push single element one by one on above stack array

*/
const push = function(){
    let item = document.getElementById("element").value;
    if(item == ""){
        alert("Enter Element in text box")
        return
    }
    stack.push(item)
    console.log(stack);
    document.getElementById("stack-elements").innerHTML = stack.toString().replace (/,/g, " ")
}
/* 
    This function pop single element one by one on above stack array

*/
const pop = function(){
    if(stack.length == 0){
        alert("Stack got empty no element to pop")
        return 
    }
    stack.pop()
    console.log(stack)
    document.getElementById("stack-elements").innerHTML = stack.toString().replace (/,/g, " ")
}

// handle push button 
document.getElementById("push").addEventListener("click",push);
// handle pop button
document.getElementById("pop").addEventListener("click",pop);
