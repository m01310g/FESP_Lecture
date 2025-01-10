// import { readFile } from 'node:fs';
const fs = require('fs');
const readFile = fs.readFile;
const readFileSync = fs.readFileSync;

// 비동기
// readFile('data.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// 동기
let data = readFileSync('data.txt');
console.log(data.toString());

let x = 30;
let y = 20;
let result = x + y;
console.log(result);