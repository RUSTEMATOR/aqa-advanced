function recursion(num) {
  if (num === 0) {
    return;
  } else {
    console.log(num);
    recursion(num - 1);
  }
}

recursion(10);

function whileFunc(num) {
  while (num > 0) {
    console.log(num);
    num -= 1;
  }
}
console.log("");
whileFunc(10);
