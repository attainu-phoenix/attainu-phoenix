'use strict';

var fs = require("fs");


var messageWriter = function(fileName, message, n) {
    var data = "";
    for(var i = 1; i <= n; i = i + 1) {
        data = data + message;
    }

    fs.writeFile(fileName, data, function(err) {
        if(err) {
            console.log("Error While Writing");
        } else {
            console.log("File written successfully")
        }

    })
}

messageWriter("hello.txt", "Welcome to AttainU\n", 100);
