// To check if the number is odd
checkOdd = i => {
  if (i % 2 != 0) {
    return i;
  }
  return -1;
};

// find the square of the number
square = i => {
  return i * i;
};

findSquare = () => {
  for (var i = 1; i <= 100; i++) {
    if (checkOdd(i) != -1) {
      console.log(square(i));
    }
  }
};

findSquare();
