const Employee = require('../lib/Employee.js')

test("create an Employee object", () => {
    const employee = new Employee('Jane', 1, "jane1235@gmail.com")

    expect(employee.name).toBe('Jane')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})

test("get name of employee", () => {
    const employee = new Employee('Jane')

    expect(employee.getName()).toBe('Jane')
})

test("get id of employee", () => {
    const employee = new Employee('Jane', 1, "jane1235@gmail.com")

    expect(employee.getId()).toBe(1)
})

test("get employee email", () => {
    const employee = new Employee('Jane', 1, "jane1235@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test("get the role of the employee", () => {
    const employee = new Employee('Jane', 1, "jane1235@gmail.com")

    expect(employee.getRole()).toBe("Employee")
})