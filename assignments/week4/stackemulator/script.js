var myarr = [];

function pushTo() {
item = document.getElementById("userinput").value;
  if (item == "") {
    alert("Enter A valid input in text box");
    return;
  }
  myarr.push(item);
  document.getElementById("userinput").value = "";
document.getElementById("disp").innerHTML = myarr;
}

function popTo() {
  if(myarr.length == 0){
        alert("Stack got empty as no element to pop")
        return 
    }
   myarr.pop()
  document.getElementById("disp").innerHTML = myarr;
}
push.addEventListener("click", pushTo);
pop.addEventListener("click", popTo);