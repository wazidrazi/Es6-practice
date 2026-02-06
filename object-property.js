const students = [
    {name : "wazid", id: 23},
    {name : "tamim", id: 21},
    {name : "Samir", id: 28},
    {name : "ramim", id: 24}
];
// const studentName = [];

// for (let i = 0; i < students.length; i++){
//     let result = students[i];
    
//     studentName.push(result.name);
// }
// console.log(studentName);

const studentNames = students.map(student => student.name);
console.log(studentNames);

const studentId = students.filter(student => student.id > 23);
console.log(studentId);
