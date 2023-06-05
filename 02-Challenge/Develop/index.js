// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');


// TODO: Create an array of questions for user input

const questions = [

  {
    type: 'input',
    name: 'Title',
    message: 'What is the project title?'
  },
  {
    type: 'input',
    name: 'Description',
    message: 'What is the project description?'
  },
  {
    type: 'input',
    name: 'Installation_instructions',
    message: 'How do you install this?'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'How do you use this?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Who licensed this?'
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who contributed this?'
  }
  {
    type: 'input',
    name: 'tests_questions',
    message: 'What are tests and questions to this?'
  }
];
  
//this is an object

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}




// TODO: Create a function to initialize app
function init() { 
       
   
    inquirer.prompt(questions).then((answers) => {
      var text = []
      text.push("# "+ answers.Title)  
      writeToFile("backup.md",text.join("\n"))

    });
}



//where the # key is where u change the heaers and then just add it in 
init();
// writeToFile("Test","This is a test");