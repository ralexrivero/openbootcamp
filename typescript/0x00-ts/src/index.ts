import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from "cookies-utils";
import { COURSE_LIST } from "./mock/courses.mock";
import { Course } from "./models/Course";
import { ITask, Level } from "./models/interfaces/Task.Interfaces";
import { Chief, Employee } from "./models/Person";
import { Program } from "./models/Program";
import { Student } from "./models/Student";

console.log('Hello TypeScript');

// comment

/**
 * documentation
 * multi-line
 */

// variable declaration

const name: string = 'TypeScript';

console.log(`The language is ${name}`); // template string

let isError: boolean = false;

isError = true;

console.log(`error: ${isError}`);
console.log(`type: ${typeof(isError)}`);

// combined types in lists

let myArray: (string | number | boolean)[] = [1, 'ts', true]
console.log(myArray);

// enums

enum State {
    'Completed' = 'C',
    'Uncompleted' = 'U',
    'Pending' = 'P',
};

let stateTask: State = State.Completed;
console.log(stateTask);

enum Position {
    'Top' = 1,
    'Second',
    'Third'
};

let racePosition: Position = Position.Top;
console.log(Position[racePosition]);

// interfaces

interface Task {
    name: string,
    state: State,
    priority: number
}

// create variables that follows the Task interface

const task01: Task = {
    name: 'task01',
    state: State.Pending,
    priority: 1
}

console.log(task01);
console.log(task01.state);

// Create types, usually more complex than interfaces. Also can be exported

type sku = {
    price: number,
    brand: string,
    year: number
}

const car: sku = {
    price: 100000,
    brand: 'Tesla',
    year: 2020
}

console.log(car.brand);

// ternary operator
const age = car.year > 2019 ? 'New' : 'Old'
console.log(`The ${car.brand} is: ${age}`);

// Conditional

if(isError) {
    console.log('Error');
} else {
    console.log('No error');
}

if(car.year <= 2019) {
    console.log('Almost new');
} else if(car.year === 2020) {
    console.log('The car is from 2020');
} else {
    console.log('An old car')
}

/**
 * iteration
 */


const taskList: Task[] = [
    {
        name: 'task001',
        priority: 0,
        state: State.Pending
    },
    {
        name: 'task002',
        priority: 1,
        state: State.Pending
    },
    {
        name: 'task003',
        priority: 2,
        state: State.Uncompleted
    }
]

console.log(taskList);

// for
console.log(`for`);
for (let index = 0; index < taskList.length; index++) {
    const task: Task = taskList[index];
    console.log(`task: ${task.name}: ${task.priority}`);
}

// for in

for (const key in taskList) {
    console.log(`key: ${key}: ${taskList[key].name}`);
};

// foreach

taskList.forEach(task => {
    console.log(`${task.name}: priority: ${task.priority}, state: ${task.state}`);
});

taskList.forEach((task, index) => {
    console.log(`${index}: ${task.name}`);
});

/**
 * multiple asignment with spread factor
 */

const {price, brand, year} = car;

console.log(`brand: ${brand}, price: ${price}, year: ${year}`);

// lists

let listMonday: string[] = ['eggs', 'bread', 'milk'];
let listTuesday: string[] = [...listMonday, 'meat', 'fish', 'vegetables'];
let listWednesday: string[] = ['strawberries', 'apples'];
let listThursday: string[] = [...listMonday, ...listWednesday];
let listFriday: boolean[] = [true, false, true];
let listSaturday = [...listThursday, ...listFriday];

console.log(listThursday);
console.log(listSaturday);

// objects

let stateApp = {
    user: 'admin',
    state: 'active',
    token: '123456'
}

let stateApp2 = {
    ...stateApp,
    token: 'abcdef'
}

console.log(stateApp2);

/**
 * Functions
 */

/**
 * greeting - print a greeting message to the stdout
 */
function greetings() {
    let name: string = 'TypeScript';
    console.log(`Hello ${name}`);
}

// call the function greeetings
greetings();

/**
 * greetingYou - print a greeting message to the stdout
 * @param name - custom name to print
 */
function greetingYou(name: string) {
    console.log(`Hello ${name}`);
}

greetingYou('Rony');

/**
 * byeDefault - print a bye message to the stdout
 * @param name - custom name to print, default value is provided
 */
function byeDefault(name: string = 'John Doe') {
    console.log(`Bye ${name}`);
}

byeDefault();
byeDefault('Ronald');

/**
 * byeOptional - print a bye message to the stdout
 * @param name - optional name to print, default is undefined
 */
function byeOptional(name?: string) {
    if (name) {
        console.log(`Bye ${name}!`);
    } else {
        console.log('Bye!');
    }
}

byeOptional();
byeOptional('Tom');

/**
 * multiParam - print a message to the stdout using multiple and optional parameters
 * @param name - requiered name to print
 * @param lastName - optional last name to print
 * @param age - default value to print
 */
function multiParam(name: string, lastName?: string, age: number = 18) {
    if (lastName) {
        console.log(`${name} ${lastName} is ${age} years old`);
    } else {
        console.log(`${name} is ${age} years old`);
    }
};

multiParam('Carl');
multiParam('Carl', 'White');
multiParam('Carl', 'White', 25);
multiParam('Carl', undefined, 30);

/**
 * multiType - recieves multi type parameter
 * @param entry can be string, number or boolean
 * @returns void
 */
function multiType(entry: string | number | boolean): void {
    if (typeof(entry) === 'string') {
        console.log(`string value: ${entry}`);
    } else if (typeof(entry) === 'number') {
        console.log(`Number value: ${entry}`);
    } else if (typeof(entry) === 'boolean') {
        console.log(`Boolean value: ${entry}`);
    } else {
        console.log(`Default case`);
    }
};

multiType('Some text');
multiType(3);
multiType(true);
multiType(false);

// return values

/**
 * myReturn - receives string params with default values and defines return string type
 * @param name
 * @param lastName
 * @returns (string) concatenates name, lastName
 */
function myReturn(name: string = 'Default Name', lastName: string = 'Default LastName'): string {
    return `${name} ${lastName}`;
}

const myReturnValue = myReturn('John', 'Doe Gallager');
console.log(myReturnValue);

// Variadic functions
/**
 * myVariadic - recieves a list of strings
 * @param names - list of names
 * @returns
 */
function myVariadic(...names:string[]): string[] {
    let nameList: string[] = [];
    names.forEach((name) =>
    {
        nameList.push(name);
    });
    return nameList;
}

console.log(myVariadic('Goku', 'Gohan', 'Vegeta', 'Cell'));
console.log(myVariadic('one'));

/**
 * multiAdd - add multiple numbers
 * @param numbers - list of numbers
 * @returns - addition
 */
function multiAdd(...numbers: number[]): number {
    let add: number = 0;
    numbers.forEach((number) => {
        add += number;
    });
    return add;
}

console.log(multiAdd(3));
console.log(multiAdd(1, 5, 25, 50, 2, 16));

// arrow functions, anonymous function
// () => {}

const myArrow = () => {console.log('This is an arrow function')}
myArrow();

type EmployeeA = {
    name: string,
    lastName: string,
    age: number
}

const employee2201: EmployeeA= {
    name: 'John',
    lastName: 'Mafee',
    age: 30
}

const showEmployee = (employee: EmployeeA): string => `${employee.name} ${employee.lastName} is ${employee.age} years old`;
console.log(showEmployee(employee2201));

// async functions

async function myAsyncFunc(): Promise<string> {
    await console.log('await task');
    return 'completed task';
}

myAsyncFunc().then((response) => {
    console.log(`async then: ${response}`)
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('All done'));

// generators functions
// generators generate to much values as defined, but not necessarilly has to finish

function* generatorFunc() {
    let index = 0;
    while(index < 5) {
        yield index++;
    }
}

//save generator in variable but don't execute
let myGenerator = generatorFunc();

// access the values
console.log(myGenerator.next().value); // 0
console.log(myGenerator.next().done);
console.log(myGenerator.next().value); // 2
console.log(myGenerator.next().done);
console.log(myGenerator.next().value); // 4
console.log(myGenerator.next().done);
console.log(myGenerator.next().value);
console.log(myGenerator.next().done);
console.log(myGenerator.next().value);
console.log(myGenerator.next().done);
console.log(myGenerator.next().value); // undefined
console.log(myGenerator.next().done);

// workder and watcher

function* watcher(value: number) {
    yield value; // first time emit the intial value
    yield* worker(value); // call the worker emitions to emit other values
    yield value + 10; // when finish add 10

}

function* worker(value: number) {
    yield value + 1;
    yield value + 2;
    yield value + 3;
}

let generatorSaga = watcher(0);
console.log(generatorSaga.next().value); // watcher
console.log(generatorSaga.next().value); // worker
console.log(generatorSaga.next().value); // worker
console.log(generatorSaga.next().value); // worker
console.log(generatorSaga.next().value); // watcher

// data persistence
// 1. LocalStorage : save data in the browser( doesn't clean automatically)
// 2. SessionStorage : only persists over browser session
// 3. Cookies : has expiracy date and URL scope

// 1. LocalStorage

/* const cookieOptions = {
    name: "user", // string,
    value: "rony", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
    domain: "localhost", // optional string,
    secure: true // optional boolean,
//    sameSite: "lax", // optional enum 'lax' | 'strict' | 'none'
  };

// set cookie
setCookie(cookieOptions);

// read cookie
getCookieValue('user');

// delete cookie
deleteCookie('user');

// delete all cookies
deleteAllCookies(); */

function saveStorage(): void {
    localStorage.set('name', 'Rony');
    sessionStorage.set('name', 'Rony');
}

function readStorage(): void {
    let name = localStorage.get('name');
    let nameSession = sessionStorage.get('name');
}

function deleteItem(item: string) {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
}

function deleteAll(): void {
    localStorage.clear();
    sessionStorage.clear();
}

// timer class

class Timer {
    public finish?: (time:number) => void;

    public start(): void {
        setTimeout(() => {
            if (!this.finish) return;
            // when the time pass, run finish function
            this.finish(Date.now());
        }, 10000)
    }
}

const myTimer: Timer = new Timer();

// Define the callback function to execute when the time pass
myTimer.finish = (time: number) => {
    console.log('Time is up, all task completed:', time)
}

// launch timer
myTimer.start(); // start the timeout, when finish, run the callback function finish()

// setInterval(() => { console.log('interval')}, 1000); // print 'interval' every 1 second

// delete the function running
delete myTimer.finish;

// class

const courseList: Course[] = COURSE_LIST;

console.log(courseList);

// create student

const student01: Student = new Student('Rony', courseList, 'Rivero');
console.log(`${student01.name} ${student01.lastName} studies:`);
student01.courses.forEach((course: Course) => {
    console.log(`\t - ${course.name} ${course.hours} hs`)
});

// instance and class

console.log(typeof(student01));
console.log(typeof(courseList));
console.log(typeof(COURSE_LIST));
console.log(typeof("abc"));
console.log(typeof(123));
const str = new String('hello');
console.log(str, str[2], typeof(str), str instanceof String);
console.log(student01 instanceof Student);

// get the studied hours of a student

student01.studentIDSet = '123456';
console.log(`${student01.name} (${student01.studentID}) has ${student01.studiedHours} studied hours in ${student01.coursesCount} courses`);

// inheritance and polymorphism

let employee001 = new Employee('Alex', 'Tesler', 35, 2000);
let employee002 = new Employee('Joe', 'Mac Tayler', 38, 2100);
let employee003 = new Employee('John', 'Ferguson', 42, 1800);

employee001.greet();

let chief = new Chief('Ronald', 'Rivero', 41);

chief.employees.push(employee001, employee002, employee003);

chief.employees.forEach((employee: Employee) => {
    employee.greet();
})

chief.greet();
chief.greetChief();

// using interfaces

let program: ITask = {
    title: 'Learn TypeScript',
    description: 'Practice using Katas to learn TS',
    completed: false,
    priority: Level.High,
    resume: function (): string {
        return `${this.title} = completed: ${this.completed}, level: ${this.priority}`;
    }
}

console.log(program.resume());

const taskPrograming001 = new Program('TS', 'Learn and practice TS', false, Level.High);
console.log(taskPrograming001.resume());

// decorators. Functions declared using the @ symbol
// Classes
// Parameters
// Methods
// Properties
// add extra properties

function Override(label: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class TestDecorator {
    @Override('test') // call Override function
    name: string = 'Ronald'
}

/* let test002 = new TestDecorator();
console.log(test002.name); */

// function to be used as decorator
function OnlyRead(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    })
}

class TestOnlyRead {
    @OnlyRead
    name: string = 'Only read name';
}

/* let test003 = new TestOnlyRead();
test003.name = 'Ralex';
console.log(test003.name); */

// Decorator for parameters in a method
function ShowPosition(target: any, propertyKey: string, parameterIndex:number ) {
    console.log(`Position: ${parameterIndex}`);
}

class TestDecoratorMethod {
    test(a: string, @ShowPosition b: boolean) {
        console.log(b);
    }
}

let test004 = new TestDecoratorMethod().test('Hello!!', false);

// creational patterns
// singleton

/* function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode(); */

// factory method
