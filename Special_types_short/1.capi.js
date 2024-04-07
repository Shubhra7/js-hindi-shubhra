// map, filter and reduce - o/p Based Questions
// Question1 

let student =[
    {name: "Piyush",roll: 31},
    {name: "Ajay",roll: 32},
    {name: "Kaushal",roll: 33},
    {name: "Dilpreet",roll: 34}
];

// let name=[];
// for(let i=0; i<student.length; i++)
// {
//     name.push(student[i].name.toUpperCase());
// }

const name =student.map(stu => stu.name.toUpperCase());
console.log(name);