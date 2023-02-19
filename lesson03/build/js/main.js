"use strict";
// Arrays & Objects
let stringArray = ['one', 'hey', 'Dave'];
let guitarists = ['Strat', 'Les Paul', 'Telecaster', 5151];
let mixedData = ['one', 2, true];
stringArray[0] = 'Jhon';
stringArray.push('hey');
guitarists[0] = 1200;
guitarists.unshift('Jhim');
let test = [];
let bands = [];
bands.push('Metallica');
// Tuple
let myTuple = ['one', 2, true];
let mixed = ['Jhon', 1, false];
/* myTuple = mixed; */
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop2 = false;
let evt = {
    name: 'Eddie Van Halen',
    active: true,
    albums: ['Van Halen', '1984', '5150', 1991],
};
let jp = {
    name: 'Jimi',
    active: false,
    albums: ['Are You Experienced?', 'Axis: Bold as Love', 'Electric Ladyland'],
};
evt = jp;
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
