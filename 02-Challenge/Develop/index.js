// TODO: Include packages needed for this application
var inquirer = require('inquirer');



// TODO: Create an array of questions for user input

const questions = [
    {
      type: 'confirm',
      name: 'bacon',
      message: 'Do you like bacon?',
    },
    {
      type: 'input',
      name: 'favorite',
      message: 'Bacon lover, what is your favorite type of bacon?',
      when(answers) {
        return answers.bacon;
      },
    },
    
  ];
  
//this is an object

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 
       
    inquirer.prompt(questions).then(/* ... */);  

    
    // inquirer.prompt(questions).then((answers) => {
    //     console.log(JSON.stringify(answers, null, '  '));
    //   });

}

init();
