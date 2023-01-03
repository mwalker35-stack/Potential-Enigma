// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === license) {
    console.log(renderLicenseBadge)
  }
  else  {
    console.log(" ")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === license) {
    console.log(renderLicenseLink)
  }
  else  {
    console.log(" ")
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === license) {
    console.log("License")
    return License
  }
  else  {
    console.log(" ")
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents(Optional):
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses)
  -[Credits](#Credits)
  -[License](#License)
  -[Badges](#Badges)
  -[Features](#Features)
  -[How to Contribute](#Contribute)
  -[Tests](#Tests)

  ## Description: 
  ${data.Description} 

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.Usage}

  ## Credits:
  ${data.Credits}

  ## License:
  ${data.License}

  ## Badges:
  ${data.Badges}

  ## Features:
  ${data.Features}

  ## How to Contribute:
  ${data.Contribute}

  ## Tests:
  ${data.Tests}


`;
}

module.exports = generateMarkdown;
