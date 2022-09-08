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
    name: string,
    year: number
}

const car: sku = {
    price: 100000,
    name: 'Tesla',
    year: 2020
}

console.log(car.name);

// ternary operator
const age = car.year > 2019 ? 'New' : 'Old'
console.log(`The ${car.name} is: ${age}`);

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
 * multiple asignment
 */

const {nameB, priorityB, stateB} = taskList;
