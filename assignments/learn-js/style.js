/*Get button object in our code
Listen for button clicks
If button is clicked, say Hello.
*/

button = document.getElementById("button");

button_click = function() {
    console.log("Hello");
    alert("Hello");
}

button.addEventListener("click", button_click);


