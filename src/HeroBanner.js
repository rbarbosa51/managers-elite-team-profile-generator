import chalk from "chalk";
import figlet from "figlet";

//This function generates a banner
export default function HeroBanner() {
    //Show Hero Banner Using the Contessa Figlet font
    let figText = figlet.textSync("Manager's Elite\nTeam Profile Generator", {font: 'contessa',horizontalLayout: 'full'});
    //Figlet only returns a string.  It has to be shown in the screen via console.log
    console.log(chalk.bold.red(figText));
    //Delay for 5 seconds 
    const initTime = Date.now();
    //Get the current time and subtract the initTime once its over 5000 (then end delay)
    while ( (Date.now() - initTime) < 5000) {
        //Waste clock cycles
    }
    
}