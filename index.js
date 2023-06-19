const fs = require('fs');
const inquirer = require('inquirer');
const gm = require("./utils/generateMarkdown.js")
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,function(err){
      if(err) throw err;
  })
}
inquirer
.prompt([
    {
      type: 'input',
      message: 'what is the name of your app?',
      name: 'appName',
    },
    {
      type: 'input',
      message: 'Create a description of your app!',
      name: 'appDesc',
    },
    {
      type: 'input',
      message: 'Create a Table of Contents!',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'How to install your app?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What are the uses for your app?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution Guidelines?',
      name: 'contributions',
    },
    {
      type: 'checkbox',
      message: 'Please choose your licensing for you app',
      choices: ['Apache 2.0', 'Boost Software License 1.0', "MIT License","Mozilla Public License 2.0"],
      name: 'licensing',
    },
    {
      type: 'input',
      message: 'Enter GitHub username',
      name: 'gitHubUser',
    },
    {
      type: 'input',
      message: 'Enter your email address',
      name: 'email',
    },
  ]).then((response) =>{
    writeToFile('README_Demo',gm(response));
  });
