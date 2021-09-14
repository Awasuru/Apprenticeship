const prompt = require('prompt-sync')();
class MathEngine{
	constructor(num1,num2){
    	this.num1=num1;
      	this.num2=num1;
    }
  	sum(){
    	return this.num1+this.num2;
    }
    substract(){
    	return this.num1-this.num2;
    }
    multiply(){
    	return this.num1*this.num2;
    }
    divide(){
    	return this.num1/this.num2;
    }
}
let choice, number1, number2, result, numSet1;
console.log('1 - sum\n2 - subtract\n3 - multiply\n4 - divide');
choice = prompt("What do you want to do with numbers? : ");
number1 = parseFloat(prompt('Choose the first number : '));
number2 = parseFloat(prompt('Choose the second number : '));
numSet1 = new MathEngine(number1, number2);
switch(choice) {
    case '1':
        result = numSet1.sum();
        console.log(result);
        break;
    case '2':
        result = numSet1.substract();
        console.log(result);
        break;
    case '3':
        if (number2 == 0) {
            console.log('Multiplier cannot be equal to 0.');
        }
        else{
            result = numSet1.multiply();
            console.log(result);
        }
        break;
    case '4':
        if (number2 == 0) {
            console.log('Divider cannot be equal to 0.');
        }
        else{
            result = numSet1.divide();
            console.log(result);
        }
        break; 
    default:
        console.log('You have to choose between options 1 to 4.');
        break;
  }