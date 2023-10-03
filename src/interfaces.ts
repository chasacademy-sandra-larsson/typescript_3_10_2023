
// Konvention att använde "Base-" i bas-interfacet
interface BaseShape {
    type: string
}

interface Circle extends BaseShape  {
    radius: number;
}

interface Rectangle extends BaseShape {
    width: number;
    height: number;
}

const circleArea = (circle: Circle) => {return Math.PI * circle.radius ** 2;}

const rectangleArea = (rectangle: Rectangle) => {return rectangle.width * rectangle.height;}


const calculateArea = (shape: BaseShape) => {


    switch(shape.type) {
        case "circle":
            return circleArea(shape as Circle); // Type assertion
            break;
        case "square": 
            return rectangleArea(shape as Rectangle);
            break;
        default:
            throw new Error("Unknown shape")
    }


}

const circle: Circle = {
    type: "circle",
    radius: 10
}
const rectangle: Rectangle = {
    type: "square",
    width: 10,
    height: 10
}

console.log(calculateArea(circle))

const shapes: BaseShape[] = [circle, rectangle]