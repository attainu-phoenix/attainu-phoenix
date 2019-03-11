//JavaScript Program for searching a value in array using for loop and function;


//Declaring Array
var arr=[];


//Function which takes array and value as an arguement;
function findPosOfValue(arr,val){
  for(var i=0;i<10;i++){
    if(arr[i]==val){
      console.log("Value found at position "+i);
      return i;
    }
    
  }
  console.log("Value not found"); 
  return -1;


}

//Calling function and passing array and value
findPosOfValue([10,20,30,40,50,60,70,80,90,100],70);