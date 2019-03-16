'use strict';

var number1=[1,2,3,18,22];
var number2=[15,26,16,33,65,70];
var i = [];

var compareArr = function(number1, number2){
if (number1.length !== number2.length){
  return false;
}

else {
 for (i=0; i<number1.length; i++) {
    if(number1[i]!=number2[i]){
      return false
    }
  }
  return true
}
}
compareArr(number1,number2);