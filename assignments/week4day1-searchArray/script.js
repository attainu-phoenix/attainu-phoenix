function search (counter, fruits) {
    
    var i;
    
    for (i = 0; i < fruits.length; i++) {
    
        if (fruits[i] == counter) {
            return i;
        }
    }
    
    return -1;
}

document.getElementById("result").innerText= search("apple", ["apple", "banana", "grapes","mango"]);