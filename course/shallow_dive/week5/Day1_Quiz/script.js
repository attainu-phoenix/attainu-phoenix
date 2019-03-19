'use strict';

var questions = [];
var index = Math.floor(Math.random() * 10);
var answer;

var displayQuestion = function(questions) {
    questions = questions[index].question;
    document.getElementById("questions").innerHTML = questions;
    timer();
}

var userInputValidation = function () {
    answer = document.getElementById("userInput").value;
    if(answer == "") {
        alert("Please enter the answer");
    } else {
        if(answer.toLowerCase() == questions[index].answer.toLowerCase()) {
            document.getElementById("result").style.color = "green";
            alert("Correct Answer");
            document.getElementById("result").innerHTML = "Correct Answer";
            setTimeout(function() {
                location.reload();
            }, 1500);
        }
        else {
            document.getElementById("result").style.color = "red";
            alert("Wrong Answer");
            document.getElementById("result").innerHTML = "Wrong Answer";
            setTimeout(function() {
                location.reload();
            }, 1500);
        }
    }
}

var timer = function() {
    var timer = 30;
    var interval = setInterval(function() {
        timer = timer - 1;
        document.getElementById("timer").style.color = "green";
        document.getElementById("timer").innerHTML = timer;

        if(timer <= 10) {
            document.getElementById("timer").style.color = "red";
        }

        if (timer == 0)
        {
            document.getElementById("button").style.display="none";
             
            clearInterval(interval);

            alert("Time is over!");
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
    }, 1000); 
}

var loadContent = function() {
    var request=new XMLHttpRequest();
    request.open("get", "quiz.json");
    request.send();
    request.onreadystatechange=function(){
        if(request.readyState == 4 && request.status == 200){
            questions=JSON.parse(request.responseText);
            displayQuestion(questions);    
        }
    }
}

loadContent();

var button = document.getElementById("button");
button.addEventListener("click", userInputValidation);