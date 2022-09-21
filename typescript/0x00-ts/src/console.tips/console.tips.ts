// console.log

console.log('hello world');

let listA = [1, 2, 3];

listA.forEach((item) => {
    console.log(item);
})

// or more simplyfied

listA.forEach((_) => console.log(_));

const firstName = 'John';

console.log(`Hello ${firstName}`);

// clean console

// console.clear();

// console assert

let a = 1;
let b = 2;
console.assert(a >  b, 'fail message');

// console count

function counter(txt) {
    console.count(txt);
}

counter('hello');
counter('bye');
counter('hello');
counter('hello');
counter('bye');

// console reset counter

console.countReset('hello');
counter('hello');

// console info, warn, error add styles to the output

console.info('info');
console.warn('warn');
console.error('error');

// console trace

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.trace();
}

one();

// console dir

let car = {
    name: 'Tesla',
    model: 'S',
    year: 2019,
    specs: {
        motor: 'electric',
        battery: 'lithium',
    }
}
console.log(car);
console.dir(car);
console.table(car);

// execution time

function longRunningOperation() {
    for (let i = 0; i < 10000; i++) {
        let a = i * 2;
    }
    // do something
}

// inits the timer, an string identifier can be passed as optional parameter to get multiple timers
console.time('long running');
longRunningOperation();
console.timeEnd('long running'); // ends the timer

// console group, groups can be nested

console.group('numbers');
console.log(1);
console.log(2);
console.log(3);
console.groupEnd();
