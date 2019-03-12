is_odd =function(number){
  
    if(number%2 != 0){
      return true;
    }else{
      return false;
    }
    
  
}


square_num = function(){
  for(i=1;i<=100;i++){
   if(is_odd(i)== true){
     square = i * i;
     console.log("square of " +i+ "is "+square);
  }
}
}
square_num();