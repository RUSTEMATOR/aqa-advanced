//properties of the 1st car would be overwritten in that case
let car1 = {
  brand: "BMW",
  model: "X5",
  year: 2015,
};

let car2 = {
  brand: "Audi",
  model: "A4",
  year: 2018,
};

let car3 = { ...car1, ...car2 };

console.log(car3);

//in that case we'll preserve the properties of the 1st car

let car4 = {
  brandBMW: "BMW",
  modelBMW: "X5",
  yearBMW: 2015,
};

let car5 = {
  brandAudi: "Audi",
  modelAudi: "A4",
  yearAudi: 2018,
};

let car6 = { ...car4, ...car5 };
console.log("");
console.log(car6);
