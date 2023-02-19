// Index Signature -> Assinatura de índice
interface TransactionObject {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

/* interface TransactionObject {
  readonly [index: string]: number;
}
 */

const todaysTransactions: TransactionObject = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  /*   Dave: 30, */
};

console.log(todaysTransactions);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObject): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

console.log(todaysTransactions['Dave']);

/////////////////////////////////////////////////

interface Student {
  ///[key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};

//console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
});

///////////////////

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const income in monthlyIncomes) {
  console.log(monthlyIncomes[income as keyof Incomes]);
}

interface Numbers {
  number1: number;
  number2: number;
  number3: number;
}

const numbers: Numbers = {
  number1: 1,
  number2: 2,
  number3: 3,
};

for (const number in numbers) {
  console.log(numbers[number as keyof Numbers]);
}
