button = document.getElementById("button");

button_click = function() {
    alert ("Hello from the other side !!!");
    //console.log("Hello from the other side !!!");
}

button.addEventListener("click",button_click);