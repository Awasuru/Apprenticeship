const prompt = require('prompt-sync')();
let first, last, i;
first = parseFloat(prompt('Choose the starting number: '));
last = parseFloat(prompt('Choose the ending number: '));
if (first > last) {
    console.log("Last number can't be smaller than the first one.")
}
else {
    for (i = first; i < last+1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else {
            if (i % 5 === 0) {
                console.log("Buzz");
            }
            else {
                if (i % 3 === 0) {
                    console.log("Fizz");
                }
                else {
                    console.log(i);
                }
            }
        }
    }
}