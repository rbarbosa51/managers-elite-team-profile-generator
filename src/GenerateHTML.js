import fs from "fs";
//Global
let cardsPlaceholder = "";

function makeCard(employee) {
  let field, label, iconName;
  switch (employee.getRole()) {
    case "Manager":
      field = employee.officeNumber;
      label = "Office Number:";
      iconName = "mug.svg";
      break;
    case "Engineer":
      field = `<a href='${employee.getGitHub()}'>${employee.getGitHub()}</a>`;
      label = "GitHub:";
      iconName = "glasses.svg";
      break;
    case "Intern":
      field = employee.getSchool();
      label = "School:";
      iconName = "graduate.svg";
      break;
  }
  return `
        <div class="employeeCard">
        <div class="cardTitle">
            <div id="name">${employee.name}</div>
            <div id="role"><img class="whiteFill" src="./icons/${iconName}" height="18em">${employee.getRole()}</div>
        </div>
        <div class="cardContent">
            <p class="data">ID: ${employee.id}</p>
            <p class="data">Email:
            <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p class="data">${label} ${field}</p>
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
    `;
}

export default function generateHTML(employees) {
  employees.forEach((emp) => {
    cardsPlaceholder += makeCard(emp);
  });
  const document = createHTMLDocument(cardsPlaceholder);
  try {
    fs.writeFile("./dist/index.html", document, (err) => {
      console.log(err);
    });
    console.log(
      "Success! HTML File was written.\nSee dist folder and the index.html file"
    );
  } catch (err) {
    console.log("Failure:" + err);
  }

  return;
}
