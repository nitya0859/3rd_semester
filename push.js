const express = require('express');
const app = express();

//Student Data
let students = [
    {id: 1, name: 'Rahul', branch: 'CSE'},
    {id: 2, name: 'Aman', branch: 'IT'},
  
];

//get route to fetch all students
app.get('/students', (req, res) => {
    res.json(students);
});

//start server
app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({message: 'Student added successfully', student: newStudent});
});
//start server 
app.listen(3005, () => {
    console.log('Server is running at http://localhost:3005 /students');
});