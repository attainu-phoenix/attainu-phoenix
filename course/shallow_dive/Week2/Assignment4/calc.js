plsBtn = document.getElementById("plsBtn");
addition=function() {
	if1=document.getElementById("if1").value;
	if2=document.getElementById("if2").value;

	sum=parseInt(if1)+parseInt(if2);

	result=document.getElementById("result");

	result.value=sum;
	
}

plsBtn.addEventListener("click",addition);

//Substraction Block

minBtn = document.getElementById("minBtn");
substraction=function() {
	if1=document.getElementById("if1").value;
	if2=document.getElementById("if2").value;

	min=parseInt(if1)-parseInt(if2);

	result=document.getElementById("result");

	result.value=min;
	
}

minBtn.addEventListener("click",substraction);

//Multiplication Block

mulBtn = document.getElementById("mulBtn");
multiplication=function() {
	if1=document.getElementById("if1").value;
	if2=document.getElementById("if2").value;

	mul=parseInt(if1)*parseInt(if2);

	result=document.getElementById("result");

	result.value=mul;
	
}

mulBtn.addEventListener("click",multiplication);

//Division Block

divBtn = document.getElementById("divBtn");
division=function() {
	if1=document.getElementById("if1").value;
	if2=document.getElementById("if2").value;

	div=parseInt(if1)/parseInt(if2);

	result=document.getElementById("result");

	result.value=div;
	
}

divBtn.addEventListener("click",division);