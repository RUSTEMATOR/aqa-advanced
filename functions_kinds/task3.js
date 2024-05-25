const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let nails = 1234

function checkOrder (available) {
    readline.question("Please enter the number of nails to order: ", ordered => {
    if (ordered <= available) {
        nails = available - ordered;
        console.log(`You ordered ${ordered} nails. We have ${available} nails left.`)
        orderLoop();
    } else {
        console.log(`Sorry, we don't have enough nails. We have ${available} nails left.`);
        channgeOrder();
        }
    });
}

function orderLoop(){
    readline.question("Would you like to order more nails? (y/n)", answer => {
        if (answer === "y") {
            checkOrder(nails);
        } else {
            console.log("Thank you for shopping with us!");
            readline.close();
        }
    });
}

function channgeOrder(){
    readline.question("Would you like to change your order? (y/n)", answer => {
        if (answer === "y") {
            checkOrder(nails);
        } else {
            console.log("Thank you for shopping with us!");
            readline.close();
        }
    });
}

checkOrder(nails);

