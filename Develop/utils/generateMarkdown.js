// TODO:
  // remove all highlighted notes
  // look at functions for all readme sections os it there is no answer, it is not created.  

// DESCRIPTION: Function that returns a license badge based on user license choice.
function renderLicenseBadgeFnc(license) {
  switch (license) {
    case 'Apache license 2.0':
      badge = `[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-yellowgreen?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD 2-clause "Simplified" license':
      badge = `[![BSD 2-clause Simplified](https://img.shields.io/badge/License-BSD_2--clause_Simplified-orange?style=for-the-badge)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-clause "New" or "Revised: license':
      badge = `[![BSD 3-clause](https://img.shields.io/badge/License-BSD_3--clause_clear-lightgrey?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Common Development and Distribution License 1.0':
      badge = `[![CDDL-1.0](https://img.shields.io/badge/License-Common_Development_and_Distribution_1.0-purple?style=for-the-badge)](https://opensource.org/licenses/CDDL-1.0)`;
      break;
    case 'Eclipse Public License 2.0':
      badge = `[![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse_Public_2.0-red?style=for-the-badge)](https://opensource.org/licenses/EPL-2.0)`;
      break;
    case 'GNU General Public License v2.0':
      badge = `[![GNU General Public License v2.0](https://img.shields.io/badge/License-GNU_General_Public_v2.0-blue?style=for-the-badge)](https://opensource.org/licenses/GPL-2.0)`;
      break;
    case 'GNU General Public License v3.0':
      badge = `[![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU_General_Public_v3.0-blue?style=for-the-badge)](https://opensource.org/licenses/GPL-3.0)`;
      break;
    case 'MIT':
      badge = `[![MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `[![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla_Public_2.0-brightgreen?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)`;
      break;      
    case 'No License':
      badge = `![No License](https://img.shields.io/badge/License-Unlicensed-purple?style=for-the-badge)`;
      break;      
  }
  return badge;
}

//DESCRIPTION: Function to create badge of the project repo with link.
function renderGitRepositoryBadgeFnc (username) {
  if (!username) {
    return "";
  }else{
    return `[![GitHub username](https://img.shields.io/badge/username-${username}-green?style=for-the-badge)](https://github.com/${username})`
  }
}



// DESCRIPTION: Function that returns the license link based on user license choice.
function renderLicenseLinkFnc(license) {
  switch (license) {
    case 'Apache license 2.0':
      link = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'BSD 2-clause "Simplified" license':
      link = `https://opensource.org/licenses/BSD-2-Clause`;
      break;
      case 'BSD 3-clause "New" or "Revised: license':
      link = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'Common Development and Distribution License 1.0':
      link = `https://opensource.org/licenses/CDDL-1.0`;
      break;
    case 'Eclipse Public License 2.0':
      link = `https://opensource.org/licenses/EPL-2.0`;
      break;
    case 'GNU General Public License v2.0':
      link = `https://opensource.org/licenses/GPL-2.0`;
      break;
    case 'GNU General Public License v3.0':
      link = `https://opensource.org/licenses/GPL-3.0`;
      break;
    case 'MIT':
      link = `https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla Public License 2.0':
      link = `https://opensource.org/licenses/MPL-2.0`;
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
    return `This project is using the following license:\n\n**${license}**\n\nFor further information regarding the license, please follow the link below:\n ${renderLicenseLinkFnc(license)}`;
  }
};

// DESCRIPTION: Function to generate markdown for README
function generateMarkdown(data) {
return `
<h1 align="centre">
  <br>
  ${data.title}
</h1>

<h4 align="centre">${data.tagline}</h4>

<p align="centre">

${renderLicenseBadgeFnc(data.license)}  ${renderGitRepositoryBadgeFnc(data.username)}
</p>

<p align="centre">
  <a href="#about">About</a> ✦
  <a href="#installation">Installation</a> ✦
  <a href="#usage">Usage</a> ✦
  <a href="#license">License</a> ✦
  <a href="#contribution">Contribution</a> ✦
  <a href="#tests">Tests</a> ✦
  <a href="#questions">Questions</a> 
</p>

## About
${data.description}


## Installation   
${data.installation}

## Usage 
${data.usage}

## License
${renderLicenseSectionFnc(data.license)}

## Contribution 
${data.contributing}

## Tests
${data.tests}

## Questions 
If you have any further questions, please contact via email or github.

<a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/email-D14836?style=for-the-badge" target="_blank" /></a>  <a href="https://github.com/${data.username}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>`;
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateMarkdown;