oddNumbers = function(num) {
    if(num%2 !== 0 ) {
        return true;}
        else{return false;
      }
    }

square = function(num) {
    return num*num;
} 

for(num = 1; num <= 100; num++){
  if (oddNumbers(num)== true) {
   console.log (square(num));
  }
}