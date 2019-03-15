"use strict";

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 5, 4];

let arrayCompare = function(a, b) {
  if (a.lenth != b.lenth) {
    return false;
  } else {
    for (let i = 0; i <= a.length; i++) {
      if (a[i] != b[i]) {
        return false;
      }
    }
  }
  return true;
};
arrayCompare(array1, array2);
