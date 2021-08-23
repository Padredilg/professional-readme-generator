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
        message: "Provide relative path from your directory's root to the screenshot of your application:",
        when: ({confirmUsageSS}) => confirmUsageSS,
        validate: usageDescriptionInput => {
            if(usageDescriptionInput){
                return true;
            }
            else{
                console.log("Provide relative path from your directory's root to the screenshot of your application!");
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
        type: 'input',
        name: 'license',
        message: 'Enter License name:',
        when: ({confirmLicense}) => confirmLicense,
        validate: licenseInput => {
            if(licenseInput){
                return true;
            }
            else{
                console.log('Please enter a name for the License!');
                return false;
            }
        }
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
    }
];

// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readMeData => {
            return generateReadMe(readMeData);
        })
        .then(readMeInfo => {
            writeToFile('./NEWPROJECTREADME.md', readMeInfo)
        });
}

// Function call to initialize app
init();

/*
## License (Recommended)
    License name: --> REQUIRES BADGE NEAR THE TOP
*/


/*
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
-- did not understand step

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/





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