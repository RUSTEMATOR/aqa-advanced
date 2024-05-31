
const users = [
    {firstname: 'John', email: 'lolkek@gmail.com', age: 30},
    {firstname: 'Jane', email: 'pupagupa@gmail.com', age: 25},
    {firstname: 'Jack', email: 'goparopa@gmail.com', age: 65},
    {firstname: 'Jill', email: 'krokeroke@gmail.com', age: 88},
]


for (const people of users) {
    console.log(`${people.firstname} has ${people.email} and is ${people.age} years old.`)
}
console.log("")
console.log("")


const [first, second, third, fourth] = users;

console.log(first);
console.log(fourth);
console.log(third);