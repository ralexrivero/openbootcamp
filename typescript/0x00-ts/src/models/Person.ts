export class Person {
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} ${this.lastName} and i'm ${this.age} years old`);
    }
}

export class Employee extends Person {
    salary: number;

    constructor(name: string, lastName: string, age: number, salary: number) {
        super(name, lastName, age);
        this.salary = salary;
    }

    saySalary(): void {
        console.log(`My salary is: $ ${this.salary}`)
    }

    greet(): void {
        super.greet();
        this.saySalary();
    }
}

export class Chief extends Person {
    employees: Employee[] = [];

    constructor(name: string, lastName: string, age: number) {
        super(name, lastName, age);
    }

    greetChief(): void {
        console.log('I am the chief!');
    }
}
