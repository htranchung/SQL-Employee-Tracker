const inquirer = require('inquirer');
const db = require('./db/schema.sql');


function prompts() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: [
                    {
                        name: "View All Employees",
                    },
                    {
                        name: "View All Employees By Department",
                    },
                    {
                        name: "View All Employees By Manager",
                    },
                    {
                        name: "Add Employee",
                    },
                    {
                        name: "Remove Employee",
                    },
                    {
                        name: "Update Employee Role",
                    },
                    {
                        name: "Update Employee Manager",
                    },
                    {
                        name: "View All Roles",
                    },
                    {
                        name: "Add Role",
                    },
                    {
                        name: "Remove Role",
                    },
                    {
                        name: "View All Departments",
                    },
                    {
                        name: "Add Department",
                    },
                    {
                        name: "Remove Department",
                    },
                    {
                        name: "View Total Utilized Budget By Department",
                    },
                    {
                        name: "Quit",
                    }
                ]
            }
        ]).then((answers) => {
            if (answers.prompt === 'View All Employees') {
                db.query(`SELECT * FROM employee`), (err, results) => {
                    if (err) throw err;
                    console.log("Viewing All Employees: ");
                    console.table(result);
                    prompts();
                }
            } else if (answers.prompt === 'View All Roles') {
                db.query(`SELECT * FROM employee`), (err, results) => {
                    if (err) throw err;
                    console.log("Viewing All Employees: ");
                    console.table(result);
                    prompts();
                }
            } else if (answers.prompt === 'View All Departments') {
                db.query(`SELECT * FROM department`), (err, results) => {
                    if (err) throw err;
                    console.log("Viewing All department: ");
                    console.table(result);
                    prompts();
                }
            }
        });

}