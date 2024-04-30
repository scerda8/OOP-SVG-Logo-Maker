const fs = require("fs");
const { ShapeType, Circle, Triangle, Square } = require("./shapes");

describe("SVG Logo Generating", () => {
  it("it should generate SVG logo with correct text and colors", () => {
    // Mocked user input
    const userInput = {
      text: "ABC",
      textColor: "orange",
      ShapeType: "Circle",
      shapeColor: "blue",
    };

    // Create new instances of ShapeType, Circle, Triangle, or Square based on user input
    let shapeObject;
    switch (userInput.ShapeType) {
      case "Circle":
        shapeObject = new Circle();
        break;
      case "Triangle":
        shapeObject = new Triangle();
        break;
      case "Square":
        shapeObject = new Square();
        break;
    }

    // Set colors for the shape and text
    shapeObject.setcolor(userInput.shapeColor);
    const textColor = userInput.textColor;

    // Render the shape and generate SVG content
    const svgEl = shapeObject.render();
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
            ${svgEl}
            <text x="150" y="120" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${userInput.text}</text>
        </svg>`;

    // Verify if the generated SVG content matches the expected result
    const Expectedsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="240">
            ${svgEl}
            <text x="150" y="120" font-family="Arial" font-size="24" fill="orange" text-anchor="middle">ABC</text>
        </svg>`;

    // Check if the generated SVG content matches the expected result
    expect(svgContent).toEqual(Expectedsvg);
  });
});