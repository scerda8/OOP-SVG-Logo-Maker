var {ShapeType}= require("./shapes"); // Import the ShapeType class

describe("ShapeType", () => {
  it("it should set the color property", () => {
    var shape = new ShapeType();
    shape.setcolor("red");
    expect(shape.color).toEqual("red");
  });

  it("it should update the color property", () => {
    var shape = new ShapeType();
    shape.setcolor("orange");
    shape.setcolor("purple");
    expect(shape.color).toEqual("purple");
  })});
