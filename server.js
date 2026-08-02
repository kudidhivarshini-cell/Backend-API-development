const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: 'Rahul', course: 'Full Stack' }
];

app.get('/students', (req, res) => {
  res.status(200).json(students);
});

app.post('/students', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ message: 'Name and course are required' });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course
  };

  students.push(newStudent);
  res.status(201).json({ message: 'Student added successfully', student: newStudent });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
