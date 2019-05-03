'use strict';

var convert = function(number) {

    var names = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]

    var finalWord = "";

    while(number > 0) {
        var digit = number % 10;
        finalWord = names[digit] + " " + finalWord;
        number = Math.floor(number / 10);
    }
    return finalWord;
}

console.log(convert(99));