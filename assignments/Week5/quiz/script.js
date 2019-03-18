'use strict';
// Below variabe will be shared acrossed this script 
var question;
var index = Math.floor(Math.random() * 10);
var jsonData;
var intervel;

// This function  will display question on the screen
var displayQuestion = function (data) {

    //console.log(data[Math.floor( Math.random() * 10 )].question);
    question = document.getElementById("question")
    question.innerHTML = data[index].question

}
// This function will submit answer give by user
var submitAnswer = function () {
    var answer = document.getElementById("answer").value;
    if (answer.toLowerCase() == jsonData[index].answer.toLowerCase()) {
        displayMessage("correct")
    }
    else {
        displayMessage("Wrong")
    }
}

// This function will display message like correct ,wrong, Time Over
var displayMessage = function (message) {
    if (message == "correct") {
        document.getElementById("successMessageId").style.display = "block"
    }
    if (message == "Wrong") {
        document.getElementById("wrongMessageId").style.display = "block"
        document.getElementById("submitAnswer").disabled = true;
    }
    if (message == "Finished") {
        document.getElementById("submitAnswer").disabled = true;
        document.getElementById("wrongMessageId").style.display = "block"
        document.getElementById("wrongMessageId").innerHTML = "Time Over !"
    }

}

// This function is used to display Timer on Screen
var timer = function () {
    var timeLeft = 30
    intervel = setInterval(function () {

        document.getElementById("timer").innerHTML = timeLeft
        timeLeft -= 1
        if (timeLeft <= 0) {
            clearInterval(intervel)
            document.getElementById("timer").innerHTML = "Finished"
            displayMessage("Finished")
        }
    }, 1000)
}

// This function will load question from quiz.json file
var loadQuestion = function () {
    console.log("script loaded on page load")
    var request = new XMLHttpRequest();
    request.open("get", "quiz.json");
    request.send();
    request.onreadystatechange = function (data) {
        if (request.readyState == 4 && request.status == 200) {
            jsonData = JSON.parse(request.responseText);
            displayQuestion(jsonData)
            timer()
        }
    }
}
// This statement will handle onload event when page will load on browser 
document.getElementById("body").addEventListener("load", loadQuestion);
// This statement will handle click event when Submit button will be clicked 
document.getElementById("submitAnswer").addEventListener("click", submitAnswer);