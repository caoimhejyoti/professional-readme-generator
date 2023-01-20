// DESCRIPTION: Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeFnc(license) {
  if (!license){
    return "";
  }else{
    return `${license}`;
  }
};

// FIXME: open source URL needs updating. DESCRIPTION: Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLinkFnc(license) {
  if (!license) {
    return "";
  }else{
    //FIXME: Confirm this is correct
    return `(https://opensource.org/licenses/${license})`;
  }
};

// FIXME: Confirm Lisence name is working correctly. DESCRIPTION: Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSectionFnc(license) {
  if (!license) {
    return "";
  }else{
    return `This project is using the ${license} license`;
  }
};

// FIXME: Confirm hyperlinks in contents work. Email badge is just GMAIL currently. DESCRIPTION: Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadgeFnc(data.license)}

  ## Description
  ${data.description}

  FIXME: Confirm hyperlinks in contents work.
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
  ${renderLicenseSectionFnc(data.license)}
  ${renderLicenseLinkFnc(data.license)}
  
  ## Contribution 
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any further questions, please contact me via email or github.

  //FIXME: this is currently only gmail badge - not inclusive. 
  <a href="mailto:${data.email}"><img alt="Link to email contact address" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>  <a href="https://github.com/${data.username}"><img alt="badge for GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" target="_blank" /></a>
  

  `;
};

// DESCRIPTION: exporting functions for use within index.js
module.exports = generateMarkdown;