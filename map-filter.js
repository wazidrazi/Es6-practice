// const numbers = [2, 3, 4, 5, 6, 7];

// let results = numbers.map(num => num * num);

// console.log(results);


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let largerNumber = nums.filter(x => x > 6);              // filter from array

// console.log(largerNumber);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let largerNumber = nums.find(x => x > 6);              // find only one element

console.log(largerNumber);



let ages = [12, 18, 25, 15];
let ageLevel = ages.map(age => age >= 18 ? "Adult" : "Minor" );
console.log (ageLevel);

let marks = [35, 80, 25, 60];
let result = marks.map(mark => mark >= 40? "✅ Pass" : "❌ Fail")
console.log(result);


let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(fruit => {
    console.log("I Love" + fruit);
})


let salaries = [20000, 30000, 50000];
salaries.forEach(salary => 
    console.log(
        salary + " - " + (salary >= 40000 ? "Excellent" : salary >= 25000 ? "Good" : "Low")
    )
);

