let arrayElements = [1, 75, 3, 45, 5, 6, 7, 93, 9, 10];



filter = (userInput, arrayElements) => {
    let i;
    for (i = 0; i < arrayElements.length; i += 1) {
        if (arrayElements[i] === parseInt(userInput)) {
            return i;
        }
    }
    return -1;
}

listen = document.getElementById("lis");
listen.addEventListener("click", () => {


    result = document.getElementById("userop")

    userInput = document.getElementById("user").value;
    
    funresult = filter(userInput, arrayElements);


    result.innerText = funresult;
})



