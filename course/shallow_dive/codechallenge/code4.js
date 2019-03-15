'use strict';

function arrayequal(array1, array2) {

    if (array1.length != array2.length) {
        return false
    } else {




        for (var i; i <= array1.length; i++) {

            if (array1[i] != array2[i]) {
                return false;
            }

        }

    }
    return true;



}
console.log(arrayequal([1, 2, 3], [1, 2, 3]));
// true
console.log(arrayequal([1, 2], [1, 2, 3]));
//false