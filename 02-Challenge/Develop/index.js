// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// TODO: Create an array of questions for user input

const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project description?'
  },
  {
    type: 'input',
    name: "installation_instructions",
    message: 'How do you install this?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Who licensed this?',
    choice: licenses 
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who contributed this?'
  },
  {
    type: 'input',
    name: 'tests_questions',
    message: 'What are tests and questions to this?'
  }
  {
    type: 'input',
    name: 'github_un',
    message: 'What is your github username?'
  },
];
  
//this is an object

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}




// TODO: Create a function to initialize app
function init() { 
       
   
    inquirer.prompt(questions).then((answers) => {
     let text = generateMarkdown(answers)
      writeToFile("backup.md",text)
    });
}




//where the # key is where u change the heaers and then just add it in 
init();
// writeToFile("Test","This is a test");