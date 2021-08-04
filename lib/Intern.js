const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, internrole) {
        super(name, id, email);
        this.school = school;
        this.internrole = internrole;
    }
    getRole() {
        console.log(`${this.internrole}`)
    };
    getSchool() {
        console.log(`${this.school}`);
    }
}