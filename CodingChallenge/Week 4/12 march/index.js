oddNum = () => {
    let i;
    for (let i = 1; i <= 100; i++) {
        if ((i % 2) != 0) {
            return i;
        }
    }
    return;
}


squareFun = () => {
    oddNumFun = oddNum();

    square = oddNumFun.i ** 2;


}

squareFun();