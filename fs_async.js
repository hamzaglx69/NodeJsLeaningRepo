/*
const fs = require('fs').promises;
const {readFile, writeFile} = require('fs')
*/


/*
var path = './testdir/first.txt'

async function readFileAsync(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync(path)
*/


// We will call this the 'mushkil method'
/*
var path1 = './testdir/first.txt'
var path2 = './testdir/second.txt'
var outputPath = './testdir/newfile.txt'

readFile(path1, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const first = data

    readFile(path2, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data
        writeFile(outputPath, `Here is the result -> ${first} \n ${second}`, (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(data)
        })
    })
})
*/

//Let's take a look at the 'asaan' method for async file read and write

const fs = require('node:fs').promises

var path1 = './testdir/first.txt'
var path2 = './testdir/second.txt'
var op = './testdir/newfile_asaan.txt'

console.log(`start`)

async function asaan(path1, path2, path3) {
    try {
        const first = await fs.readFile(path1, 'utf8');
        const second = await fs.readFile(path2, 'utf8');
        await fs.writeFile(path3, `Here is the data in asaan file -> \n ${first} \n ${second}`);
        console.log(`writing`)
    }
    catch (err) {
        console.log(err);
        return;
    }
}

console.log(`starting next task`)

asaan(path1, path2, op)
