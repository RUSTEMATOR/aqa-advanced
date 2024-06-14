const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("May I have your ID card, please? ", (age) => {
  console.log(`I see, your age is ${age}`);
  checkAge(age);
  readline.close();
});

function checkAge(age) {
  if (age >= 18) {
    console.log("You are old enough to view this content");
    return true;
  } else {
    console.log("Access denied, you are not old enough to view this content");
    return false;
  }
}
