const prompt = require('prompt-sync')();
class CashDispenser{
	constructor(input, bills, sumOfBills) {
    	this.input = input;
        this.bills = bills;
        this.sumOfBills = sumOfBills;
    }
}
let value = parseFloat(prompt("Podaj kwote: "));
let session = new CashDispenser(value, [500, 20, 10, 2, 0.20, 0.10, 0.02], 0);
session.bills.forEach(item => {
    session.sumOfBills += Math.floor(session.input/item);
    session.input %= item;
});
console.log(session.sumOfBills);