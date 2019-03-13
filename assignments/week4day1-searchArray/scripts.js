arr = ["apple", "banana", "grapes","mango"];

searchArray = function (searchValue, arr) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == searchValue) {
            return i;
        }
    }

    return -1;
}

document.getElementById("result").innerText = searchArray("mango", arr);
