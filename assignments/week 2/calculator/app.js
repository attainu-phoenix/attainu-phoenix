var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("divi");

var result;
func = op => {
  switch (op) {
    case "+":
      result = num1 + num2;
      console.log(result);
      break;
    case "-":
      result = num1 - num2;
      console.log(result);
      break;
    case "*":
      result = num1 * num2;
      console.log(result);
      break;
    case "/":
      result = num1 / num2;
      console.log(result);
      break;
  }
  res.innerText = result;
};

// function adds(a) {
//   console.log("hey");
// }
// add.addEventListener("click", adds);

add.addEventListener("click", funct(add.value));

sub.addEventListener("click", func(sub.value));

mul.addEventListener("click", func(mul.value));

divi.addEventListener("click", func(divi.value));
