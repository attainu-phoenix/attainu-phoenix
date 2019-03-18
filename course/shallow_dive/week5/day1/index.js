'use strict';
var data;
var rand = Math.floor(Math.random() * 10);
var interval;
var loadQuestion = function() {

    var request = new XMLHttpRequest();
    request.open("get", "quiz.json");
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4 & request.status == 200) {
            data = JSON.parse(request.responseText);
            displayQ(data);
            counter();
            console.log(data);
        }
    }
}

var displayQ = function(data) {
    var question = document.getElementById('question');
    console.log(data[rand].question);
    question.innerText = data[rand].question;




}

var checkanswer = function(data, interval) {
    var ans = document.getElementById('ans').value;
    if (ans == data[rand].answer) {
        alert("RIght Answer");
        clearInterval(interval);
        document.getElementById('count').innerText = 'Right Answer !';
         var x = document.getElementById('submit');
          x.setAttribute("disabled","");


    } else {
        alert("Wrong ANSWER");
        clearInterval(interval);
        document.getElementById('count').innerText = 'Wrong Answer !';
         var x = document.getElementById('submit');
          x.setAttribute("disabled","");

    }
}

var counter = function() {
    var count = 30;
    interval = setInterval(function() {
        document.getElementById('count').innerText = count + " sec";
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById('count').innerText = 'You Are Out of Time';
            var x = document.getElementById('submit');
          x.setAttribute("disabled","");

        }
    }, 1000);
}




var btn = document.getElementById('submit');

var btn_fun = function() {
    checkanswer(data, interval);
}

btn.addEventListener("click", btn_fun);


loadQuestion();