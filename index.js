import HeroBanner from "./src/HeroBanner.js";
import ClearScreen from "./src/ClearScreen.js";
import inquirer from "inquirer";
import chalk from "chalk";
import Manager from "./lib/Manager.js";
import CreateIntern from './src/CreateIntern.js'
import CreateEngineer from './src/CreateEngineer.js';
//import Intern from "./lib/Intern.js";

//Global 
//Employees vaiable will hold all of the created employees
let employees = [];

async function main() {
    //Main Title shows up
    //Clear the Screen First
    ClearScreen();
    //Show the banner for 5 seconds, then clears the screen
    HeroBanner();
    ClearScreen();

    //Welcome Instructions, hit any key to proceed
    console.log(`Welcome to the ${chalk.bold.red('Manager\'s Elite Team Profile Generator')}`);
    console.log(`This application will assist you in generating a ${chalk.bold.yellow('Webpage')} with your team members information\nPlease answer all prompts in order to populate your team`);
    await inquirer.prompt([{name: 'pause', message: "Press Enter to continue"}]).then(() => ClearScreen());
    
    //Enter the team managers name, employee ID, email address, and office number
    //Then store the answers in the instance of the Manager class
    await inquirer.prompt([
        {
            name: 'managerName',
            message: `What is the Manager's ${chalk.bold.red('name')} ?}`
        },
        {
            name: 'managerId',
            message: `What is the Manager's ${chalk.bold.red('ID')} ?}`
        },
        {
            name: 'managerEmail',
            message: `What is the Manager's ${chalk.bold.red('Email')} address?`
        },
        {
            name: 'officeNumber',
            message: `What is the Manager's ${chalk.bold.red('Office Number')} ?`
        }
    ]).then( (answers) => {
        //name, id, email, officeNumber
        let teamManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employees.push(teamManager);
    })
    //For debuggimg purposes
    //console.log(employees);
    //Enter main loop  Enter Intern, Engineer or exit
    let finished = false;
    let selection;
    while (!finished) {
        await inquirer.prompt([
            {
                type: 'list',
                name: 'mainLoopSelection',
                message: 'Choose to add an Intern, Engineer, or Finsish Building your team:',
                choices: ['Create an Intern', 'Create an Engineer', 'Finish Building your team']
            }
        ]). then(answer => {
            switch (answer.mainLoopSelection) {
                case 'Finish Building your team':
                    console.log('You elected to finish building your team');
                    finished = true;
                    selection = 3;
                    break;
                case 'Create an Intern':
                    selection = 1;
                    break;
                case 'Create an Engineer':
                    selection = 2
                    break;
            }
        });
        switch (selection) {
            case 1:
                let intern = await CreateIntern();
                employees.push(intern);
                break;
            case 2:
                let engineer = await CreateEngineer()
                employees.push(engineer);
                break;
            default:
                break;
        }
    }
    //Debugging
    console.log(employees);
    //Generate html


}
main();