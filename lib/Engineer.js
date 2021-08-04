const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitfolio, engineerrole) {
        super(name, id, email);
        this.gitfolio = gitfolio;
        this.engineerrole = engineerrole;
    }
    getRole() {
        console.log(`${this.engineerrole}`)
    };
    getGithub() {
        console.log(`${this.gitfolio}`)
    };

}