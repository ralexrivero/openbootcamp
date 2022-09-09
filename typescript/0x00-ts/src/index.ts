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