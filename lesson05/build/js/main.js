"use strict";
/* interface TransactionObject {
  readonly [index: string]: number;
}
 */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    /*   Dave: 30, */
};
console.log(todaysTransactions);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const income in monthlyIncomes) {
    console.log(monthlyIncomes[income]);
}
const numbers = {
    number1: 1,
    number2: 2,
    number3: 3,
};
for (const number in numbers) {
    console.log(numbers[number]);
}
