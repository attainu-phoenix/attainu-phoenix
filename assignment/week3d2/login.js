function validate() {
    
    var username = document.login("usrname").value;
    var password = document.login("psword").value;

    if (username == "username" && password == "password") {
        alert("You have Logged in");
        return;
    }
        else {

            alert("Wrong Username and Password");
            return;

    }
}