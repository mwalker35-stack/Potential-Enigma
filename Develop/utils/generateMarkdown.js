// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = `https://img.shields.io/badge/license-${license}-green`
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return ` ## License
    ${license}
    `
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents:
  *[Description](#Description)

  *[Installation](#Installation)

  *[Usage](#Usage)

  *[License](#License)

  *[Contributing](#Contributing)

  *[Tests](#Tests)

  *[Questions](#Questions)

  ## Description: 
  ${data.Description} 

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.Usage}

  ## License:
  ![badge](https://img.shields.io/badge/license-${data.license}-green)
  <br />
  This application is covered by the ${data.license} license. 

  ## Contributing:
  ${data.Contributing}

  ## Questions:
  If you have questions please Email: ${data.Email}<br />
  See: GitHub:  (https://github.com/${data.GitHub})
  ![alt text]()
`;
}

module.exports = generateMarkdown;
