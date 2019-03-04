// Getting button object 
button = document.getElementById("btn");

// If button is clicked do the following
btnClick = function() {
    alert("Hello, you clicked a button");
    alert("open the console");
    console.log("Hey thanks for opening console! Now you can close this web page.");
}

// Listening for button clicks
button.addEventListener("click", btnClick);