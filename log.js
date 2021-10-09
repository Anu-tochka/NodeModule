const fs = require('fs');
//const fsPromises = require('fs/promises');
const { Transform } = require('stream');

const readStream = fs.createReadStream('access.log', {
    flags: 'r',
	autoClose: true,
	highWaterMark: 254,
	fs: (fs.open())
});

const write89 = fs.createWriteStream('89.123.1.41_requests.log', {
    encoding: 'utf-8',
    flags: 'a',
});

const write34 = fs.createWriteStream('34.48.240.111_requests.log', {
    encoding: 'utf-8',
    flags: 'a',
});

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        if (chunk.toString().match(/89.123.1.41/)) write89.write(chunk);
        if (chunk.toString().match(/34.48.240.111/)) write34.write(chunk);
        callback();
    }
});

readStream.pipe(transformStream).pipe(process.stdout);
