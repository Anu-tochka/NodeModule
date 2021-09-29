const colors = require("colors/safe");
let a = 10;
let z = 100;
let n = [];
nextPrime:
for (let i = a; i <= z; i++) { // Для всех i...

  for (let j = a; j < (z/2); j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  n.push(i);
}

let i = 0;
while (i <= n.length) { 

  console.log(colors.green(n[i]));
  console.log(colors.yellow(n[i+1]));
  console.log(colors.red(n[i+2]));
  i = i+3;
} 


