const doubleIt = num => num * 2;
const divNum = (x, y) => x / y;
const calcMath = (x,y) => {
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}

console.log(doubleIt(5));
console.log(divNum(10,5));
console.log(calcMath(20, 13));