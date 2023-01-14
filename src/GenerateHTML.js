//import { Employee } from "../lib/Employee.js";

export default function GenerateHTML(employees) {
    //console.log('Inside GenerateHTML');
    employees.forEach(emp => {
        console.log(emp.getRole());
    });
    return;
}