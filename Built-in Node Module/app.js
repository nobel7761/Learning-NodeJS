const fs = require('fs');

let text = fs.readFileSync('./files/input.txt', 'utf-8');

console.log(text);

text = `Copied Text: ${text}`;

fs.writeFileSync('./files/output.txt', text);
