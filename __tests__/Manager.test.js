const Manager = require('../lib/Manager')

test("create Manager object", () => {
    const manager = new Manager('Karen', 5, 'karen@gmail.com', 314)

    expect(manager.officeNumber).toEqual(314)
})

test("get role to return Manager", () => {
    const manager = new Manager('Karen', 5, 'karen@gmail.com', 314)

    expect(manager.getRole()).toBe('Manager')
})