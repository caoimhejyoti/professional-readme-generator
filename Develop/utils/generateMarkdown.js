// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return "";
  }else{
    return `${license}`;
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