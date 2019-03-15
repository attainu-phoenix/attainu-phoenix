"use strict";

var arrayCompare = (array1,array2) =>  {
  if(array1.length !== array2.length) {
    return false;
  }
  else{
    for(var i=0;i<array1.length;i++) {
      if(array1[i] !== array2[i]){
        return false;
      }
    }
  }
  return true;
}




//Not equal arrays
// arrayCompare([25, "yellow", "blue", 655],["yellow", 25,  "blue", 655])

//equal arrays
// arrayCompare([1, 2, 3, 4],[1, 2, 3, 4])