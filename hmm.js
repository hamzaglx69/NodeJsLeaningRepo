const fd = require('node:fs')

const {readFile, writeFile} = require('node:fs')

const rd = readFile('./testdir/first.txt', 'utf8', (err, data) => {
    if (err) {
        return;
    }
    console.log(data);    
});

module.exports = rd;