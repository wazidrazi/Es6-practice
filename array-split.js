const numbers = [12, 33, 56, 66, 32, 27];

const divided = numbers.slice(2,4);

const cutOut = numbers.splice(1,3);
console.log(divided); 

console.log(cutOut);

console.log(numbers);

const together = numbers.join(" what ");
console.log(together);