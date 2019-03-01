parNum = function () {

	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	resultObject = {
		"number1": number1,
		"number2": number2
	}
	return resultObject;
}

validateNum = function (getNum) {
	if (getNum.number1 == "" || getNum.number2 == "") {
		alert("please enter some numbers");
		return false;
	} else {
		return true;
	}
}


showResult = function (result) {
	resultElement = document.getElementById("result");
	resultElement.innerText = result;
}





//adiition 
addButton = document.getElementById("addButton");

addButton.addEventListener("click", function addOp() {
	getNum = parNum();
	if (validateNum(getNum) == false) {
		return;
	}
	sum = parseInt(getNum.number1) + parseInt(getNum.number2);

	showResult(sum);

})

//minus 


minButton = document.getElementById("minButton");
minButton.addEventListener("click", function minOp() {

	getNum = parNum();

	if (validateNum(getNum) == false) {
		return;
	}


	diff = parseInt(getNum.number1) - parseInt(getNum.number2);


	showResult(diff);

})

// Multiplication

mulButton = document.getElementById("mulButton");
mulButton.addEventListener("click", function mulOp() {

	getNum = parNum();

	if (validateNum(getNum) == false) {
		return;
	}
	mul = parseInt(getNum.number1) * parseInt(getNum.number2);


	showResult(mul);

})


//Dividation

divButton = document.getElementById("divButton");
divButton.addEventListener("click", function divOp() {

	getNum = parNum();

	if (validateNum(getNum) == false) {
		return;
	}

	div = parseInt(getNum.number1) / parseInt(getNum.number2);

	showResult(div);

})