require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Todo = require('./models/todo');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rct98uw.mongodb.net/goal-tracker?retryWrites=true&w=majority`)
      .then(()=>{
            console.log('Connected to database!');
      })
      .catch(()=>{
            console.log('Connection to database failed');
      });

app.use(bodyParser.json())

app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();
});

app.post('/api/todos', (req, res, next)=>{
      const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date.replace(/\s/g,''),
            checked: req.body.checked
      });
      todo.save().then(createdPost => {
            res.status(201).json({
                  message: 'ToDo added successfully!',
                  todoId: createdPost._id
            })
      });
})

app.get("/api/todos", (req, res, next) => {
      if(req.query.date){
            Todo.find({date:req.query.date}).then(documents => {
              res.status(200).json({
                message: "Posts fetched successfully!",
                todos: documents
              });
            });           
      }
      else{
            Todo.find().then(documents => {
                  res.status(200).json({
                    message: "Posts fetched successfully!",
                    todos: documents
                  });
            });  
      }
});

app.put("/api/todos", (req, res, next) => {
      const checkStatus = req.query.checked === 'true'? true : false;
            Todo.findByIdAndUpdate({_id: req.query.id}, {
                  checked: checkStatus,
            }).then(resp=>{
                  res.status(200).json({
                        message: 'Object updated successfully'
                  })
            });
})

app.delete("/api/todos", (req, res, next) => {
      Todo.deleteOne({ _id: req.query.todoId }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Todo deleted!" });
      });
});

app.listen(3000, ()=>{
      console.log('Started on port:', 3000)
});