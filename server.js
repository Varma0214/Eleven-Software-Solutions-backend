const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let courseTypes = [];
let courses = [];
let registrations = [];

// Endpoints for Course Types
app.get('/course-types', (req, res) => {
  res.json(courseTypes);
});

app.post('/course-types', (req, res) => {
  courseTypes.push(req.body);
  res.status(201).json({ message: 'Course type added successfully.' });
});

app.delete('/course-types/:id', (req, res) => {
  courseTypes = courseTypes.filter((type) => type.id !== parseInt(req.params.id));
  res.json({ message: 'Course type deleted successfully.' });
});

// Endpoints for Courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

app.post('/courses', (req, res) => {
  courses.push(req.body);
  res.status(201).json({ message: 'Course added successfully.' });
});

app.delete('/courses/:id', (req, res) => {
  courses = courses.filter((course) => course.id !== parseInt(req.params.id));
  res.json({ message: 'Course deleted successfully.' });
});

// Endpoints for Registrations
app.get('/registrations', (req, res) => {
  res.json(registrations);
});

app.post('/registrations', (req, res) => {
  registrations.push(req.body);
  res.status(201).json({ message: 'Registration added successfully.' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
