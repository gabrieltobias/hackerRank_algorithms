'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
var a = [5, 6, 7];
var b = [3, 6, 10];
// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let bob = 0;
    let alice = 0;
    for (let i = 0; i <= 2; i++) {
        if (a[i] > b[i]) {
            alice = alice + 1;
        } else if (b[i] > a[i]) {
            bob = bob + 1;
        } else { }
    }
    let res = [alice, bob];
    return (res);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
