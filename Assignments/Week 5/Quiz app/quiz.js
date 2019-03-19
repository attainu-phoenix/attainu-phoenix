"use strict";

let data = [];
let countdown = 30;
let timer;


let countClock = function () {
    let clock = document.getElementById("clock");
    countdown--;
    if (countdown <= 0) {
        // disabling the submit button if timer runs out
        document.getElementById("submit").style.display = "none";
        clearInterval(timer);
        return alert("So Slow. Try Another Time");
    }
    clock.innerText = countdown;
};

let x = Math.floor(Math.random() * 10);

let updateContent = function (data) {
    //timer functions
    timer = setInterval(countClock, 1000);

    // generating gibberish questions

    let question = data[x]["question"];
    let que = document.getElementById("question");
    que.innerText = question;
};

let updateFunc = function () {
    // create an ajax object
    let request = new XMLHttpRequest();

    request.open("get", "quiz.json");

    // sennd the request to the server resources.
    request.send();
    // Recieve the data and do some operation

    request.onreadystatechange = function (date) {
        if (request.readyState == 4 && request.status == 200) {
            let jsonData = JSON.parse(request.responseText);
            data = jsonData;
            updateContent(jsonData);
        }
    };
};

updateFunc();

let validation = function () {
    let inputAns = document.getElementById("inputText").value;
    let Ans = data[x].answer;
    //   to check if the answer is correct or wrong
    if (Ans == inputAns) {
        alert("Jackpot You Answered It Correctly");
        document.getElementById("submit").style.display = "none";
        clearInterval(timer);
    } else {
        document.getElementById("submit").style.display = "none";
        alert("Too Bad Wrong Answer");
        clearInterval(timer);
    }
};

let submit = document.getElementById("submit");
submit.addEventListener("click", validation);