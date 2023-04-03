function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `* [License](#license)`;
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License

This project is licensed under the ${license} License.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
