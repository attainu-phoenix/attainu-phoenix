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
    for(count = 0; count <= users.length; count++) {
        if(userInputs.userName == users[count].userName && userInputs.password == users[count].password) {
            return success;
        } else if(count <= users.length) {
            continue;
        } else if(userInputs.userName == "" || userInputs.password == "") {
            return false;
        } else {
            return error;
        }
    }    
}

successFulLogin = function() {
    // success = "Login successful!";
    alert("Login Successful!")
    resultElement = document.getElementById("message");
    resultElement.innerText = "Login successful!";
}

errorLogin = function() {
    // error = "Incorrect username and password!";
    alert("Incorrect username and password!")
    resultElement = document.getElementById("message");
    resultElement.innerText = "Incorrect username and password!";
}

login = document.getElementById("login");

loginFn = function() {
    userInputs = getDetails();

    if(validateInput(userInputs) == success) {
        successFulLogin();
    } else if(validateInput(userInputs) == error) {
        errorLogin();
    } else if(validateInput(userInputs) == false) {
        alert("Please enter username and password");
    }
}

login.addEventListener("click", loginFn);