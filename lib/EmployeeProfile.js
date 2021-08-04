const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee = require('./Employee');
const engineer = require('./Engineer');
const manager = require('./Manager');
const intern = require('./Intern');

const writeFileAsync = util.promisify(fs.writeFile);

class EmployeeProfile {
    constructor() {
        this.employeefile = 0;
    }

    create() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the role of the employee?',
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
            },
            {
                type: 'input',
                name: 'gitfolio',
                message: "What is the engineer's github username?",
            },
            {
                type: 'input',
                name: 'School',
                message: "What is the name of the intern's school?"
            }
        ])
        .then((answers) => {
            console.log(answers);
            
            const generateHTML = `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
              <title>My Team</title>
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
              <h1>My Team</h1>
                <ul class="list-group">
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.id}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.role}</li>
                  <li class="list-group-item">${answers.officeNumber}</li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.id}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.engineerrole}</li>
                  <li class="list-group-item">${answers.gitfolio}</li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.id}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.engineerrole}</li>
                  <li class="list-group-item">${answers.gitfolio}</li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.id}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.engineerrole}</li>
                  <li class="list-group-item">${answers.gitfolio}</li>
                </ul>
                <ul class="list-group">
                  <li class="list-group-item">${answers.name}</li>
                  <li class="list-group-item">${answers.id}</li>
                  <li class="list-group-item">${answers.email}</li>
                  <li class="list-group-item">${answers.internrole}</li>
                  <li class="list-group-item">${answers.school}</li>
                </ul>
              </div>
            </div>
            </body>
            </html>`;
            fs.writeFile('index.html', generateHTML, (err) => {
                err ? console.error (err) : console.log("Testing for a friend")
            })
        })
        .catch((error) => {
            if (error.isTtyError) {

            } else {}
        });        
        
        
    }
}
// this.employeefile >= 5;
// this.nextEmployee();

// nextEmployee() {


module.exports = EmployeeProfile;