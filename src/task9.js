const money = 200000;
const rat = 0.1;
let result = money;

result += result * rat;
result += result * rat;

const diff = result - money;

console.log(money);
console.log(diff);