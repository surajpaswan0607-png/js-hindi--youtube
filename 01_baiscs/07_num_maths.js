const score= 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) // converts balance to string, return its len.
console.log(balance.toFixed(4))   // decimal precision upto 4 places

const otherNumber= 123.8966
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(5))