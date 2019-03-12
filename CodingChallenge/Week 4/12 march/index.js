oddNum = function(i) {
  if (i % 2 != 0) {
    return i;
  } else {
    return null;
  }
};

resultFun = function(i) {
  return i * i;
};

loopFun = function() {
  for (let i = 0; i <= 100; i++) {
    if (oddNum(i) == i) {
      console.log(resultFun(i));
    }
  }
};

loopFun();
