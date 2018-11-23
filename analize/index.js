
const readline = require('readline');
const fs = require('fs');

const {athletes, events, games, results, sports, teams} = require('./scheme');

exports.name = 'analize';

// Data example
// ID,"Name","Sex","Age","Height","Weight","Team","NOC","Games","Year","Season","City","Sport","Event","Medal"
// 1,"A Dijiang","M",24,180,80,"China","CHN","1992 Summer",1992,"Summer","Barcelona","Basketball","Basketball Men's Basketball",NA

exports.run = function(){
    var iterator = 0;
    const rl = readline.createInterface({
        input: fs.createReadStream('test_data.csv'),
        crlfDelay: Infinity
    });
    
    rl.on('line', (line) => {
        iterator++;
        console.log(`Line ${iterator} from file: ${line}`);
    });
};

