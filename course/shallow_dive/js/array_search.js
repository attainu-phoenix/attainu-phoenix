//ASSIGNMENT FOR ARRAY SEARCH 

/* 

 Complexity of program is O(n) 

 */

//INIT OF ARRAY
var array = [1,2,3,4,5,6,7,8,9,10];


//FUNCTION FOR SEARCH 
/*  
 Logic -> Loop Through the array from start to end -> if no found return true ->
 else continue looping if end of loop
 no not found return null ;
*/
function Search(arr, ele) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == ele) {
      return "Number Found at Location "+i;
    }
  } return -1;
}


//Function call to run the program
console.log(Search(array, 3)); // returns index of 3 i.e 2
console.log(Search(array, 12)); // returns Null