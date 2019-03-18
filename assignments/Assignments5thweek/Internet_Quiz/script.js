var QuAn=[];

function loadContent(){
    var request=new XMLHttpRequest();
    request.open("get","quiz.json");
    request.send();
    console.log("hi");
    request.onreadystatechange=function(){
        if(request.readyState ==4 && request.status == 200){
            QuAn=JSON.parse(request.responseText);
        displayQuestion(QuAn);
        
            
        }
    }

}
loadContent();


var index=Math.floor(Math.random() * 10);

    function displayQuestion(QuAn){
        var interval = setInterval(function() {
            timer--;
            document.getElementById("timeArea").innerHTML=timer;
            if (timer === 0)
            {
                document.getElementById("submitBtn").style.display="none";
                 
                clearInterval(interval);

                alert("Time is over!");


            }
        }, 1000);
    
    Question = QuAn[index].question;
    document.getElementById("questionArea").innerHTML=Question;
    

}
var timer = 30;

function AutoRefresh(t) {
    setTimeout("location.reload(true);", t);
 }
function verifyAnswer(){
    var Answer=document.getElementById("answerArea").value;
    Ans = QuAn[index].answer;
    console.log(Ans);
    if(Answer===""){
        alert("Enter an answer you haven't answered the question");
    }else{
        if(Answer===Ans){
            alert("right");
            AutoRefresh(100);
            return;
        }
        else{
            alert("wrong answer");
            document.getElementById("answerArea").value=" ";
            return;
        }
        
    }

}


document.getElementById("submitBtn").addEventListener("click",verifyAnswer);
