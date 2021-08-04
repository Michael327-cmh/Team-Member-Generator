const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    }
    getRole() {
        console.log(`${this.role}`)
    };
    getSchool() {
        console.log(`${this.school}`);
    }
}