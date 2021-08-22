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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //the readme will be written here. There will be conditional returns for when they chose not to include a section.
  //this is a functionality that will be exported back to a const. The const will be used to write the file.
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

//So I guess I need to export/require this file passing the readMe data to it