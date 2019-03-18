'use strict';

var arrayCompare = function (array1, array2) {

    if (array1.length != array2.length) {
        return false;
    }

    for(var i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
};


var a = ["Mousam", 2, 5, 4, 100];
var b = ["Mousam", 2, 5, 4];

var result = arrayCompare(a, b);
console.log(result);