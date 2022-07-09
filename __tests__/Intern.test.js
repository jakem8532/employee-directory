const Intern = require('../lib/Intern')

test("create Intern object", () => {
    const intern = new Intern('Sarah', 2, 'sarah@gmail.com', 'Appalachian State')

    expect(intern.school).toBe('Appalachian State')
})

test("getSchool that Intern attends", () => {
    const intern = new Intern('Sarah', 2, 'sarah@gmail.com', 'Appalachian State')

    expect(intern.getSchool()).toBe("Appalachian State")
})

test("get role of Intern", () => {
    const intern = new Intern('Sarah', 2, 'sarah@gmail.com', 'Appalachian State')

    expect(intern.getRole()).toBe('Intern')
})