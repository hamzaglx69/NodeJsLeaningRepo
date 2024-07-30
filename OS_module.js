const os = require('node:os'); // or require('node:os');

const information = {
    name : os.type(),
    release : os.release()
}

information.name = 'woah';

console.log(information)