parNum = function () {

	number1 = parseInt(document.getElementById("num1").value);
	number2 = parseInt(document.getElementById("num2").value);
	resultObject = {
		"number1": number1,
		"number2": number2
	}
	return resultObject;
}


showResult = function (result) {
	resultElement = document.getElementById("result");
	resultElement.innerText = result;
}





//adiition 
addButton = document.getElementById("addButton");

addButton.addEventListener("click", function addOp() {
	getNum = parNum();

	sum = getNum.number1 + getNum.number2;

	showResult(sum);

})

//minus 


minButton = document.getElementById("minButton");
minButton.addEventListener("click", function minOp() {

	getNum = parNum();
	diff = getNum.number1 - getNum.number2;
	showResult(diff);

})

// Multiplication

function mulButton() {

	getNum = parNum();
	mul = getNum.number1 * getNum.number2;
	showResult(mul);

}


//Dividation

function divButton() {

	getNum = parNum();
	div = getNum.number1 / getNum.number2;
	showResult(div);
}