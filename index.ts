import { Operands } from './Numbers/operands';
import User from "./Person/user";

//#region User Information
let user = new User("Alice", "Johnson", "Smith", new Date(1985, 10, 20), "alice.johnson@example.com", "Married");

console.log(`Full Name: ${user.getFullName()}`);
console.log(`Age: ${user.getAge()}`);
console.log(`Email Domain: ${user.getEmailDomain()}`);
console.log(`Marital Status: ${user.getMaritalStatus()}`);
//#endregion

//#region Booleans

var number = 4;
var myString = "Hello, TypeScript!";
var emptyVariable;
var nullVariabe = null;
if (number) {
    console.log(true);
}
else {
    console.log(false);
}
if (myString) {
    console.log(true);
}
else {
    console.log(false);
}
if (emptyVariable) {
    console.log(true);
}
else {
    console.log(false);
}
if (nullVariabe) {
    console.log(true);
}
else {
    console.log(false);
}

//#endregion

//#region Integers
let firstInteger: number = 10;
let secondInteger: number = 5;

let operands = new Operands(firstInteger, secondInteger);

console.log(`Sum: ${operands.sum}`);
console.log(`Difference: ${operands.difference}`);
console.log(`Product: ${operands.product}`);
console.log(`Quotient: ${operands.quotient}`);
console.log(`Square of Left: ${operands.squareOfLeft}`);
console.log(`Square of Right: ${operands.squareOfRight}`);

//#endregion