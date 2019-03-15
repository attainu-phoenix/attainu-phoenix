

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2, 3, 4, 5];

var arr3 = [1, 2, 3, 4, 5];
var arr4 = [2, 3, 4, 5];

var arrayCompare = function (array1, array2) {

if(array1.length == array2.length) {
  for(var i = 0; i < array1.length; i++){
    if(array1[i] == array2[i]) {
        return true;
      }
    }
  }
  return false;
}
console.log(arrayCompare(array1, array2));

console.log(arrayCompare(arr3, arr4));
