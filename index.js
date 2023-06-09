// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./app/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What are some examples of use for the app?',
    }, 
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were conducted?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email for questions?',
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'apache'],
        filter(value) {
            return value.toLowerCase();
        }
    }, 
];

// TODO: Create a function to write README file
function writeToFile() {  //fleName, data
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = generateMarkdown(answers)
      
        fs.writeFile('./app/utils/README.md', mark, function(err) {
            if(err) {
                console.log('README not saved', err)
            } else {
                console.log('Success!')
            }
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
writeToFile();

