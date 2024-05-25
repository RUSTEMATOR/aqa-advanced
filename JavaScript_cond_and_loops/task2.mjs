import chalk from 'chalk';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter your mark in the grade tracking system: ', grade => {
    console.log(`Clear, your mark ${grade} has been recorded`)
    gradeEvaluator(grade);
    rl.close();

})



function gradeEvaluator(grade){
    grade = Number(grade);

    switch (true){
        case grade >= 91 && grade <= 100:
            console.log(`Mark acception confirmed, your grade is: Відмінно\n Thank you for using our grade tracking system`)
            break;

        case grade >= 81 && grade <= 90:
            console.log(`Mark acception confirmed, your grade is: Дуже добре\n Thank you for using our grade tracking system`)
            break;
        
        case grade >= 71 && grade <= 80:
            console.log(`Mark acception confirmed, your grade is: Добре\n Thank you for using our grade tracking system`)
            break;
        
        case grade >= 60 && grade <= 70:
            console.log(`Mark acception confirmed, your grade is: Задовільно\n Thank you for using our grade tracking system`)
            break;
        
        case grade >= 51 && grade <= 60:
            console.log(`Mark acception confirmed, your grade is: Незадовільно\n Thank you for using our grade tracking system`)
            break;
        
        default:
            console.log(chalk.bgRedBright("System error, exception has been spotted. Wait for the overseer's arrival"))
            break;
    }
}

 