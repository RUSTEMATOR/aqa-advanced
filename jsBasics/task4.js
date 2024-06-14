function circleArea() {
  let radius = 10;
  let area = Math.PI * radius ** 2;
  console.log(`Area of the circle is ${area.toFixed(2)}`);
}

function triangleArea() {
  let length = 10;
  let width = 5;
  let area = length * width;
  console.log(`Area of the triangle is ${area.toFixed(2)}`);
}

function cylinderVolume() {
  let radius = 10;
  let height = 5;
  let volume = Math.PI * radius ** 2 * height;
  console.log(`Area of the cylinder is ${volume.toFixed(2)}`);
}

//task 4.1
circleArea();

//task 4.2
triangleArea();

//task 4.3
cylinderVolume();
