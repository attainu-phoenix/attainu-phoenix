"use strict";

var data = [];
var x;
var i = 31;
var timer;

var countClock = () => {
  var clock = document.getElementById("clock");
  i--;
  if (i < 0) {
    // disable the submit button if timer runs out
    document.getElementById("submit").setAttribute("disabled", "true");
    clearInterval(timer);
    return alert("times up");
  }
  clock.innerText = i;
};

var updateContent = data => {
  //timer functions
  timer = setInterval(countClock, 1000);

  // generate random questions
  x = Math.floor(Math.random() * 10);
  var question = data[x]["question"];
  var ques = document.getElementById("question");
  ques.innerText = question;
};

var updateFunc = () => {
  // create an ajax object
  var request = new XMLHttpRequest();

  request.open("get", "quiz.json");

  // sennd the request to the server resources.
  request.send();
  // Recieve the data and do some operation

  request.onreadystatechange = function(date) {
    if (request.readyState == 4 && request.status == 200) {
      var jsonData = JSON.parse(request.responseText);
      data = jsonData;
      updateContent(jsonData);
    }
  };
};

updateFunc();

var validate = () => {
  var input = document.getElementById("inputText").value;

  //   to check if the answer is correct or wrong
  if ((data[x]["answer"] = input)) {
    alert("correct answer");
    document.getElementById("submit").setAttribute("disabled", "true");
    clearInterval(timer);
  } else {
    document.getElementById("submit").setAttribute("disabled", "true");
    alert("wrong answer");
    clearInterval(timer);
  }
};

var submit = document.getElementById("submit");
submit.addEventListener("click", validate);
