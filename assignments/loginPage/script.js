/*
    Login Page
    Author : Shivam
    Date  : 5/03/19
*/


/*
    method giveValue() takes input from two textbox and return value object

*/
const giveValue = () => {

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let values = {
        userName: userName,
        password: password
    }
    return values;
}
/* 
    validate() takes argument username and password and validate whether it is null or not 
*/
const validate = (userName, password) => {

    if (userName == "" || password == "") {
        return false;
    }
    return true;
}
/* 
  login() checks whether username and password is valid or not 
  If username = "shivam" and password ="password" 
  then it display login successfull message 
  of display login failed message
*/
const login = () => {
    event.preventDefault();

    let userName = giveValue().userName;
    let password = giveValue().password;

    if (validate(userName, password)) {
        if (userName == "shivam" && password == "password") {
           
            displayMessage("success")
        }
        else {
            
            displayMessage("error")
        }
    }
    else {
        alert("Please Enter UserName and Password.")
    }

}
/*
  displayMessage() takes message as argument and  style it and display it on screen

*/
const displayMessage = (message)=>{
    if(message === "success" || message === ""){
       
        let error =  document.getElementById("error");
        if (window.getComputedStyle(error).display === "block") {
            error.style.display = "none";
        }
        document.getElementById("success").style.display = "block"
    }
    if(message === "error" || message === ""){
      
        let success =  document.getElementById("success");
        if (window.getComputedStyle(success).display === "block") {
            success.style.display = "none";
        }
        document.getElementById("error").style.display = "block"
    }
    
    
}
/*

Handle login button click it executed login function 
*/
document.getElementById("loginButton").addEventListener("click", login);