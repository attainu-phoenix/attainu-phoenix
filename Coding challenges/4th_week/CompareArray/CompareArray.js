var array1=[1,2,"ab"];
var array2=[1,2,"ab"];

function arrayCompare(array1,array2){
   
  if(array1.length != array2.length) {
    return false;
  }
  else{
    for(var i=0;i<array1.length;i++) {
      if(array1[i] != array2[i]){
        return false;
      }
    }
  }
  return true;

}
console.log(arrayCompare(array1,array2));