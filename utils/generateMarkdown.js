// Function to render the license badge based on the selected license
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// Function to render the license link in the table of contents
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `* [License](#license)`;
  }
}

// Function to render the license section in the README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License

This project is licensed under the ${license} License.`;
  }
}


// Function to generate the markdown content for the README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

For any questions, please reach out to me at [${data.email}](mailto:${data.email}).

Check out my GitHub profile [${data.githubUsername}](https://github.com/${data.githubUsername}) for more of my work.

`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
