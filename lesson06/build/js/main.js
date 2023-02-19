"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a;
let c = a;
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(1, 2, 'concat');
// Be careful! TS sees no problem - but a string is retunr
let nextVal = addOrConcat(1, 2, 'concat');
