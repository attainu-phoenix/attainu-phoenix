
let stack = [];
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
const pop = function(){
    if(stack.length == 0){
        alert("Stack got empty no element to pop")
        return 
    }
    stack.pop()
    console.log(stack)
    document.getElementById("stack-elements").innerHTML = stack.toString().replace (/,/g, " ")
}

document.getElementById("push").addEventListener("click",push);
document.getElementById("pop").addEventListener("click",pop);
