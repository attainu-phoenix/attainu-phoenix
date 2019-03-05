/* JS CODE FOR VALIDATION OF USER LOGIN FROM CLIENT SIDE 
   CODED BY MAYUR , FOR ASSIGNMENT 
   */

input = function() {
    user = document.getElementById('username').value;
    pass = document.getElementById('password').value;
    returnobject = {
        "username": user,
        "pass": pass

    }

    return returnobject;
}


validation = function(data) {

    if (data.username == "" || data.pass == "") {
        alert("Enter USER N PASS");
        return false;

    }

    /* PLEASE NOTE NOT USING ANY HASH FUNCTION TO ENCRYPT PASSWORD, TO KEEP ASSIGMNET SIMPLE 
     */
    else if (data.username == "admin" && data.pass == "pass") {

        return true;
    } else {
        alert("LOGIN FAILED . PLEASE ENTER CORRECT USERNAME AND PASS");
        return false;
    }
}
login = function() {
    data = input();
    if (validation(data) == false) {
        return;
    } else {
        alert("LOGIN SUCESS");
    }
}
btn = document.getElementById("login");
btn.addEventListener("click", login);