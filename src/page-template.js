const generateCards = employee => {
    
    
    return `
                    <div class="card">
                        <div class="card-header">
                            <h2>${employee.getName()}</h2>
                            <h3>${employee.getRole()}</h3>
                        </div>
                        <div class="card-body">
                            <p class="card-text">ID: ${employee.getId()}</p>
                            <p class="card-text">Email: <a class="link" href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                            <p class="card-text">${speciality(employee)}</p>
                        </div>
                    </div>
    `
}

function speciality(employee) {

    const role = employee.getRole()

    if (role === 'Manager') {
        return `Office Number: ${employee.officeNumber}`
    }
    if (role === 'Engineer') {
        return `Github: <a class="link" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
    }

    if(role === 'Intern') {
        return `School: ${employee.getSchool()}`
    }
}

function generatePage(employeeArr) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="./style.css">
            <title>Employee Directory</title>
        </head>

        <body>
            <header>
            <h1>My Team</h1>
            </header>

            <main>
                <div class="container">
                    ${employeeArr.map(employee => generateCards(employee))}
                </div>
            </main>

        </body>

    `
}

module.exports = generatePage