"use strict";
console.log('Hello TypeScript');
// comment
/**
 * documentation
 * multi-line
 */
// variable declaration
const name = 'TypeScript';
console.log(`The language is ${name}`); // template string
let isError = false;
isError = true;
console.log(`error: ${isError}`);
console.log(`type: ${typeof (isError)}`);
// combined types in lists
let myArray = [1, 'ts', true];
console.log(myArray);
// enums
var State;
(function (State) {
    State["Completed"] = "C";
    State["Uncompleted"] = "U";
    State["Pending"] = "P";
})(State || (State = {}));
;
let stateTask = State.Completed;
console.log(stateTask);
var Position;
(function (Position) {
    Position[Position["Top"] = 1] = "Top";
    Position[Position["Second"] = 2] = "Second";
    Position[Position["Third"] = 3] = "Third";
})(Position || (Position = {}));
;
let racePosition = Position.Top;
console.log(Position[racePosition]);
// create variables that follows the Task interface
const task01 = {
    name: 'task01',
    state: State.Pending,
    priority: 1
};
console.log(task01);
console.log(task01.state);
const car = {
    price: 100000,
    brand: 'Tesla',
    year: 2020
};
console.log(car.brand);
// ternary operator
const age = car.year > 2019 ? 'New' : 'Old';
console.log(`The ${car.brand} is: ${age}`);
// Conditional
if (isError) {
    console.log('Error');
}
else {
    console.log('No error');
}
if (car.year <= 2019) {
    console.log('Almost new');
}
else if (car.year === 2020) {
    console.log('The car is from 2020');
}
else {
    console.log('An old car');
}
/**
 * iteration
 */
const taskList = [
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
];
console.log(taskList);
// for
console.log(`for`);
for (let index = 0; index < taskList.length; index++) {
    const task = taskList[index];
    console.log(`task: ${task.name}: ${task.priority}`);
}
// for in
for (const key in taskList) {
    console.log(`key: ${key}: ${taskList[key].name}`);
}
;
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
const { price, brand, year } = car;
console.log(`brand: ${brand}, price: ${price}, year: ${year}`);
// lists
let listMonday = ['eggs', 'bread', 'milk'];
let listTuesday = [...listMonday, 'meat', 'fish', 'vegetables'];
let listWednesday = ['strawberries', 'apples'];
let listThursday = [...listMonday, ...listWednesday];
let listFriday = [true, false, true];
let listSaturday = [...listThursday, ...listFriday];
console.log(listThursday);
console.log(listSaturday);
// objects
let stateApp = {
    user: 'admin',
    state: 'active',
    token: '123456'
};
let stateApp2 = Object.assign(Object.assign({}, stateApp), { token: 'abcdef' });
console.log(stateApp2);
