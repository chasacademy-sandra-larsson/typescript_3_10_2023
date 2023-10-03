"use strict";
const circleArea = (circle) => { return Math.PI * circle.radius ** 2; };
const rectangleArea = (rectangle) => { return rectangle.width * rectangle.height; };
const calculateArea = (shape) => {
    switch (shape.type) {
        case "circle":
            return circleArea(shape); // Type assertion
            break;
        case "square":
            return rectangleArea(shape);
            break;
        default:
            throw new Error("Unknown shape");
    }
};
const circle = {
    type: "circle",
    radius: 10
};
const rectangle = {
    type: "square",
    width: 10,
    height: 10
};
console.log(calculateArea(circle));
const shapes = [circle, rectangle];
