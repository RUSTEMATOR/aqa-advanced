const users = [
  { firstname: "John", email: "lolkek@gmail.com", age: 30 },
  { firstname: "Jane", email: "pupagupa@gmail.com", age: 25 },
  { firstname: "Jack", email: "goparopa@gmail.com", age: 65 },
  { firstname: "Jill", email: "krokeroke@gmail.com", age: 88 },
];

for (const { firstname, age, email } of users) {
  console.log(`${firstname} has ${email} and is ${age} years old.`);
}
