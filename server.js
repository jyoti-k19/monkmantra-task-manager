const express = require('express');
const cors = require('cors');
const app = express();
const POST = 5000;

app.use(cors());
app.use(express.json());


let task = [
      {id:1, 
      title:'Complete Internship Test',
      status:'pending',
      createdAt:new Date().toISOString()
}
];

//Routes

//GET all tasks
app.get('/tasks',(req,res) => {
      res.json(tasks);
});

//GET task by Id
