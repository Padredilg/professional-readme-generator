// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("Badge Generated");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("Link Generated");
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("License Section Generated");
}

function generateTableOfContents(confirm, data){
  if(confirm){
    const trueConfirms = [];

    if(data.confirmInstallation){
      trueConfirms.push('* [Installation](#Installation)');
    }
    if(data.confirmUsage){
      trueConfirms.push('* [Usage](#Usage)');
    }
    if(data.confirmLicense){
      trueConfirms.push('* [License](#License)');
    }
    if(data.confirmLicense){
      trueConfirms.push('* [License](#License)');
    }
    if(data.confirmContributing){
      trueConfirms.push('* [Contributing](#Contributing)');
    }
    if(data.confirmTests){
      trueConfirms.push('* [Tests](#Tests)');
    }
    if(data.confirmProblemsAndBugs){
      trueConfirms.push('* [ProblemsAndBugs](#ProblemsAndBugs)');
    }
    
    const tableOfContentTitles = trueConfirms.join('</br>')

    //first must be description by default
    return `## Table of Contents
* [Description](#Description)</br>
${tableOfContentTitles}
`
  }
  else{
    return '';
  }
}

function generateInstallation(confirm, description){
  if(confirm){
  return `## Installation
${description}
`
  }
  else{
    return '';
  }
}

function generateUsage(confirm, description, data){
  if(confirm){
    let displayImage = '';
    if(data.confirmUsageSS){
      displayImage = '<img width="1433" alt="decide eat website" src="' + data.usageImagePath + '"></img>';
    }
    else{
      displayImage = '';
    }

    return `## Usage
${description}
${displayImage}
`
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
${generateTableOfContents(data.confirmTableOfContents, data)}
## Description
${data.description}

${generateInstallation(data.confirmInstallation, data.installationDescription)}
${generateUsage(data.confirmUsage, data.usageDescription, data)}

`;
}
//include remaining generated info in template

module.exports = generateMarkdown;

//So I guess I need to export/require this file passing the readMe data to it