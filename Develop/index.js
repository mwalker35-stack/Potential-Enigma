// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require("path");
console.log("readme is running")
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the Title of the project?",   
},{
    type: "input",
    name: "Description",
    message: "What does the project do?",
},{
    type: "input",
    name: "Installation",
    message: "What programs or installation was needed?",
},{
    type: "input",
    name: "Usage",
    message: "How do you use this app, example?",
},{
    type: "input",
    name: "Contributing",
    message: "List your collaborators",
},{
    type: "list",
    name: "license",
    message: "Select a license to use?",
    choices: ["None", "Apache2.0", "GNUv3.0", "MIT"],
    validate: licenseSelect = () => {
        if (licenseSelect = true) {
            return true;
        } else {
            console.log('Select one license or none')
            return false;
        }
    }
},{
    type: "input",
    name: "Tests",
    message: "Please enter test instructions.",
},{
    type: "input",
    name: "Email",
    message: "What is your Email?",
},{
    type: "input",
    name: "GitHub",
    message: "What is your GitHub Name?",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You can view your ReadMe now!")
    })
}

// TODO: Create a function to initialize app

function init() {
   inquirer.prompt(questions)
    .then((userInput)=> {
        console.log(userInput)
        writeToFile("./README.md", generateMarkdown(userInput)); 
    })

}

//Function call to initialize app
init();
