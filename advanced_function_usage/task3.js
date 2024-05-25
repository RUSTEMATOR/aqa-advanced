function devide(numerator, denominator){
    validator(numerator, denominator);
    return numerator / denominator;
} 

function validator(numerator, denominator){
    if (denominator === 0 || isNaN(denominator) || isNaN(numerator)) {
        throw new Error('Invalid arguments');
    }
}


try {
    console.log(devide(10, 2)); 
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log(devide(10, 0));
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Робота завершена");
}


try {
    console.log(devide("fa", 2)); 
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Робота завершена");
}


try {
    console.log(devide(10, "fa")); 
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Робота завершена");
}


try {
    console.log(devide("fa", "fa")); 
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Робота завершена");
}
