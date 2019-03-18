
'use strict';

var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4, 5];

var compare = function(array1, array2){
if(array1.length != array2.length){
  return false;
  
}

for(var i =0;i<=array1.length;i++){
  if(array1[i] == array2[i]){
    return true;
  }
  
}
return false;
}
var result = compare(array1, array2);
console.log(result);