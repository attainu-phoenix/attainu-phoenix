plsBtn = document.getElementById("plsBtn");
addition=function() {
	if1=document.getElementById("if1").value;
	if2=document.getElementById("if2").value;

	sum=parseInt(if1)+parseInt(if2);

	result=document.getElementById("result");

	result.innerText=sum;
	
}

plsBtn.addEventListener("click",addition);