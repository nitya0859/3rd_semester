



function displayStudent(student){
    console.log(student.name);
    console.log(student.age);
}

let student= {
    name:"Rahul",
    age:20
};

let student_arr=[
    {
        name:"Rahul",
        age:20  
    },
    {
        name:"Ramesh",
        age:22  
    },
    {
        name:"Priya",
        age:21
    }

];


function displayStudents(data){
    for(let student of data){
        console.log(student.name,student.age);
    }
}

displayStudents(student_arr);
function calculateTotal(student){
    let total=0;
    for(let mark of student.marks){
        total+=mark;
    }
    return total;
}

let result=calculateTotal(student);

console.log(result);



let r=function(a,b)
 {console.log(a+b);};
r(10,20);


