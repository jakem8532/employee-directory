const Engineer = require('../lib/Engineer')

test("create Engineer object", () => {
    const engineer = new Engineer('Jake', 1, 'jakem8532','jakem8532')

    expect(engineer.github).toBe('jakem8532')
})

test("get github account of the engineer", () => {
    const engineer = new Engineer('Jake', 1, 'jakem8532','jakem8532')

    expect(engineer.getGithub()).toBe('jakem8532')
})

test("get role of engineer", () => {
    const engineer = new Engineer('Jake', 1, 'jakem8532','jakem8532')

    expect(engineer.getRole()).toBe("Engineer")
})