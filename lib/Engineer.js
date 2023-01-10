import {Employee} from './Employee.js';

export default class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }
    getGitHub() {
        return `https://github.com/${this.github}`;
    }
    getRole() {
        return 'Engineer'
    }
}