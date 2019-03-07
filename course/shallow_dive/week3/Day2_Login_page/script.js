users = [
    {userName : "admin", password : "admin"},
    {userName : "system", password : "system"},
    {userName : "Ansal", password : "Mon"},
    {userName : "Divyam", password : "Goel"},
    {userName : "Vaibhav", password : "Bajpai"}
];

getDetails = function() {
    userName = document.getElementById("username").value;
    password = document.getElementById("password").value;
    userObject = {
        "userName": userName,
        "password": password
    }
    return userObject;
}

validateInput = function(userInputs) {
    if(userInputs.userName == "" || userInputs.password == "") {
        return false;
    } 
    
    for(count = 0; count < users.length; count++) {
        if(userInputs.userName == users[count].userName && userInputs.password == users[count].password) {
            return "success";
        } 
    }    

    return "error";
}

successFulLogin = function() {
    // success = "Login successful!";
    alert("Login Successful!")
    resultElement = document.getElementById("success");
    resultElement.innerText = "Login successful!";
}

errorLogin = function() {
    // error = "Incorrect username and password!";
    alert("Incorrect username and password!")
    resultElement = document.getElementById("error");
    resultElement.innerText = "Incorrect username and password!";
}

login = document.getElementById("login");

loginFn = function() {
    userInputs = getDetails();

    if(validateInput(userInputs) == false) {
        alert("Please enter username and password");
    } else if(validateInput(userInputs) == "success") {
        successFulLogin();
    } else if(validateInput(userInputs) == "error") {
        errorLogin();
    }
}

login.addEventListener("click", loginFn);