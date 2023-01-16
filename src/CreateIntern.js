import inquirer from "inquirer";
import chalk from "chalk";
import Intern from "../lib/Intern.js";

//This function prompts for information, then returns an instance of an Intern
export default async function CreateIntern() {
  let intern;
  await inquirer
    .prompt([
      {
        name: "internName",
        message: `What is the Intern's ${chalk.bold.red("name")} ?}`,
      },
      {
        name: "internId",
        message: `What is the Intern's ${chalk.bold.red("ID")} ?}`,
      },
      {
        name: "internEmail",
        message: `What is the Intern's ${chalk.bold.red("Email")} address ?`,
      },
      {
        name: "internSchool",
        message: `What is the Intern's ${chalk.bold.red("School")} ?`,
      },
    ])
    .then((answers) => {
      intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
    });
  return intern;
}
