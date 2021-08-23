function renderLicenseBadge(confirm, license) {
  if(confirm){
    //put badge before table of contents
    let licenseValue = license.split('@')[1];
    let licenseUrl = license.split('(')[2].split(')')[0];
    return `<a href='${licenseUrl}'>${licenseValue}</a>
  `
  }
  else{
    return '';
  }
}

function generateTableOfContents(confirm, data){
  if(confirm){
    const trueConfirms = [];

    if(data.confirmInstallation){
      trueConfirms.push('[Installation](#Installation)');
    }
    if(data.confirmUsage){
      trueConfirms.push('[Usage](#Usage)');
    }
    if(data.confirmLicense){
      trueConfirms.push('[License](#License)');
    }
    if(data.confirmContributing){
      trueConfirms.push('[Contributing](#Contributing)');
    }
    if(data.confirmTests){
      trueConfirms.push('[Tests](#Tests)');
    }
    if(data.confirmProblemsAndBugs){
      trueConfirms.push('[Problems](#Problems)');
    }
    if(data.confirmQuestions){
      trueConfirms.push('[Questions](#Questions)');
    }
    
    const tableOfContentTitles = trueConfirms.join('</br>')

    //first must be description by default
    return `## Table of Contents
[Description](#Description)</br>
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
${description}</br>
${displayImage}
`
  }
  else{
    return '';
  }
}

function generateLicense(confirm, license){
  if(confirm){
    let licenseName = license.split('@')[0];
    let licenseUrl = license.split('(')[2].split(')')[0];

    return `## License
This application is covered under the <a href='${licenseUrl}'>${licenseName}</a>
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
    return `## Problems
${problemsAndBugs}
`
  }
  else{
    return '';
  }
}

function generateQuestions(confirm, githubUserName, userEmail){
  if(confirm){
    return `## Questions
<a href='https://github.com/${githubUserName}'>${githubUserName}</a></br>
If you have any questions, you may email at ${userEmail}
`
  }
  else{
    return '';
  }
}


function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.confirmLicense, data.license)}
${generateTableOfContents(data.confirmTableOfContents, data)}
## Description
${data.description}
${generateInstallation(data.confirmInstallation, data.installationDescription)}
${generateUsage(data.confirmUsage, data.usageDescription, data)}
${generateLicense(data.confirmLicense, data.license)}
${generateContributing(data.confirmContributing, data.contributingGuidelines)}
${generateTests(data.confirmTests, data.tests)}
${generateProblemsAndBugs(data.confirmProblemsAndBugs, data.problemsAndBugs)}
${generateQuestions(data.confirmQuestions, data.githubUserName, data.userEmail)}
`;
}

module.exports = generateMarkdown;