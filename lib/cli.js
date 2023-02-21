const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

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
                    message: 'Please enter up to three letters you would like on your logo.'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Please provide either a color keyword or hexadecimal number for you desired text color.'
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
                    message: `Please enter either a color keyword or hexadecimal number for your logo's shape color.`,
                }
            ])
            .then (({ text, color, shape, shapeColor }) => {
                this.details.push({ text, color, shape, shapeColor});
            });
    }
}

module.exports = CLI;