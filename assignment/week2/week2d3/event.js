event=document.getElementById("press");
pressEvent=function(){
    alert("yes that's it");
};
event.addEventListener("click", pressEvent);
console.log("event");