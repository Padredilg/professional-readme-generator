// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {

    },
    {

    }
];// [{}, {}, {}, ...]

/*
# Your Project Title
    String receiving name
    validate

## Description 
    receives one long string input
    validate

## Table of Contents (Optional)
    Would you like to include a table of contents? y/N

## Installation

    include a description on how to install the application: 

## Usage Include screenshots as needed.
    include description on how to use the application itself
    If adding a screenshot, provide the path to the image

## Credits
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

## License (Recommended)
    License name:

## Contributing
    Would you like to include a Contributing section? y/N
    specify the guidelines for contributing:

## Tests
    Would you like to include a Tests section?y/N
    Give users explicit instructions on how to run all necessary tests:

## Common Problems and Bugs
    Would you like to include a Common Problems and Bugs section?y/N
    Describe common problems and bugs:

*/



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


/*
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/