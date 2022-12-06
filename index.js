const express = require('express')
const app = express();

const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());

const courseType = require('./data/data.json');
const course = require('./data/course.json');


app.get('/', (req, res) => {
  res.send('data')
});

app.get('/course-type', (req, res) => {
  res.send(courseType)
});

app.get('/course-type/:id', (req, res) => {
  const id = req.params.id;
  const showCourse = course.find(c => c.id === id);
  res.send(showCourse);
});

app.get('/course', (req, res) =>{
  res.send(course);
});

app.get('/course/:id', (req, res) => {
  const id = req.params.id;
  if (id === '07') {
    res.send(course);
  }else{
  const course_type = course.filter( c => c.category_id === id);
  res.send(course_type);
  }
  
});

app.listen(port, () =>{
  console.log('Learning Webite data')
})