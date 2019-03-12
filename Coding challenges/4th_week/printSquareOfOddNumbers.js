//Program for priting the squares of odd Numbers from 1 to 100

for(var i=1;i<=100;i++){
  //Condition for checking whether number is odd.
  if((i%2)==0){
    console.log(" ");
  }
  else{
	  //Calculating the square.
    var square=i*i;
    console.log("The square of "+i+" is "+square);
    
  }
}