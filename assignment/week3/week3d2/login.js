submitButton=document.getElementById("button")

validateForm= function() {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;

    if(username == "a" || password == "bb"){
    alert("You have Logged in");
    return true;
    }
        else {
        alert("Enter Details Correctly");
        return;
    }
}
submitButton.addEventListener("click", validateForm);