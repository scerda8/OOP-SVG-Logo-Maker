// Jest tests for shapes//
const { ShapeType, Circle, Triangle, Square } = require("./shapes");

describe("ShapeType", () => {
  it("it should set the color property", () => {
    const shape = new ShapeType();
    shape.setcolor("orange");
    expect(shape.color).toEqual("orange");
  });
});

describe("Triangle", () => {
  it("it should render a triangle", () => {
    const triangle = new Triangle();
    triangle.setcolor("blue");
    const expected = '<polygon points="150,50 50,150 250,150" fill="blue" />';
    expect(triangle.render()).toEqual(expected);
  });
});

describe("Circle", () => {
  it("it should render a circle", () => {
    const circle = new Circle();
    circle.setcolor("purple");
    const expected = '<circle cx="150" cy="150" r="75" fill="purple" />';
    expect(circle.render()).toEqual(expected);
  });
});

describe("Square", () => {
  it("it should render a square", () => {
    const square = new Square();
    square.setcolor("pink");
    const expected =
      '<rect x="50" y="50" width="200" height="200" fill="pink" />';
    expect(square.render()).toEqual(expected);
  });
});