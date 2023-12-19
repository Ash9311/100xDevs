// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function writeTotheFile(filePath,content){
    fs.writeFile(filePath,content,(err)=>{
        if(err){
            console.error(`error writing to the file: ${err.message}`);
            return;
        }
        console.log('write to file successful');
    })
}

let content = 'write content into the file';
let filePath = 'C:/100xDevs/week-2/01-async-js/file.txt'

writeTotheFile(filePath,content);