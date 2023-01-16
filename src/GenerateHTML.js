//import { Employee } from "../lib/Employee.js";
import fs from 'fs';
//Global
let cardsPlaceholder = '';

function makeCard(employee) {
    let field, label;
    switch (employee.getRole()) {
        case 'Manager':
            field = employee.officeNumber;
            label = 'Office Number:';
            break;
        case 'Engineer':
            field = employee.getGitHub();
            label = 'GitHub:';
            break;
        case 'Intern':
            field = employee.getSchool();
            label = 'School:';
            break;
    }
    return `
        <div class="employeeCard">
        <div class="cardTitle">
            <div id="name">${employee.name}</div>
            <div id="role"><img class="whiteFill" src="mug.svg" height="18em">${employee.getRole()}</div>
        </div>
        <div class="cardContent">
            <p class="data">ID: ${employee.id}</p>
            <p class="data">Email:</p>
            <p class="data"><a href="mailto:${employee.email}">${employee.email}</a></p>
            <p class="data">${label}</p>
            <p class="data">${field}</p>
        </div>
    </div>
    `;
}

function createHTMLDocument(cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Manager's Elite Team Profile</title>
        <link rel="stylesheet" href="./styles/styles.css">
    </head>
    <body>
        <nav>
            <h1>Manager's Elite Team Profile</h1>
        </nav>
        <main>
            ${cards}
        </main>
    </body>
    </html>
    `
}

export default function generateHTML(employees) {
    //console.log('Inside GenerateHTML');
    employees.forEach(emp => {
        console.log(emp.getRole());
        cardsPlaceholder += makeCard(emp);
    });
    const document = createHTMLDocument(cardsPlaceholder);
    console.log(document);
    return;
}