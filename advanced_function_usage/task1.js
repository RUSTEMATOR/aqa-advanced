function handleNum(num, callback1, callback2) {
  if (num % 2 === 0) {
    callback1(num);
  } else {
    callback2(num);
  }
}

const handleEven = () => console.log("The number is even");

const handleOdd = () => console.log("The number is odd");

handleNum(10, handleEven, handleOdd);

handleNum(3, handleEven, handleOdd);
