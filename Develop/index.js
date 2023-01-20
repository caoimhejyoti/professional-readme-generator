// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown.js`);
// TODO: Create an array of questions for user input
const questions = [
    {name: "title",
    type: "input",
    message: "What is the Title of this project?",
    },
    {name: "description",
    type: "input",
    message: "Describe the project?",
    },
    {name: "installation",
    type: "input",
    message: "What are the installation instructions?",
    },
    {name: "usage",
    type: "input",
    message: "Do you have any usage information?",
    },
    {name: "license",
    type: "list",
    message: "Select your lisence type?",
    choices: [
        {
            name:"Academic Free License v3.0",
            value: "![Academic Free v3.0](https://img.shields.io/badge/License-Academic_Free_v3.0-purple?style=for-the-badge)"
        }, 
        {
            name:"Apache license 2.0",
            value: "![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-purple?style=for-the-badge)"
        }, 
        {
            name:"Artistic license 2.0",
            value:"![Artistic 2.0](https://img.shields.io/badge/License-Artistic_2.0-purple?style=for-the-badge)" 
        },
        {
            name:"Boost Software License 1.0",
            value:"![Boost Software 1.0](https://img.shields.io/badge/License-boost_software_1.0-purple?style=for-the-badge)"
        },
        {
            name:"BSD 2-clause license",
            value:"![BSD 2-clause Simplified](https://img.shields.io/badge/License-BSD_2--clause_Simplified-purple?style=for-the-badge)"
        },
        {
            name:"BSD 3-clause license",
            value:"![BSD 3-clause Clear](https://img.shields.io/badge/License-BSD_3--clause_clear-purple?style=for-the-badge)"
        },
        {
            name:"Creative Commons license", 
            value:"![Creative Commons](https://img.shields.io/badge/License-Creative_Commons-purple?style=for-the-badge) "
        },
        {
            name:"Do What The F*ck You Want To Public License", 
            value: "![Do What The F*ck You Want To Public License](https://img.shields.io/badge/License-Do_What_The_F*ck_You_Want_To_Public-purple?style=for-the-badge)"
        },
        {
            name:"Educational Community License v2.0", 
            value:"![Eclipse Public License 1.0](https://img.shields.io/badge/License--purple?style=for-the-badge)"
        },
        {
            name:"Eclipse Public License 1.0", 
            value:"![](https://img.shields.io/badge/License-Eclipse_Public_1.0-purple?style=for-the-badge)"
        },
        {
            name:"Eclipse Public License 2.0", 
            value:"![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse_Public_2.0-purple?style=for-the-badge)"
        },
        {
            name:"European Union Public License 1.1", 
            value:"![European Union Public License 1.1](https://img.shields.io/badge/License-European_Union_Public_1.1-purple?style=for-the-badge)"
        },
        {
            name:"GNU Affero General Public License v3.0", 
            value:"![GNU Affero General Public License v3.0](https://img.shields.io/badge/License-GNU_Affero_General_Public_v3.0-purple?style=for-the-badge)"
        },
        {
            name:"GNU General Public License v2.0", 
            value:"![GNU General Public License v2.0](https://img.shields.io/badge/License-GNU_General_Public_v2.0-purple?style=for-the-badge)"
        },
        {
            name:"GNU General Public License v3.0", 
            value:"![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU_General_Public_v3.0-purple?style=for-the-badge)"
        },
        {
            name:"GNU Lesser General Public License v2.1", 
            value:"![GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-GNU_Lesser_General_Public_v2.1-purple?style=for-the-badge)"
        },
        {
            name:"GNU Lesser General Public License v3.0", 
            value:"![GNU Lesser General Public License v3.0](https://img.shields.io/badge/License-GNU_Lesser_General_Public_v3.0-purple?style=for-the-badge)"
        },
        {
            name:"ISC", 
            value:"![ISC](https://img.shields.io/badge/License-ISC-purple?style=for-the-badge)"
        },
        {
            name:"LaTeX Project Public License v1.3c", 
            value:"![LaTeX Project Public License v1.3c](https://img.shields.io/badge/License-LaTeX_Project_Public_v1.3c-purple?style=for-the-badge)"
        },
        {
            name:"Microsoft Public License", 
            value:"![Microsoft Public License](https://img.shields.io/badge/License-Microsoft_Public-purple?style=for-the-badge)"
        },
        {
            name:"MIT",
            value:"![MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)"
        },
        {
            name:"Mozilla Public License 2.0", 
            value:"![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-purple?style=for-the-badge)"
        },
        {
            name:"Open Software License 3.0", 
            value:"![Open Software License 3.0](https://img.shields.io/badge/License-Open_Software_3.0-purple?style=for-the-badge)"
        },
        {
            name:"PostgreSQL License", 
            value:"![PostgreSQL License](https://img.shields.io/badge/License-PostgreSQL-purple?style=for-the-badge)"
        },
        {
            name:"SIL Open Font License 1.1", 
            value:"![SIL Open Font License 1.1](https://img.shields.io/badge/License-SIL_Open_Font_1.1-purple?style=for-the-badge)"
        },
        {
            name:"University of Illinois/NCSA Open Source License", 
            value:"![University of Illinois/NCSA Open Source License](https://img.shields.io/badge/License-University_of_Illinois/NCSA_Open_Source-purple?style=for-the-badge)"
        },
        {
            name:"The Unlicense", 
            value:"![The Unlicense](https://img.shields.io/badge/License-The_Unlicense-purple?style=for-the-badge)"
        },
        {
            name:"zLib License", 
            value:"![zLib License](https://img.shields.io/badge/License-zLib-purple?style=for-the-badge)"
        }
    ]},
    {name: "contributing",
    type: "input",
    message: "What are the contributing guidelines for this project?",
    },
    {name: "tests",
    type: "input",
    message: "Please provide any test instructions?",
    },
    // DESCRIPTION: this information will create a link to the users github profile within questions
    {name: "username",
    type: "input",
    message: "What is your GitHub username?",
    },
    // DESCRIPTION: this information will create a link to the users email address within questions
    {name: "email",
    type: "input",
    message: "What is your email address?",
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
