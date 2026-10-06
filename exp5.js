const express = require('express');
const app= express();

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
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/students');
});