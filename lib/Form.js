const inquirer = require('inquirer')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')


class Form {
    promptUser() {
        console.log("Welcome to the Employee directory generator! Lets get started by adding your Manager information!")
        inquirer.prompt([
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
        ]).then(({name, id, email, officeNumber}) => {
            this.manager = new Manager(name, id, email, officeNumber)
            this.addEmployee()
        })
    }

    addEmployee() {
        inquirer
            .prompt([
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
                            console.log(Manager, Engineer, Intern)
                            return false
                        }
                    }
                }
            ]).then(({newEmployee}) => {
                if (newEmployee === 'Engineer') {
                    this.addEngineer()
                }else if (newEmployee === 'Intern') {
                    this.addIntern()
                }
            })
    }

    addEngineer() {
        inquirer
            .prompt([
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
            ]).then(({name, id, email, github}) => {
                this.engineer = new Engineer(name, id, email, github)
                this.addEmployee()
            })
    }

    addIntern() {
        console.log("Please enter the relevant information about your Intern")

        inquirer
            .prompt([
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
            ]).then(({name, email, id, school}) => {
                this.intern = new Intern(name, email, id, school)
                this.addEmployee()
            })
    }
}

module.exports = Form