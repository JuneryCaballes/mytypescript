"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operands_1 = require("./Numbers/operands");
var operands = new operands_1.Operands(10, 5);
console.log("Sum: ".concat(operands.sum));
console.log("Difference: ".concat(operands.difference));
console.log("Product: ".concat(operands.product));
console.log("Quotient: ".concat(operands.quotient));
