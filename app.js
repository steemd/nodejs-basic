
const analize = require('./analize');
const db = require('./db');
const diagram = require('./diagram');
const args = process.argv;

let customParams = args.slice(2);

console.log('app start');
if (customParams.length) {
    console.log(customParams);

} else {
    console.log(`load ${analize.name} ${db.name} ${diagram.name}`);
    analize.run();
}
console.log('app end');
