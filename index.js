// TODO : Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO : Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },];

// TODO : Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully created README file!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content using the user input (You'll need to create a generateMarkdown function in the `generateMarkdown.js` file)
    // const content = generateMarkdown(answers);
    // For now, let's just create a placeholder content
    const content = JSON.stringify(answers, null, 2);
    
    // Write the content to a README file
    writeToFile('README_generated.md', content);
  });
}

// Function call to initialize app
init();
