var button = document.getElementById("button");
verify = () => {
  var result;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var result = document.getElementById("result");
  if (email == "lubenfrank48@gmail.com" && password == "luben") {
    result.innerText = "login Successful";
  } else {
    result.innerText =
      "Invalid credentials,Please enter the valid email and password";
  }
};

button.addEventListener("click", verify);
