/*Programm to find element in array  */

/* 
  Takes array  and number to be searched in array as 
  arguments
  
*/
const findElementInArray = (arr,number)=>{

    var arrayLength = arr.length;
   
    for(i=0;i<=arrayLength;i++){
      if(arr[i] == number){
        return i;
      }
    }
    return -1
  }
  
  /* Array  */
  var arr = [3,5,1,10,42,4,21,8,63,2]
  // Number to be searched in array 
  var findNumber = 42
  
  // Calling findElmentInArray function 
  console.log(findElementInArray(arr,findNumber));