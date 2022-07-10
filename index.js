const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const questions = [
    {
        type: 'input',
        name: 'name',
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
        name: 'id',
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
        name: 'email',
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

    {
        type: 'confirm',
        name: 'confirmNewEmployee',
        message: 'Would you like to add a new Employee?',
        default: false
    },

    {
        type: 'list',
        name: 'newEmployee',
        message: 'What type of Employee would you like to add?`',
        choices: ['Engineer', 'Intern'],
        when: ({confirmNewEmployee}) => {
            if (confirmNewEmployee) {
                return true
            }else {
                return false
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter your engineer's name",
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
        name: 'id',
        message: "Please enter your engineer's id",
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
        name: 'email',
        message: "Please enter your engineer's email",
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
        name: 'github',
        message: "Please enter your engineer's github username",
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
        type: 'confirm',
        name: 'confirmNewEmployee',
        message: 'Would you like to add a new Employee?',
        default: false
    },

    {
        type: 'list',
        name: 'newEmployee',
        message: 'What type of Employee would you like to add?`',
        choices: ['Engineer', 'Intern'],
        when: ({confirmNewEmployee}) => {
            if (confirmNewEmployee) {
                return true
            }else {
                return false
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter your intern's name",
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
        name: 'id',
        message: "Please enter your intern's id",
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
        name: 'email',
        message: "Please enter your intern's email",
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
        name: 'school',
        message: "What school does your intern attend?",
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
        type: 'confirm',
        name: 'confirmNewEmployee',
        message: 'Would you like to add a new Employee?',
        default: false
    },

    {
        type: 'list',
        name: 'newEmployee',
        message: 'What type of Employee would you like to add?`',
        choices: ['Engineer', 'Intern'],
        when: ({confirmNewEmployee}) => {
            if (confirmNewEmployee) {
                return true
            }else {
                return false
            }
        }
    }
]


function promptUser() {

    console.log("Welcome to our Employee Directory Generator.  To start, please begin by entering your manager's information")

inquirer.prompt(questions)
    .then(({newEmployee}) => {
        if (newEmployee === 'Engineer') {
            addEngineer()
        }else if (newEmployee === 'Intern'){
            addIntern()
        }
    })
}

function addEngineer() {
    console.log("Enter relevant information about your engineer")
        inquirer.prompt(engineerQuestions)
        .then(({newEmployee}) => {
            if (newEmployee === 'Engineer') {
                addEngineer()
            }else if (newEmployee === 'Intern'){
                addIntern()
            }
        })
}

function addIntern() {
    console.log("Please enter relevant information about your intern!")
        inquirer.prompt(internQuestions)
        .then(({newEmployee}) => {
            if (newEmployee === 'Engineer') {
                addEngineer()
            }else if (newEmployee === 'Intern'){
                addIntern()
            }
        })
}

promptUser()
