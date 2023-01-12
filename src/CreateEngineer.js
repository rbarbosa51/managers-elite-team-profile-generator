import inquirer from "inquirer";
import chalk from "chalk";
import Engineer from '../lib/Engineer.js';

export default async function CreateEngineer() {
    let engineer;
    await inquirer.prompt([
        {
            name: 'engineerName',
            message: `What is the Engineer's ${chalk.bold.red('name')} ?}`
        },
        {
            name: 'engineerId',
            message: `What is the Engineer's ${chalk.bold.red('ID')} ?}`
        },
        {
            name: 'engineerEmail',
            message: `What is the Engineer's ${chalk.bold.red('Email')} address ?`
        },
        {
            name: 'engineerGitHub',
            message: `What is the Engineer's ${chalk.bold.red('GitHub')} ?`
        }
    ]).then(answers => {
        engineer = new Engineer(answers.engineerName,answers.engineerId, answers.engineerEmail, answers.engineerGitHub );
    })
    return engineer;
}