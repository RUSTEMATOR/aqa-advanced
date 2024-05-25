
//declaration
function rectangle_area_decl(width, height){
    return width * height;
}

//expression
const rectangle_area_expr = function(width, height){
    return width * height;
};

//arrow function
const rectangle_area_arrow = (width, height) => width * height
    


console.log(rectangle_area_decl(5, 10));

console.log(rectangle_area_expr(5, 10));

console.log(rectangle_area_arrow(5, 10));



