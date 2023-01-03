// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the Title of the project?",
    name: "Title"
    
},{
    type: "input",
    message: "What is the project about? Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: 1. What was your motivation? 2. Why did you bild this project? 3. What problem does it solve? 4. What did you learn?",
    name: "Description"
},{
    type: "input",
    message: "If your README is long, add a table of contents to make it easy for users to find what they need.",
    name: "Table of Contents(Optional)"
},{
    type: "input",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "Installation"
},{
    type: "input",
    message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an 'assests/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using ![alt text](assets/images/screenshot.png)",
    name: "Usage"
},{
    type: "input",
    message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    name: "Credits"
},{
    type: "input",
    message: "Choose a license, If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). Choices:['MIT', 'IASC']", 
    name: "Licenses"
},{
    type: "input",
    message: "List badges(optional), refer to![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)",
    name: "Badges"
},{
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "Features"
},{
    type: "input",
    message: "If your want to contribute please contact me via",
    name: "Contribute"
},{
    type: "input",
    message: "List tests for your application and provide examples how to turn them here.",
    name: "Tests"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
