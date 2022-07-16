const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generatePage = require('./src/page-template.js')

const employeeArr = []

function managerPrompt() {
    console.log("Welcome to the Employee directory generator! Lets get started by adding your Manager information!")
    return inquirer.prompt([
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
    ]).then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
        employeeArr.push(manager)
    })
}

function teamMemberPrompt() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'newEmployee',
                message: 'What type of Employee would you like to add?`',
                choices: ['Engineer', 'Intern'],
            },
            
            {
                type: 'input',
                name: 'name',
                message: "Please enter your employee's name",
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
                message: "Please enter your employee's id",
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
                message: "Please enter your employee's email",
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
                when: ({newEmployee}) => {
                    if(newEmployee === 'Engineer') {
                        return true
                    }
                    else{
                        return false
                    }
                },
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
                when: ({newEmployee}) => {
                    if(newEmployee === 'Intern') {
                        return true
                    }
                    else{
                        return false
                    }
                },
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
        ]).then(employeeInfo => {
            if (employeeInfo.newEmployee === 'Engineer') {
                const addEmployee = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github)
                employeeArr.push(addEmployee)
            }else if (employeeInfo.newEmployee === 'Intern') {
                const addEmployee = new Intern(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.school)
                employeeArr.push(addEmployee)
            }

            if(employeeInfo.confirmNewEmployee) {
                return teamMemberPrompt()
            }else {
                return employeeArr
            }
        })
}

const writeFile = data => {
    console.log(data);
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                console.log(err);
                return;
            }
        
            console.log('Page created! Check out index.html in this directory to see it!');
                  
        })
}

const copyFile = () => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err)
            return
        }

    })    
}

managerPrompt()
    .then(teamMemberPrompt)
    .then(employeeArr => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => writeFile(pageHTML))
    .then(copyFile())
    .catch(err => {
        console.log(err)
    })