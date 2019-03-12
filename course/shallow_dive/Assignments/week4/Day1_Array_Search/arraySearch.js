arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

searchArray = function (searchValue, arr) {
    for(count = 0; count < arr.length; count++) {
        if(arr[count] == searchValue) {
            return count;
        }
    }

    return -1;
}

searchArray(40, arr);