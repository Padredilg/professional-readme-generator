const fs = require('fs');
const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown.js');

const questions = [
    {//title
        type: 'input',
        name: 'title',
        message: 'What is the title for your project?',
        validate: titleInput => {
            if(titleInput){
                return true;
            }
            else{
                console.log('Please enter the title for your project!');
                return false;
            }
        }
    },
    {//description
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
        validate: description => {
            if(description){
                return true;
            }
            else{
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {//confirmTableOfContents
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to include a Table of Contents?',
        default: true
    },
    {//confirmInstallation
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to include an Installation section?',
        default: true
    },
    {//installationDescription
        type: 'input',
        name: 'installationDescription',
        message: 'Please include a description on how to install your application:',
        when: ({confirmInstallation}) => confirmInstallation,
        validate: installationDescriptionInput => {
            if(installationDescriptionInput){
                return true;
            }
            else{
                console.log('Enter a description for how to install your application!');
                return false;
            }
        }
    },
    {//confirmUsage
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include a Usage section?',
        default: true
    },
    {//usageDescription
        type: 'input',
        name: 'usageDescription',
        message: 'Please include a description on how the application is intended to be used:',
        when: ({confirmUsage}) => confirmUsage,
        validate: usageDescriptionInput => {
            if(usageDescriptionInput){
                return true;
            }
            else{
                console.log('Enter a description on how to use your application!');
                return false;
            }
        }
    },
    {//confirmUsageSS
        type: 'confirm',
        name: 'confirmUsageSS',
        message: 'Would you like to include a screenshot of your application?',
        default: true,
        when: ({confirmUsage}) => confirmUsage
    },
    {//usageImage
        type: 'input',
        name: 'usageImagePath',
        message: "Provide relative path to the screenshot of your application:",
        when: ({confirmUsageSS}) => confirmUsageSS,
        validate: usageDescriptionInput => {
            if(usageDescriptionInput){
                return true;
            }
            else{
                console.log("Provide relative path to the screenshot of your application!");
                return false;
            }
        }
    },
    {//confirmLicense
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a License?',
        default: true
    },
    {//license
        type: 'list',
        name: 'license',
        choices: [//I inserted those @ to use a split at the @ later and retrieve bothe the badge and the badge's name
            {value: 'GNU AGPL v3 License@[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', name: 'AGPL v3'},
            {value: 'GNU GPL v3 License@[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', name: 'GPL v3'},
            {value: 'GNU LGPL v3 License@[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', name: 'LGPL v3'},
            {value: 'Mozilla Public License 2.0@[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', name: 'Mozilla Public License 2.0'},
            {value: 'Apache 2.0 License@[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', name: 'Apache 2.0 License'},
            {value: 'MIT License@[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', name: 'The MIT License'},
            {value: 'Boost Software License 1.0@[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', name: 'Boost Software License 1.0'},
            {value: 'Unlicense@[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', name: 'The Unlicense'},
            
            
        ],
        message: 'Choose a license:',
        when: ({confirmLicense}) => confirmLicense
    },
    {//confirmContributing
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to include a Contributing section?',
        default: true
    },
    {//contributingGuidelines
        type: 'input',
        name: 'contributingGuidelines',
        message: 'Please specify the guidelines for contributing:',
        when: ({confirmContributing}) => confirmContributing,
        validate: contributingGuidelinesInput => {
            if(contributingGuidelinesInput){
                return true;
            }
            else{
                console.log('Please specify the guidelines for contributing!');
                return false;
            }
        }
    },
    {//confirmTests
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include a Tests section?',
        default: true
    },
    {//tests
        type: 'input',
        name: 'tests',
        message: 'Give users explicit instructions on how to run all necessary tests:',
        when: ({confirmTests}) => confirmTests,
        validate: testsInput => {
            if(testsInput){
                return true;
            }
            else{
                console.log('Provide instructions on how to run all necessary tests!');
                return false;
            }
        }
    },
    {//confirmProblemsAndBugs
        type: 'confirm',
        name: 'confirmProblemsAndBugs',
        message: 'Would you like to include a "Common Problems and Bugs" section?',
        default: true
    },
    {//problemsAndBugs
        type: 'input',
        name: 'problemsAndBugs',
        message: 'Describe common problems and bugs in your project:',
        when: ({confirmProblemsAndBugs}) => confirmProblemsAndBugs,
        validate: problemsAndBugsInput => {
            if(problemsAndBugsInput){
                return true;
            }
            else{
                console.log('Describe common problems and bugs in your project!');
                return false;
            }
        }
    },
    {//confirmQuestions
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to include a "Questions" section for users to contact you if they need?',
        default: true
    },
    {//githubUserName
        type: 'input',
        name: 'githubUserName',
        message: 'Please enter your Github Username:',
        when: ({confirmQuestions}) => confirmQuestions,
        validate: githubUserNameInput => {
            if(githubUserNameInput){
                return true;
            }
            else{
                console.log('Enter your Github Username!');
                return false;
            }
        }
    },
    {//userEmail
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your contact email:',
        when: ({confirmQuestions}) => confirmQuestions,
        validate: userEmailInput => {
            if(userEmailInput){
                return true;
            }
            else{
                console.log('Enter your contact email!');
                return false;
            }
        }
    }
];

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'README.md Successfuly created!'
          });
        });
  
      });
}

function init() {
    inquirer.prompt(questions)
        .then(readMeData => {
            return generateReadMe(readMeData);
        })
        .then(readMeInfo => {
            writeToFile('./new-readme.md', readMeInfo)
        });
}

init();


//Future Improvement:

/*If user pressed Y for adding a section but left desc blank, reprompt user if he still wants to keep that section
if user answers no, then change the value of original prompt to false*/

/*
## Built With
    get from portfolio generator

## Credits
    probably needs a separate function to perform this 

    Would you like to include a Credits Section? y/N

    if yes:

    collaborator 1 name:
    collaborator 1 github:
    add another collab? y/N
    if yes, 
    collaborator 2 name:
    collaborator 2 github:
    add another collab? y/N

    Are you mentioning third-party assets? y/N
    if yes,
    creator 1 name:
    link to creator 1's primary web presence in this section:
    add another creator? y/N


    Are you including tutorials? y/N
    if yes,
    link to tutorial 1:
    add link to another tutorial? y/N

*/