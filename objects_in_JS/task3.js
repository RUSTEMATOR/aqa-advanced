//properties of the 1st car would be overwritten in that case
let car1 = {
    brand: 'BMW',
    model: 'X5',
    year: 2015}

let car2 = {
    brand: 'Audi',
    model: 'A4',
    year: 2018
}

let car3 = {...car1, ...car2}

console.log(car3)



//in that case we'll preserve the properties of the 1st car

let car4 = {
    brand_BMW: 'BMW',
    model_BMW: 'X5',
    year_BMW: 2015}

let car5 = {
    brand_Audi: 'Audi',
    model_Audi: 'A4',
    year_Audi: 2018
}

let car6 = {...car4, ...car5}
console.log("")
console.log(car6)