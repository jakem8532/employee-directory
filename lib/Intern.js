const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    getSchool() {
        let school = this.school

        return school
    }

    getRole() {
        let role = 'Intern'
        return role
    }
}

module.exports = Intern