'use strict'

var CURRENT_COLOR = "green";
var TIMER;
var DURATION = 2000;

var changeColor = function() {

    var body = document.getElementById("body");
    
    body.style.backgroundColor = CURRENT_COLOR;

    if(CURRENT_COLOR == "green") {
        CURRENT_COLOR = "red";
    } else {
        CURRENT_COLOR = "green";
    }
}

TIMER = setInterval(changeColor, DURATION);

var slowButton = document.getElementById("slow");

slowButton.addEventListener("click", function() {

        clearInterval(TIMER);
        DURATION = DURATION * 2;
        TIMER = setInterval(changeColor, DURATION);
});

var fastButton = document.getElementById("fast");

fastButton.addEventListener("click", function() {

        clearInterval(TIMER);
        DURATION = DURATION / 2;
        TIMER = setInterval(changeColor, DURATION);
});