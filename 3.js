const prompt = require('prompt-sync')();
let width, height;
width = parseFloat(prompt('Choose width of the rectangle : '));
height = parseFloat(prompt('Choose height of the rectangle : '));
for (var i = 0; i < height; i++){
    var pen = "*";
    for (var y = 1; y < width; y++) {
        pen += '*';
    }
    console.log(pen);
}