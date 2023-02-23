const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Square } = require('./shapes');

class CLI {
    constructor() {
        this.title = '';
        this.details = [];
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter up to three letters you would like on your logo.',
                    validate: function (input) {
                        if (input.length > 3) {
                            throw new Error('You have entered more than 3 characters!');
                        }
                        return true;
                    },
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Please provide either a color keyword or hexadecimal number for you desired text color (e.g. "red", "#FF0000").'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select a shape for your logo from the provided list.',
                    choices: ['Circle', 'Triangle', 'Square'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: `Please enter either a color keyword or hexadecimal number for your logo's shape color (e.g. "red", "#FF0000").`,
                }
            ])
            .then((response) => {
                this.details.push(response);
                console.log(this.details);

                let newShape;
                switch (response.shape) {
                    case "Circle":
                        newShape = new Circle(response.shapeColor, response);
                        break;
                    case "Triangle":
                        newShape = new Triangle(response.shapeColor, response);
                        break;
                    case "Square":
                        newShape = new Square(response.shapeColor, response);
                        break;
                }

                const svgCode = `
                <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    ${newShape.render()}
                    <text x="50%" y="50%" fill="${response.color}" font-size="80" dominant-baseline="middle" text-anchor="middle">${response.text}</text>
                </svg>
                `;

                console.log(svgCode);

                writeFile('logo.svg', svgCode, (err) => {
                    if (err) throw err;
                    console.log('Generated logo.svg!');
                })
            });
    }
}

module.exports = CLI;