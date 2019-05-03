'use strict';

var questionArray = [];
var currentQuestionIndex = 0;
var counter = 30;
var timer;

var Redirect = function() {
    window.location = "http://localhost/Week5assignments/indexquiz.html";
 } 
var loadData = function() {
    var request = new XMLHttpRequest();
    request.open("get","quiz.json");
    request.send();
    
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            questionArray = JSON.parse(request.responseText);
            showQuestion();
        }
    };
};

var timerFunction = function() {
    if(counter != 0) {
        var counterElement = document.getElementById("counter");
        counterElement.innerText = counter;
        counter = counter - 1;
    } else if(counter == 0) {
        document.getElementById("button").disabled = true;
        alert("Times Up please close the quiz");
        clearInterval(timer);
        
    }
}

var showQuestion = function() {
    currentQuestionIndex = Math.floor( Math.random() * 10);
    var questionElement = document.getElementById("question");
    questionElement.innerText = questionArray[currentQuestionIndex].question;

    timer = setInterval(timerFunction, 1000);
};

var button = document.getElementById("button");

var answerSubmitted = function() {
    var answer = document.getElementById("input").value;
    if(answer == "") {
        alert("Please enter an answer first");
        return;
    }
    if(answer.toLowerCase() == questionArray[currentQuestionIndex].answer .toLowerCase()) {
        alert("Right Answer");
        clearInterval(timer);
        Redirect();
    } else {
        document.getElementById("button").setAttribute("disabled", "true");
        alert("Wrong Answer")
        clearInterval(timer);
        Redirect();
    }

};
button.addEventListener("click", answerSubmitted);

loadData();