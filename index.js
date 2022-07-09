const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


function promptUser() {

    console.log("Welcome to our Employee Directory Generator.  To start, please begin by entering your manager's information")

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter your manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true
                }else {
                    console.log('Please fill in the field!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'managerId',
            message: "Please enter your manager's id",
            validate: nameInput => {
                if (nameInput) {
                    return true
                }else {
                    console.log('Please fill in the field!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter your manager's email",
            validate: nameInput => {
                if (nameInput) {
                    return true
                }else {
                    console.log('Please fill in the field!')
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter your manager's office number",
            validate: nameInput => {
                if (nameInput) {
                    return true
                }else {
                    console.log('Please fill in the field!')
                    return false
                }
            }
        },
    ])
}

promptUser()