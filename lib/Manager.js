const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, managerrole) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.managerrole = managerrole;
    }
    getRole() {
        console.log(`${this.managerrole}`)
    };
}