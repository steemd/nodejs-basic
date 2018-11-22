
var analize = require('./analize');
var db = require('./db');
var diagram = require('./diagram');

const readline = require('readline');
const fs = require('fs');
const sqlite = require('sqlite3');

// ID,"Name","Sex","Age","Height","Weight","Team","NOC","Games","Year","Season","City","Sport","Event","Medal"
// 1,"A Dijiang","M",24,180,80,"China","CHN","1992 Summer",1992,"Summer","Barcelona","Basketball","Basketball Men's Basketball",NA

const args = process.argv;
console.log('app start');
console.log(args);


console.log(`load ${analize.name} ${db.name} ${diagram.name}`);
 
// const rl = readline.createInterface({
//   input: fs.createReadStream('athlete_events.csv'),
//   crlfDelay: Infinity
// });
 
// rl.on('line', (line) => {
//   console.log(`Line from file: ${line}`);
// });

console.log('app end');
