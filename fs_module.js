// Asynchronous Method (fs.readFile): Preferred for non-blocking operations, allowing other code to run while waiting for the file read to complete.
// Synchronous Method (fs.readFileSync): Blocks execution until the file is read, useful for scripts or cases where blocking is acceptable.
const fs = require('node:fs')
const {writeFileSync} = require('node:fs')

const first = fs.readFileSync('./testdir/first.txt', 'utf8')
console.log(first)

const second = fs.readFile('./testdir/second.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log(data);
  });

  // let's write to a file (it was not made, created when this code was ran)
  writeFileSync('./testdir/newFile.txt', 'utf8', `This is a new file and content of old files is \n ${first} \n and second file content is \n ${second}`)