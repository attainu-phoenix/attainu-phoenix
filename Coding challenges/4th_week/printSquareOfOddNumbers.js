//Program for priting the squares of odd Numbers from 1 to 100
function isOdd(n){
    if(n%2!=0){
      return true;
    }else{
      return false;
    }
}


function calcSq(){
  for(i=1;i<=100;i++){
   if(isOdd(i)==true){
     square=i*i;
     console.log("square of " +i+ "is "+square);
  }
}
}
calcSq();
