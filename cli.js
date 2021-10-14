const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const list
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
}
rl.question('Please enter path to the file: ', toPath => {
	list = fs.readdirSync(toPath).filter(isFile);
}

inquirer
    .prompt([{
            name: "fileName",
            type: "list",
            message: "Choose file:",
            choices: list,
        }])
    .then((answer) => {
        console.log(answer.fileName);
        const filePath = path.join(__dirname, answer.fileName);

	rl.question('Please enter pattern: ', pattern => {
		fs.readFile(filePath,'utf8', (err, data) => {
            console.log(data.matchAll(pattern));
        });
	
    });