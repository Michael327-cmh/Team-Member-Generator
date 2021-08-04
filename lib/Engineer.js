const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitfolio, role) {
        super(name, id, email);
        this.gitfolio = gitfolio;
        this.role = role;
    }
    getRole() {
        console.log(`${this.role}`)
    };
    getGithub() {
        console.log(`${this.gitfolio}`)
    };

}