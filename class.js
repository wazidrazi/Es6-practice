class Student{
    constructor(sId, sName, sAge){
        this.name = sName;
        this.id = sId;
        this.age = sAge;
        this.school = "Horogonga college";
    }
}

const student1 = new Student(200048, 'wazid', 25);
const student2 = new Student(200023, 'Latif', 23);
const student3 = new Student(200056, 'Rahim', 26);

console.log(student1, student2, student3);