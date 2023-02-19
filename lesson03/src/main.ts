// Arrays & Objects

let stringArray = ['one', 'hey', 'Dave'];

let guitarists = ['Strat', 'Les Paul', 'Telecaster', 5151];

let mixedData = ['one', 2, true];

stringArray[0] = 'Jhon';
stringArray.push('hey');

guitarists[0] = 1200;

guitarists.unshift('Jhim');

let test = [];

let bands: string[] = [];
bands.push('Metallica');

// Tuple

let myTuple: [string, number, boolean] = ['one', 2, true];

let mixed = ['Jhon', 1, false];

/* myTuple = mixed; */

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
};

exampleObj.prop2 = false;

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evt: Guitarist = {
  name: 'Eddie Van Halen',
  active: true,
  albums: ['Van Halen', '1984', '5150', 1991],
};

let jp: Guitarist = {
  name: 'Jimi',
  active: false,
  albums: ['Are You Experienced?', 'Axis: Bold as Love', 'Electric Ladyland'],
};

evt = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name.toUpperCase()}`;
};

console.log(greetGuitarist(jp));

// Enums

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
