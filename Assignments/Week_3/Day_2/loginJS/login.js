/*
JavaScript to validate user details.
Just did whatever was done in Click Me and Calculator assignment, and some hit and trail..
That seems to work.
*/

button = document.getElementById("button")

login=function(){
    usrnm = document.getElementById("usrnm").value;
    passwrd = document.getElementById("passwrd").value;
	
    if(usrnm== "admin" && passwrd=="12345") {
		alert("Welcome admin !!!");
    } else{
        alert("Username or Password invalid !!!");
    }   
}

button.addEventListener("click", login);