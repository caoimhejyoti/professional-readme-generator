// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    "Academic Free License v3.0": "![Academic Free v3.0](https://img.shields.io/badge/License-Academic_Free_v3.0-purple?style=for-the-badge)" , 
    "Apache license 2.0":"![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-purple?style=for-the-badge)" , 
    "Artistic license 2.0":"![Artistic 2.0](https://img.shields.io/badge/License-Artistic_2.0-purple?style=for-the-badge)", 
    "Boost Software License 1.0":"![Boost Software 1.0](https://img.shields.io/badge/License-boost_software_1.0-purple?style=for-the-badge)",
    "BSD 2-clause license":"![BSD 2-clause Simplified](https://img.shields.io/badge/License-BSD_2--clause_Simplified-purple?style=for-the-badge)",
    "BSD 3-clause license":"![BSD 3-clause Clear](https://img.shields.io/badge/License-BSD_3--clause_clear-purple?style=for-the-badge)",
    "Creative Commons license":"![Creative Commons](https://img.shields.io/badge/License-Creative_Commons-purple?style=for-the-badge) ",
    "Do What The F*ck You Want To Public License": "![Do What The F*ck You Want To Public License](https://img.shields.io/badge/License-Do_What_The_F*ck_You_Want_To_Public-purple?style=for-the-badge)",
    "Educational Community License v2.0":"![Eclipse Public License 1.0](https://img.shields.io/badge/License--purple?style=for-the-badge)",
    "Eclipse Public License 1.0":"![](https://img.shields.io/badge/License-Eclipse_Public_1.0-purple?style=for-the-badge)",
    "Eclipse Public License 2.0":"![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse_Public_2.0-purple?style=for-the-badge)",
    "European Union Public License 1.1":"![European Union Public License 1.1](https://img.shields.io/badge/License-European_Union_Public_1.1-purple?style=for-the-badge)",
    "GNU Affero General Public License v3.0":"![GNU Affero General Public License v3.0](https://img.shields.io/badge/License-GNU_Affero_General_Public_v3.0-purple?style=for-the-badge)",
    "GNU General Public License v2.0":"![GNU General Public License v2.0](https://img.shields.io/badge/License-GNU_General_Public_v2.0-purple?style=for-the-badge)",
    "GNU General Public License v3.0":"![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU_General_Public_v3.0-purple?style=for-the-badge)",
    "GNU Lesser General Public License v2.1":"![GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-GNU_Lesser_General_Public_v2.1-purple?style=for-the-badge)",
    "GNU Lesser General Public License v3.0":"![GNU Lesser General Public License v3.0](https://img.shields.io/badge/License-GNU_Lesser_General_Public_v3.0-purple?style=for-the-badge)",
    "ISC":"![ISC](https://img.shields.io/badge/License-ISC-purple?style=for-the-badge)",
    "LaTeX Project Public License v1.3c":"![LaTeX Project Public License v1.3c](https://img.shields.io/badge/License-LaTeX_Project_Public_v1.3c-purple?style=for-the-badge)",
    "Microsoft Public License":"![Microsoft Public License](https://img.shields.io/badge/License-Microsoft_Public-purple?style=for-the-badge)",
    "MIT":"![MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)",
    "Mozilla Public License 2.0":"![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-purple?style=for-the-badge)",
    "Open Software License 3.0":"![Open Software License 3.0](https://img.shields.io/badge/License-Open_Software_3.0-purple?style=for-the-badge)",
    "PostgreSQL License":"![PostgreSQL License](https://img.shields.io/badge/License-PostgreSQL-purple?style=for-the-badge)",
    "SIL Open Font License 1.1":"![SIL Open Font License 1.1](https://img.shields.io/badge/License-SIL_Open_Font_1.1-purple?style=for-the-badge)",
    "University of Illinois/NCSA Open Source License":"![University of Illinois/NCSA Open Source License](https://img.shields.io/badge/License-University_of_Illinois/NCSA_Open_Source-purple?style=for-the-badge)",
    "The Unlicense":"![The Unlicense](https://img.shields.io/badge/License-The_Unlicense-purple?style=for-the-badge)",
    "zLib License":"![zLib License](https://img.shields.io/badge/License-zLib-purple?style=for-the-badge)",
  };
  if (!license){
    return "";
  }else{
    //FIXME: Make this match the license to the licenseBadge variable.
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }else{
    //FIXME: Confirm this is correct
    return `(https://opensource.org/licenses/${license})`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }else{
    return `This project is using the ${license} license`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contribution](#Contribution)
  [Tests](#Tests)
  [Questions](#Questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribution 
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any further questions, please contact me via email or github.

  <a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>  <a href="https://github.com/${data.username}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>
  

  `;
};

module.exports = generateMarkdown;