const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter a number:", number => {
    console.log(`The multiplication table of ${number} is:`);
    multiplicationTable(number);
    readline.close();
})

function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

