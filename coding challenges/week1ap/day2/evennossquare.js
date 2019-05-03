// Imperative 
var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

var squares = [];

for(var i = 0; i < numbers.length; i = i + 1){
    
    if(numbers[i] % 2 == 0) {
        var result = numbers[i] * numbers[i];
        squares.push(result);
    }

}
console.log(squares);


// Functional 
var even = numbers.filter( function( a ) {return a % 2 == 0} );

var squares = even.map( function (a) {return a * a });
console.log(squares);