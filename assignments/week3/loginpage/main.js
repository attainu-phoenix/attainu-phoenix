inputDetailsFun = function () {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    allDetails = {
        "username": username,
        "password": password
    }
    return allDetails;
}

DetailsDb = function () {
    let username = "admin";
    let password = "ADMIN123";
    returnObject = {
        "username": username,
        "password": password
    }
    return returnObject;
}

submit = document.getElementById("submit");

submit.addEventListener("click", function mainFunction() {
    getDetails = inputDetailsFun();
    getDetailsDb = DetailsDb();

    if (getDetails.username == getDetailsDb.username || getDetails.password == getDetailsDb.password) {
        alert("You Logged In Succesfully.");
    } else {
        alert("The Username or Password You have entered is incorrect please re-enter again");
    }
})