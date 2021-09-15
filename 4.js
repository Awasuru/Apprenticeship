const prompt = require('prompt-sync')();
let width, height;
width = parseFloat(prompt('Choose width of the rectangle : '));
height = parseFloat(prompt('Choose height of the rectangle : '));
for (var i = 0; i < height; i++){
    if (i == 0 || i == height-1){
        var pen ='*';
        for (var j = 1; j < width; j++) {
            pen += '*';
        }
        console.log(pen);
    }
    else {
        var space ='*';
        for (var j = 2; j < width; j++) {
            space += ' ';
        }
        space += '*';
        console.log(space);
    }
}