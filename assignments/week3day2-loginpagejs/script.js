/*
Get user input 
listen to click on login
*/

button_click = function() {
username = document.getElementById("username").value;
password = document.getElementById("password").value;

if(username =="username" && password =="password"){
    alert("login sucess");
} else {
    alert ("login failed");
}

}

button = document.getElementById("button");
button.addEventListener("click", button_click);

