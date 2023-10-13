const money = 200000;
const rate = 0.1;
let result = money;

result += result * rate;
result += result * rate;

const diff = result - money;

console.log(money);
console.log(diff);