//Program for priting the squares of odd Numbers from 1 to 100
function isOdd(var n){
	for(n=1;n<=100;n++){
		if(n%2==0){
		
      return false;
		}
		else{
			return true;
		}
		
	}
}

function calcSquare(){
  for(var i=1;i<=100;i++0){
    if(isOdd(i)==true){
      square=i*i;
      console.log("Square of "+i+" is "+square);
    }
  }
}	

calcSquare();