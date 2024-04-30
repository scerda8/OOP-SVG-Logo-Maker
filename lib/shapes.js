//Exports `Triangle`, `Circle`, and `Square` classes//
class ShapeType{
    constructor(){
        this.color= "";
    }
    setcolor(color){
        this.color= color;
    }
};
class Triangle extends ShapeType {
    render() {
      return `<polygon points="150,50 50,150 250,150" fill="${this.color}" />`;
    }
  };
  
  class Circle extends ShapeType {
    render() {
      return `<circle cx="150" cy="150" r="75" fill="${this.color}" />`;
    }
  };
  
  class Square extends ShapeType {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`
    }
  };
  
  module.exports = { ShapeType, Triangle, Circle, Square };