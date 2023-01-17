// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is the Title of this project?",
    name: "title",
    required: true,
    },
    {type: "input",
    message: "Describe the project?",
    name: "description",
    required: true,
    },
    // FIXME: this needs to be populated based on the questions answered, not a user inputed element. Table of contents is a list of links for each section of the file.
    //{type: "input",
    // message: "Give us a brief personal bio?",
    // name: "table-of-contents",
    // },
    {type: "input",
    message: "What are the installation instructions?",
    name: "installation",
    required: true,
    },
    {type: "input",
    message: "Do you have any usage information?",
    name: "usage",
    },
    //FIXME: When user selects the license type - produce a badge at the top of the README file.
    // {type: "input",
    // message: "What is your GitHub URL?",
    // name: "license",
    // },
    {type: "input",
    message: "What are the contributing guidelines for this project?",
    name: "contributing",
    },
    {type: "input",
    message: "Please provide any test instructions?",
    name: "tests",
    },
    // FIXME: this information will create a link to the users github profile within questions
    {type: "input",
    message: "What is your GitHub username?",
    name: "username",
    required: true,
    },
    // FIXME: this information will create a link to the users email address within questions
    {type: "input",
    message: "What is your email address?",
    name: "email",
    required: true,
    },
];

inquirer
.prompt(questions);








// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
