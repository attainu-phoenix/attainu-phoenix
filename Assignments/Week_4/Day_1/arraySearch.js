/*
Array search assingment that searches the desired number in the given array.
If the number is found it returns its posiiton else,
returns -1.
*/

// The array.

var array = [99, 100, 72, 89, 97, 35];

function search(array, number) {
  for (var i=0; i < array.length; i++) {
    if ( array[i] == number ) {
      return +i;
    }
  } return -1;
}

//The number that needs to be searched.
console.log(search(array, 35));