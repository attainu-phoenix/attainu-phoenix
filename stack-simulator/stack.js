var push= document.getElementById("push");
var pop = document.getElementById("pop");
var stack = [];
var result = document.getElementById("result");
pushoperation =function() {
     var inputnum = document.getElementById("stackinput").value ;
     stack.push(inputnum);
     result.innerHTML= stack.join(" ");
     }


popoperation =function() {
     var inputnum = document.getElementById("stackinput").value ;
     stack.pop(inputnum);
     result.innerHTML = stack.join(" ");
}

push.addEventListener("click", pushoperation);
pop.addEventListener("click", popoperation);