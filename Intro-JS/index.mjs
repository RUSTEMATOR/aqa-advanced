import chalk from "chalk";
import readlineSync from "readline-sync"

console.log(chalk.blue("Hello world!"));


let player = {
    health: 100,
    attackPower: 15,
    defensePower: 10,
    score: 0,
    potions: 3
}

let roomsVisited = 0


function gameStart(){
    console.log(chalk.greenBright("Let's play a game!"));
    console.log(chalk.redBright("You have 3 lives"));
    console.log(chalk.underline.bgRed("This is for the testing purpouse") + chalk.bgWhiteBright.red("ONLY!"));
    encounterEnemy();
}


function encounterEnemy(){
    let enemyHealth = 50;
    console.log(chalk.redBright.bgBlueBright("You have encountered an enemy!"));

    while (enemyHealth > 0 && player.health > 0) {
        let action = readlineSync.question(chalk.grey.green("Do you want to attack(a), heal(h) or run(r)?"));

        switch (action.toLowerCase()) {
            case "a":
                console.log(chalk.redBright("You attacked the enemy!"));
                enemyHealth -= player.attackPower;
                console.log(chalk.blackBright.bgWhiteBright(`Enemy health is now ${enemyHealth}`));
                if (enemyHealth > 0) {
                    console.log(chalk.red("The enemy attacks you back!"));
                    player.health -= 10; 
                    console.log(chalk.blackBright.bgWhiteBright(`Your health is now ${player.health}`));
                }
                break;
            case "h":
                if (player.potions > 0) {
                    console.log(chalk.cyanBright("You use a potion!"));
                    player.health += 30; 
                    player.potions -= 1;
                    console.log(chalk.blackBright.bgWhiteBright(`Your health is now ${player.health}`));
                } else {
                    console.log(chalk.yellow("You have no potions left!"));
                }
                break;
            case "r":
                console.log(chalk.redBright("NO RUNNING AWAY SOLDIER!!!!!"));
                if (enemyHealth > 0) {
                    console.log(chalk.red("The enemy attacks you back!"));
                    player.health -= 10; 
                    console.log(chalk.blackBright.bgWhiteBright(`Your health is now ${player.health}`));
                }
                break;
        }

        if (player.health <= 0) {
            console.log(chalk.redBright.bgWhiteBright("You died!"));
            player.lives -= 1;
            console.log(chalk.blackBright.bgWhiteBright(`You have ${player.lives} lives left`));
            if (player.lives <= 0) {
                console.log(chalk.redBright.bgWhiteBright("You have no lives left!"));
                console.log(chalk.redBright.bgWhiteBright("GAME OVER!"));
                return; 
            } else {
            }
        }

        if (enemyHealth <= 0) {
            console.log(chalk.redBright.bgWhiteBright("You killed the enemy!"));
            player.score += 1;
            console.log(chalk.blackBright.bgWhiteBright(`Your score is now ${player.score}`));
            roomsVisited += 1;
            console.log(chalk.blackBright.bgWhiteBright(`You have visited ${roomsVisited} rooms`));
            enterNextRoom();
            return;
        }
    }
}   


function enterNextRoom(){
    if (player.health > 0) {
        let go = readlineSync.question(chalk.grey.green("Do you want to go to the next room (y/n)?"));
        if (go.toLowerCase() === "y") {
            console.log(chalk.redBright.bgWhiteBright("You go to the next room..."));
            encounterEnemy();
        } else {
            console.log(chalk.redBright.bgWhiteBright("Hesitation is critical, soldier!"));
            player.health -= 0;
            console.log(chalk.blackBright.bgWhiteBright(`Your health is now ${player.health}`));
            confirmDeath();
        }
    }
}

function confirmDeath(){
    if (player.health === 0) {
        console.log(chalk.redBright.bgWhiteBright("You died!"));
        player.lives -= 1;
        console.log(chalk.blackBright.bgWhiteBright(`You have ${player.lives} lives left`));
       
        if (player.lives <= 0) {
            console.log(chalk.redBright.bgWhiteBright("You have no lives left!"));
            console.log(chalk.redBright.bgWhiteBright("GAME OVER!"));
            }
    }
}



gameStart();