const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber
    }

    getRole() {
        let role = "Manager"
        return role
    }
}

module.exports = Manager