import HeroBanner from "./src/HeroBanner.js";
import ClearScreen from "./src/ClearScreen.js";
import inquirer from "inquirer";
import Manager from "./lib/Manager.js";

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
    let name, id, email, office
    inquirer.prompt([
        {
            name: 'managerName',
            message: 'What is the manager name?'
        },
        {
            name: 'managerId',
            message: 'Please enter an ID for the manager'
        },
        {
            name: 'officeNumber',
            message: 'What is the managers office number?'
        }
    ]).then( (answers) => {
        console.log(`${answers.managerName}`);
    })
    //Enter main loop  Enter Intern, Engineer or exit

    //Generate html


}
main();