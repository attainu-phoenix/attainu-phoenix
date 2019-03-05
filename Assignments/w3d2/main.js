inputCredFun = function () {
     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;

     allCred = {
         "username":username,
         "password":password
     }
        return allCred ;
}


credDb = function () {
    let username = "sam" ;
    let password = "sam@123";
    returnObject = {
        "username":username,
        "password":password
    }
    return returnObject;
}

submit = document.getElementById("submit");

    submit.addEventListener("click",function mainFunction() {
        getCred = inputCredFun();
        getCredDb = credDb();
    
        if(getCred.username == getCredDb.username || getCred.password == getCredDb.password) {
            alert("You Logged In Succesfully.");
        } else {
            alert ("You Entered Wrong Username Or Password.");
        }
    })