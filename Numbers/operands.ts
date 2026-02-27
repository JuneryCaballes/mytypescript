export class Operands {
    constructor(public left: number, public right: number) {} 

    get sum(): number {
        return this.left + this.right;
    }

    get difference(): number {
        return this.left - this.right;
    }

    get product(): number {
        return this.left * this.right;
    }

    get quotient(): number {
        return this.left / this.right;
    }

}