function search(arr, elem) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4], 2));
