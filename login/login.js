function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username== "jay" && password=="jay") {
        alert("you are logged in");
        return;
    }

    else if (username=="" || password==""){
        alert("enter your password or username");
        return;
    }

    
}