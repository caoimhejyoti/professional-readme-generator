// DESCRIPTION: node packages used within application.
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

//DESCRIPTION: links to generateMarkdown js file for exported packages.
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// DESCRIPTION: Array of questions for user input
const questions = [
    //DESCRIPTION: Generates README github badge with link to users profile - and confirms it is accurate.
    {name: "username",
    type: "input",
    message: "What is your GitHub username?",
    validate: function (value) {
        return axios.get(`https://api.github.com/users/${value}`)
            .then (data => {
                return true;
            })
            .catch (err => {
                return (`Please enter a valid GitHub username`);
            });
    }},
    //DESCRIPTION: Generates contents for README title
    {name: "title",
    type: "input",
    message: "What is the Title of this project?",
    },
    //DESCRIPTION: Generates contents for README description
    {name: "tagline",
    type: "input",
    message: "Provide a tag line for your project."
    },
    //DESCRIPTION: Generates contents for README description
    {name: "description",
    type: "input",
    message: "Describe the project in detail?",
    },
    //DESCRIPTION: Generates contents for README installation instructions
    {name: "installation",
    type: "input",
    message: "What are the installation instructions?",
    },
    //DESCRIPTION: Generates contents for README usage instructions
    {name: "usage",
    type: "input",
    message: "Do you have any usage information?",
    },
    //DESCRIPTION: Generates README liscense badge
    {name: "license",
    type: "list",
    message: "Select your license type?",
    choices: [
        'Apache license 2.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'Common Development and Distribution License 1.0',
        'Eclipse Public License 2.0',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'MIT',
        'Mozilla Public License 2.0',
        'No License'
    ],
    default: 'MIT'
    },
    //DESCRIPTION: Generates contents for README contribution instructions
    {name: "contributing",
    type: "input",
    message: "What are the contributing guidelines for this project?",
    },
    //DESCRIPTION: Generates contents for README testing instructions
    {name: "tests",
    type: "input",
    message: "Please provide any test instructions?",
    },
    //DESCRIPTION: Generates README email badge with link to create a new email to creator.
    {name: "email",
    type: "input",
    message: "What is your email address?",
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    }
];

// DESCRIPTION: function to write README file
function writeToFileFnc() {
    inquirer
        .prompt (questions)
            .then ((data) => {
                fs.writeFile(`${data.title}-README.md`, generateMarkdown(data), (err) =>
                err ? console.error(err) : console.log('ReadMe created!'))
            });
};

//DESCRIPTION: Function to initialize app
function initFnc() {
    writeToFileFnc();
}

//DESCRIPTION: Function call to initialize app
initFnc();
