const http = require('http');
const url = require('url');
//const cluster = require('cluster');
//const os = require('os');
const path = require('path');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const filePath = path.join(__dirname, './index.html');
const list = fs.readdir(filePath);
const items = inquirer
    .prompt([{
            name: "fileName",
            type: "list",
            message: "Choose file:",
            choices: list,
        }]).then((answer) => {
        console.log(answer.fileName);
		}) 
		
const server = http.createServer((req, res) => {
    console.log(`Worker ${process.pid} handling request`);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    list.pipe(res);
});
const data = await fs.readFile(filePath);
console.log(`Worker ${process.pid} is running`);
server.listen(5555);



