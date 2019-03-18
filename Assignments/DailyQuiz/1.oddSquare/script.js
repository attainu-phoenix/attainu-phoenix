'use strict';
var isOdd = function (num) {
    if ( num % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

var oddSquare = function (num) {
    return num * num;
}

for (var i=1; i <= 100; i++) {
    if ( isOdd(i) === true ) {
        var result = oddSquare(i);
        console.log(i,result);
    }
}