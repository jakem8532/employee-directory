const generateCards = employeeArr => {
    return `
    <div class="container">
                <div class="card">
                    <div class="card-header>
                        <h2>name</h2>
                    </div>
                </div>
    </div>
    `
}

module.exports = directoryData => {
    console.log(directoryData)

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
                ${generateCards(directoryData)}
            </main>

        </body>

    `
}