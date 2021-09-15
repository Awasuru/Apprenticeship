const prompt = require('prompt-sync')();
let num1, num2, operator, result, choice;
console.log('1 - sum\n2 - subtract\n3 - multiply\n4 - divide');
choice = prompt("What do you want to do with numbers? : ");
num1 = parseFloat(prompt('Choose the first number : '));
num2 = parseFloat(prompt('Choose the second number : '));
switch(choice) {
    case '1':
        operator == '+';
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case '2':
        operator == '-';
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case '3':
        if (num2 == 0) {
            console.log('Multiplier cannot be equal to 0.');
        }
        else{
        operator == '*';
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ${result}`);
        }
        break;
    case '4':
        if (num2 == 0) {
            console.log('Divider cannot be equal to 0.');
        }
        else{
        operator == '/';
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        }
        break; 
    default:
        console.log('Podaj numer od 1 do 4.');
        break;
  }