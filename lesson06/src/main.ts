type One = string;
type Two = string | number;
type Three = 'Hello';

// convert to more or less specific
let a: One = 'Hello';
let b = a as Two;
let c = a as Three;

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(1, 2, 'concat') as string;

// Be careful! TS sees no problem - but a string is retunr
let nextVal: number = addOrConcat(1, 2, 'concat') as number;

10 as string;
10 as unknown as string;

// The DOM
const img = document.querySelector('img') as HTMLImageElement;
