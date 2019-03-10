

document.getElementById("loginbtn").addEventListener("click",function login(){
    uid = document.getElementById("userid").value;
    pass = document.getElementById("pass").value;
    
    
   
    if(uid== "abhishek" && pass=="abc"){
        alert("Abhishek you are logged in");
        
        
    }
    else if(uid==""||pass==""){
        alert("please enter valid input");
        return;
    }
    
    
   else{
        alert("please enter valid id or password");
    }
    
    
    
    
});


