//name= "surinder";
//password1 = "12345";

Button = document.getElementById("Button")
showresult=function(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;




    if(name1== "surinder" && name2=="1235"){

        console.log("welcome surinder");
    }else{
        console.log("your username or password is incorrect");
    }
   


    if(name1== "" || name2==""){
        alert("please enter valid input");
    }
}


Button.addEventListener("click", showresult);