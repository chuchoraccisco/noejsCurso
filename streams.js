const fs = require('fs');
const { WriteStream } = require('tty');

const readStream = fs.createReadStream('./docs/blog3.txt');  //we set from where we read data


// on is like an event which listes from 'data'
readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    WriteStream.write('\nNEW TEST\n');
    WriteStream.write(chunk);
    });


readStream.pipe(writeStream);
