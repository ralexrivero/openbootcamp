"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chief = exports.Employee = exports.Person = void 0;
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} ${this.lastName} and i'm ${this.age} years old`);
    }
}
exports.Person = Person;
class Employee extends Person {
    constructor(name, lastName, age, salary) {
        super(name, lastName, age);
        this.salary = salary;
    }
    saySalary() {
        console.log(`My salary is: $ ${this.salary}`);
    }
    greet() {
        super.greet();
        this.saySalary();
    }
}
exports.Employee = Employee;
class Chief extends Person {
    constructor(name, lastName, age) {
        super(name, lastName, age);
        this.employees = [];
    }
    greetChief() {
        console.log('I am the chief!');
    }
}
exports.Chief = Chief;
//# sourceMappingURL=Person.js.map