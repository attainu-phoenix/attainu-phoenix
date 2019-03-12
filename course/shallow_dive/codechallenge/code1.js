/* FIND ODD NUMBER UPTO 100 AND PRINT THERE SQUARE */


oddNumber = function(){
	var i, odd=0;

	for(i=0;i<=100;i++){
		if(i%2!=0){
		  SQUARE(i);
		}
	}
}


SQUARE = function(val){
   
    var sq =val;
    console.log(sq*sq);
}


oddNumber();