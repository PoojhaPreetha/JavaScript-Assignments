console.log("destructuring objects");
const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame: "Two player dice game using JavaScript"
    }
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);
//destructuring
const {name,age,projects}=student;
console.log(name,age,projects);