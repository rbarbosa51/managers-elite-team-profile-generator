//import { Employee } from "../lib/Employee.js";
import fs from 'fs';
//Global
const htmlCard = `
<div class="employeeCard">
    <div class="cardTitle">
        <div id="name">Jared</div>
        <div id="role"><img class="whiteFill" src="mug.svg" height="18em">  Manager</div>
    </div>
    <div class="cardContent">
        <p class="data">ID: 1</p>
        <p class="data">Email:</p>
        <p class="data"><a href="mailto:email@example.com">email@email.com</a></p>
        <p class="data">Office Number:</p>
        <p class="data">123-456-7890</p>
    </div>
</div>
`;
let cardsPlaceholder = null;
const htmlDocumentTemplate = `
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
        ${cardsPlaceholder}
    </main>
</body>
</html>
`;

export default function GenerateHTML(employees) {
    //console.log('Inside GenerateHTML');
    employees.forEach(emp => {
        console.log(emp.getRole());
    });
    console.log(htmlDocumentTemplate);
    return;
}