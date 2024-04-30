//including packages needed for this app//
const inquirer = require('inquirer');
const fs = require('fs');
const {ShapeType, Circle, Triangle, Square} = require('./lib/shapes');

//Creating an array of questions for user input//

const questions=[
    {
    type: 'input',
      name: 'text',
      message: 'Enter logo text (up to three text characters):',
      validate: (input)=> input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'enter the text color (keyboard or a hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'choose from the list of shapes (triangle,circle,square):',
      choices: ['Circle','Triangle','Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'enter a shape color (keyboard or a hexadecimal number):',
    },
];

    inquirer.prompt(questions).then(((answers)=>{
        const { text, textColor, shapeType, shapeColor} = answers;
        const shapeobject= new ShapeType();
        let svgEl = "";

        shapeobject.setcolor(shapeColor);
    
        
        //Creating Function to generate the SVG logo based on user's input//

//function generateLogo(text,textColor,shapeType,shapeColor){


        switch(shapeType) {
            
            case 'Circle':
            const circle= new Circle();
           circle.setcolor(shapeColor);
           svgEl=circle.render();
           break;

           case 'Triangle':
           const triangle= new Triangle();
           triangle.setcolor(shapeColor);
           svgEl=triangle.render();
           break;

           case 'Square':
           const square= new Square();
           square.setcolor(shapeColor);
           svgEl=square.render();
           break;

           
}

var x= 150,
y=120;
if(shapeType === "Triangle"){
    y=135;
}else if (shapeType === "Square"){
    y= 145;
}


const svgContent=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" width="300" height="240">
${svgEl}
  <text x='${x}' y='${y}' 'font-family='Arial' 'font-size='24' fill='${textColor}' text-anchor='middle'>${text}</text>
  <svg>`;

fs.writeFileSync('logo.svg', svgContent);
console.log("Logo created!");
 }));
 