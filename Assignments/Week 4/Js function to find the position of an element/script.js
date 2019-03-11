let arrayElements = [1, 75, 3, 45, 5, 6, 7, 93, 9, 10];


filter = (elementToFind, arrayElements) => {
    let i;
    for (i = 0; i < arrayElements.length; i += 1) {
        if (arrayElements[i] === elementToFind) {
            return i;
        }
    }
    return -1;
}

filter( /* Number To Find In Array */ , arrayElements);