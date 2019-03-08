//name= "surinder";
//password1 = "12345";

Button = document.getElementById("Button")
showresult=function(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;

    if(name1== "" || name2==""){
        alert("please enter valid input");
    }


    if(name1== "surinder" && name2=="1235"){

        alert("welcome surinder");
    }else{
        alert("your username or password is incorrect");
    }
   


    
}


Button.addEventListener("click", showresult);