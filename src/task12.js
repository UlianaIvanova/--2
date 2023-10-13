const a = 15;
const b = 10;
const c = 7;

const p = (a + b + c) / 2;

const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(result);