'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {

    let n = arr.length;
    let arr_pos = [];
    let arr_neg = [];
    let arr_z = [];
    for (var i = 0; i < n; i++) {
        if (arr[i] > 0) {
            arr_pos.push(arr[i]);
        } else if (arr[i] == 0) {
            arr_z.push(arr[i]);
        } else {
            arr_neg.push(arr[i]);
        }
    }
    let dec_pos = (arr_pos.length / n).toFixed(6);
    let dec_neg = (arr_neg.length / n).toFixed(6);
    let dec_z = (arr_z.length / n).toFixed(6);
    return (console.log(dec_pos),console.log(dec_neg),console.log(dec_z));

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
