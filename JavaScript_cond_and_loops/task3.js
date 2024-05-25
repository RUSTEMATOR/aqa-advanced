const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function multiplicationTableFor(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}


function multiplicationTableWhile(number) {
    let i = 1;
    while (i <= 10) {
        console.log(`${number} * ${i} = ${number * i}`);
        i++;
    }
}


function chooseFunction() {
    readline.question("Do you want to use a while loop or a for loop? ", choose => {
        switch (choose.toLowerCase()) {
            case "while":
                readline.question("Please enter a number: ", number => {
                    console.log(`The multiplication table of ${number} is:`);
                    multiplicationTableWhile(number);
                    readline.close();
                });
                break;
            case "for":
                readline.question("Please enter a number: ", number => {
                    console.log(`The multiplication table of ${number} is:`);
                    multiplicationTableFor(number);
                    readline.close();
                });
                break;
        }
    });
}

chooseFunction();
