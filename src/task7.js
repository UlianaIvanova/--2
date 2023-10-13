const a = 2;
const b = 3;
const c = 4;

const p = (a + b + c) / 2;

const result = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(result);