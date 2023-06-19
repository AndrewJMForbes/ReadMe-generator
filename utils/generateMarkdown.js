function renderLicenseBadge(license) {
  if(license == null){return ""}
  else{
    if(license == "Apache 2.0"){return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"}
    else if(license == "Boost Software License 1.0" ){return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"}
    else if(license == "MIT License"){return "https://img.shields.io/badge/License-MIT-yellow.svg"}
    else if(license == "Mozilla Public License 2.0" ){return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"}
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == null){return ""}
  else{
    if(license == "Apache 2.0"){return "https://opensource.org/licenses/Apache-2.0"}
    else if(license == "Boost Software License 1.0" ){return "https://www.boost.org/LICENSE_1_0.txt"}
    else if(license == "MIT License"){return "https://opensource.org/licenses/MIT"}
    else if(license == "Mozilla Public License 2.0" ){return "https://opensource.org/licenses/MPL-2.0"}
  }
}

function renderLicenseSection(license) {
  if(license == null){return ""}
  var badge = renderLicenseBadge(license)
  var link = renderLicenseLink(license);
  return `[![License](${badge})](${link})`
}



function generateMarkdown(data) {
  var license = renderLicenseSection(data.license)
  return `# ${data.appName}
  ${license}

  ## Description
  ${data.appDesc}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#contribute)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contributions}

  ## Questions
  Contact me if you have additional questions.
  Github: https://github.com/${data.gitHubUser}

  Email: ${data.email}


`;
}

module.exports = generateMarkdown;