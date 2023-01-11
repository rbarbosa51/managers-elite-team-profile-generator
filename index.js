import HeroBanner from "./src/HeroBanner.js";
import ClearScreen from "./src/ClearScreen.js";
import inquirer from "inquirer";
import chalk from "chalk";
import Manager from "./lib/Manager.js";

//Global 
let teamManager;
async function main() {
    //Main Title shows up
    //Clear the Screen First
    ClearScreen();
    //Show the banner for 5 seconds, then clears the screen
    HeroBanner();
    ClearScreen();

    //Welcome Instructions, hit any key to proceed
    console.log('Welcome to the Manager\'s Elite Team Profile Generator');
    console.log('This application will assist you in generating a Webpage with your team members information\nPlease answer all prompts in order to populate your team');
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
        teamManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
    })
    //console.log(teamManager);
    //Enter main loop  Enter Intern, Engineer or exit
    
    //Generate html


}
main();