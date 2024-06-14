//declaration
function rectangleAreaDecl(width, height) {
  return width * height;
}

//expression
const rectangleAreaExpr = function (width, height) {
  return width * height;
};

//arrow function
const rectangleAreaArrow = (width, height) => width * height;

console.log(rectangleAreaDecl(5, 10));

console.log(rectangleAreaExpr(5, 10));

console.log(rectangleAreaArrow(5, 10));
