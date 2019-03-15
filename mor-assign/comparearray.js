
'use strict'
var array1 =[22,44,55,66];
var array2 =[22, 44,55,66];
var comparearray= function(){

  if(array1.lenght == array2.lenght){
    console.log("arrays are equal");
  }else{
    console.log("arrays are not equal");
  }
  for (var i=0;i<=array1.lenght;i++){
    for(var j=0;j<=array2.lenght;j++){
        if(array1[i] == array2[j]){
          console.log(array1[i]= array2[j])
        }else{
          console.log("not equal");
        }

    }
  

 }
}
comparearray();