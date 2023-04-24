// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Generate README file 
// const generateREADME = ({ title, description, installation, usage, contribution, test, license }) =>
// `# <${title}>

// ## Description

// ${description}

// ## Installation

// ${installation}

// ## Usage 

// ${usage}

// ## How to Contribute

// ${contribution}

// ## Tests

// ${test}

// ## License

// ${license}

// `;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.'

    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Pick a license for your project.',
        choices: ['Apache', 'MIT', 'Boost', 'Unlicense']

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'

    },
    {
        type: 'input',
        name: 'Github',
        message: 'Please enter your Github username'

    },
]
//const handleAnswers = answers => {
  //  return `${answers}`
//}

inquirer
.prompt(questions)
.then((response) => {
    const readmeContent = generateMarkdown(response);

    fs.writeFile('SAMPLE.md', readmeContent, function (err)  {
        if (err) {
            console.log('please try again!')
    } else {
        console.log('Sucessfully created README file')
    }
       
    })

})
.catch((error) => {
    console.log(error)
}) 

