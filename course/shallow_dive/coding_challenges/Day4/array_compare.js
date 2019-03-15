'use strict';

var array1 = [25, "yellow", "blue", 655, "red", "green", 24, "maroon", "teal", 42, "orange"];
var array2 = [25, "yellow", "blue", 655, "red", "green", 24, "maroon", "teal", 42, "orange"];

var array3 = [25, "blue", "teal", 655, "red", "green", 24, "maroon", "yellow", 42, "orange"];
var array4 = [25, "yellow", "blue", 655, "red", "green", 24, "maroon", "teal", 42, "orange"];

var arrayCompare = function(arr1, arr2) {
  if(arr1.length == arr2.length) {
    for(var counter=0; counter<arr1.length; counter=counter+1) {
      if(arr1[counter] != arr2[counter]) {
        return false;
      }
    }
  }
  return true;
}

console.log(arrayCompare(array1, array2));

console.log(arrayCompare(array3, array4));