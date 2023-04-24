// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const badges = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    Unlicense: '',
  }
  return badges[license]

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
  const licenseLink = {
    Apache: 'https://choosealicense.com/licenses/apache-2.0/',
    MIT: 'https://choosealicense.com/licenses/mit/',
    Boost: 'https://www.boost.org/users/license.html',
    Unlicense: '',
  }
 return licenseLink[license]
 
 
 
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "") {
  return `## License
  Licensed under ${renderLicenseLink(license)} license`
 } 
 else {
  return ''
 }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  
  
return `# <${response.title}>

${renderLicenseBadge(response.license)}
${renderLicenseLink(response.license)}

## Description

${response.description}

## Table of Contents

- [Project Description](#Description)

- [Usage](#Usage)

- [Contribution](#Contribution)

- [Installation](#Installation)

- [Questions](#Questions)

- [License](#License)

## Installation

${response.installation}

## Usage 

${response.usage}

## How to Contribute

${response.contribution}

## Tests

${response.test}

## Questions

${response.email} If you have any questions, please email using this link.

https://github.com/${response.Github}

${renderLicenseSection(response.license)}

`
}

module.exports = generateMarkdown;



