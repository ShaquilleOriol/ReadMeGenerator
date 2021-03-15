const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writefileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of this project?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of this project?'

        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please type the installation instructions for this project?'

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Any usage information that maybe helpful?'

        },
        {
            type: 'input',
            name: 'collaborated',
            message: 'Who collaborated on this project?'

        },
        {
            type: 'input',
            name: 'requirements',
            message: 'Are there any requirements to run project?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'May i have your Email please?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select licenses for your project',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
     

    ])
};

    // .then (answers => {

    //     fs.writeFile('README.md', 
    const generateREADME = (answers) =>
        `
    #  ${answers.title} 
    ## Table of Contents
    1. [Description](#Description)
    2. [Installation](#Installation)
    3. [Usage](Usage)
    4. [collaborated](collaborated)
    5. [requirements](requirements)

    ## Description 

    ${answers.description}

    ## Installation

    ${answers.installation}

    ## Usage 

    ${answers.usage}

    ## Collaboraters

    ${answers.collaborated}

    ## requirements

    ${answers.requirements}

    ## Licenses

    ${answers.license}

    ## Contact Me

    Any other questions, contact me at my email : ${answers.email}.

    `
;
     
    const init = () => {
        promptUser()
            .then((answers) => writeFileAsync('ReadMe.md', generateREADME(answers)))
            .then(() => console.log('Successfully wrote to ReadMe.md'))
            .catch((err) => console.error(err));

        };

    init();