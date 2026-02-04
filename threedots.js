const ages = [12, 33, 23, 33];
const ages2 = [23, 33, 22, 10];
const ages3 = [34, 56, 19];

const addAges = [...ages,...ages2, 14, 20, ...ages3];
console.log(addAges);

const salaries = [12000, 35000, 564500, 230000]

const total = Math.max(...salaries);
console.log(total);