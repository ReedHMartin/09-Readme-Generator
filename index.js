// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');

// Define an array of questions for user input
const questions = [
  // Project title
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  // Project description
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  // Installation instructions
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  // Usage information
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  // Contribution guidelines
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  // Test instructions
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  // License selection
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
  // GitHub username
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  // Email address
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  // Write data to the specified file
  fs.writeFile(fileName, data, (err) => {
    // If there is an error, log it
    if (err) {
      console.error(err);
    } else {
      // If successful, inform the user
      console.log('Successfully created README file!');
    }
  });
}

// Function to initialize the app
function init() {
  // Prompt the user with questions and get their input
  inquirer.prompt(questions).then((answers) => {
    // Convert answers to a JSON-formatted string (Replace this with generateMarkdown function call later)

    const content = JSON.stringify(answers, null, 2);
    
    // Write the content to a README file
    writeToFile('README_generated.md', content);
  });
}

// Function call to initialize app
init();
