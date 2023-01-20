// DESCRIPTION: Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadgeFnc(license) {
//   if (!license){
//     return "";
//   }else{
//     return `${license}`;
//   }
// };

function renderLicenseBadgeFnc(license) {
  switch (license) {
    case 'Apache license 2.0':
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-purple?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-clause "Simplified" license':
      badge = `![BSD 2-clause Simplified](https://img.shields.io/badge/License-BSD_2--clause_Simplified-purple?style=for-the-badge)`;
      break;
  }
  return badge;

}


// FIXME: open source URL needs updating. DESCRIPTION: Function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLinkFnc(url) {
//   if (!url) {
//     return "";
//   }else{
//     //FIXME: Confirm this is correct
//     return `For further information regarding the license, please follow the link below: \n${url}`;
//   }
// };

function renderLicenseLinkFnc(license) {
  switch (license) {
    case 'Apache license 2.0':
      link = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'BSD 2-clause "Simplified" license':
      link = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
  }
  return link;

}


//DESCRIPTION: Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSectionFnc(license) {
  if (!license) {
    return "";
  }else{
    return `This project is using the following license:\n**${license}**\n\nFor further information regarding the license, please follow the link below:\n ${renderLicenseLinkFnc(license)}`;
  }
};

// FIXME: Confirm hyperlinks in contents work. DESCRIPTION: Function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
${renderLicenseBadgeFnc(data.license)}

## Description
${data.description}

FIXME: Confirm hyperlinks in contents work - check with Jasmine/Marco regarding links. working in md file not preview?
## Table of Contents
[Installation](##Installation)
[Usage](##Usage)
[License](##License)
[Contribution](##Contribution)
[Tests](##Tests)
[Questions](##Questions)

## Installation   
${data.installation}

[Return to top](#${data.title})

## Usage 
${data.usage}

[Return to top](#${data.title})

## License
${renderLicenseSectionFnc(data.license)}

[Return to top](#${data.title})

## Contribution 
${data.contributing}

[Return to top](#${data.title})

## Tests
${data.tests}

[Return to top](#${data.title})

## Questions 
If you have any further questions, please contact me via email or github.

<a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/email-D14836?style=for-the-badge" target="_blank" /></a>  <a href="https://github.com/${data.username}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>


[Return to top](#${data.title})`;
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateMarkdown;