"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operands = void 0;
var Operands = /** @class */ (function () {
    function Operands(left, right) {
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Operands.prototype, "sum", {
        get: function () {
            return this.left + this.right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operands.prototype, "difference", {
        get: function () {
            return this.left - this.right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operands.prototype, "product", {
        get: function () {
            return this.left * this.right;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Operands.prototype, "quotient", {
        get: function () {
            return this.left / this.right;
        },
        enumerable: false,
        configurable: true
    });
    return Operands;
}());
exports.Operands = Operands;
