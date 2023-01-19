// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    message: "What is the Title of this project?",
    name: "title",
    },
    {type: "input",
    message: "Describe the project?",
    name: "description",
    },
    // FIXME: this needs to be populated based on the questions answered, not a user inputed element. Table of contents is a list of links for each section of the file.
    //{type: "input",
    // message: ,
    // name: "table-of-contents",
    // },
    {type: "input",
    message: "What are the installation instructions?",
    name: "installation",
    },
    {type: "input",
    message: "Do you have any usage information?",
    name: "usage",
    },
    {type: "list",
    message: "Select your lisence type?",
    name: "license",
    choices: [
        {
            name:"Academic Free License v3.0",
            licenseBadge: "![Academic Free v3.0](https://img.shields.io/badge/License-Academic_Free_v3.0-purple?style=for-the-badge)"
        }, 
        {
            name:"Apache license 2.0",
            licenseBadge: "![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-purple?style=for-the-badge)"
        } 
    ]
    // "Apache license 2.0", 
    // "Artistic license 2.0", 
    // "Boost Software License 1.0", 
    // "BSD 2-clause license",
    // "BSD 3-clause license",
    // "Creative Commons license",
    // "Do What The F*ck You Want To Public License",
    // "Educational Community License v2.0",
    // "Eclipse Public License 1.0",
    // "Eclipse Public License 2.0",
    // "European Union Public License 1.1",
    // "GNU Affero General Public License v3.0",
    // "GNU General Public License v2.0",
    // "GNU General Public License v3.0",
    // "GNU Lesser General Public License v2.1",
    // "GNU Lesser General Public License v3.0",
    // "ISC",
    // "LaTeX Project Public License v1.3c",
    // "Microsoft Public License",
    // "MIT",
    // "Mozilla Public License 2.0",
    // "Open Software License 3.0",
    // "PostgreSQL License",
    // "SIL Open Font License 1.1",
    // "University of Illinois/NCSA Open Source License",
    // "The Unlicense",
    // "zLib License"]
    },
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
    },
    // FIXME: this information will create a link to the users email address within questions
    {type: "input",
    message: "What is your email address?",
    name: "email",
    },
];


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
function writeToFile() {
    inquirer
        .prompt(questions)
            .then ((data) => {
                fs.appendFile(`${data.title}-README.md`, generateMarkdown(data), (err) =>
                err ? console.error(err) : console.log('ReadMe appended!')
                )
            });
};
// // TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// // Function call to initialize app
init();
