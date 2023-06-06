// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == "MIT"){
      return "https://mit-license.org/";
    }
    if (license == "BSD"){
      return "https://opensource.org/licenses/BSD-3-Clause";
    }
    if (license == "GPL"){
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    }
    if (license == "Apache"){
      return "https://www.apache.org/licenses/LICENSE-2.0.html";
    }
  return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";
  if (license != "None") {
    licenseSect += "## License \n"
    licenseSect += "Go view " + renderLicenseLink(license)+ " to get information on this license\n";
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["description", "installation_instructions","usage", "contributions", "tests_questions", "license"];
  let markdown = "# " + data.title + "\n";
  markdown += renderLicenseBadge(data.license) + "\n";
  markdown += "## " + sections[0]+ "\n";
  markdown += data.description + "\n";
  
  markdown += "## " + sections[1] + "\n";
  markdown += data.installation_instructions + "\n";

  markdown += "## " + sections[3] + "\n";
  markdown += data.usage + "\n";

  markdown += "## " + sections[4] + "\n";
  markdown += data.contributions + "\n";
  
  markdown += "## " + sections[4] + "\n";
  markdown += data.tests_questions + "\n";

  markdown += data.github_un + "\n";
  markdown += data.email + "\n";


  markdown +=renderLicenseSection(data.license)+"\n";

  return markdown;


}

module.exports = generateMarkdown;