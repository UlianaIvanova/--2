const second = 10390;

const hours = Math.floor(second / 3600);

const minute = Math.floor((second - hours * 3600) / 60);

const secre = (second - hours * 3600) - minute * 60;

console.log(hours + ' ч\n' +  minute + ' м\n' + secre + ' с\n');