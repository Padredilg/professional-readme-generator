// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("Badge Generated for " + license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("Link Generated for " + license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("License Section Generated for " + license);
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
      displayImage = '<img alt="screenshot from website" src="' + data.usageImagePath + '"></img>';
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

function generateLicense(confirm, license){
  if(confirm){
    renderLicenseBadge(license);
    renderLicenseLink(license);
    renderLicenseSection(license);

    return `## License
${license}
`
  }
  else{
    return '';
  }
}

function generateContributing(confirm, guidelines){
  if(confirm){
    return `## Contributing
${guidelines}
`
  }
  else{
    return '';
  }
}

function generateTests(confirm, tests){
  if(confirm){
    return `## Tests
${tests}
`
  }
  else{
    return '';
  }
}

function generateProblemsAndBugs(confirm, problemsAndBugs){
  if(confirm){
    return `## Problems and Bugs
${problemsAndBugs}
`
  }
  else{
    return '';
  }
}


function generateMarkdown(data) {

  return `# ${data.title}
  
${generateTableOfContents(data.confirmTableOfContents, data)}
## Description
${data.description}

${generateInstallation(data.confirmInstallation, data.installationDescription)}
${generateUsage(data.confirmUsage, data.usageDescription, data)}
${generateLicense(data.confirmLicense, data.license)}
${generateContributing(data.confirmContributing, data.contributingGuidelines)}
${generateTests(data.confirmTests, data.tests)}
${generateProblemsAndBugs(data.confirmProblemsAndBugs, data.problemsAndBugs)}
`;
}
//now need to make license stuff work
//and get all this info to render on the README.md

module.exports = generateMarkdown;