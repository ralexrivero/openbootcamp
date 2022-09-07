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
