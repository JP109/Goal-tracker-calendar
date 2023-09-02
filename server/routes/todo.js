const express = require("express");

const Todo = require('../models/todo');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post('', checkAuth, (req, res, next)=>{
      const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date.replace(/\s/g,''),
            checked: req.body.checked
      });
      console.log(req.userData)
      return res.status(200).json({});
      todo.save().then(createdPost => {
            res.status(201).json({
                  message: 'ToDo added successfully!',
                  todoId: createdPost._id
            })
      });
})

router.get("", (req, res, next) => {
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

router.put("", checkAuth, (req, res, next) => {
      const checkStatus = req.query.checked === 'true'? true : false;
            Todo.findByIdAndUpdate({_id: req.query.id}, {
                  checked: checkStatus,
            }).then(resp=>{
                  res.status(200).json({
                        message: 'Object updated successfully'
                  })
            });
})

router.delete("", checkAuth, (req, res, next) => {
      Todo.deleteOne({ _id: req.query.todoId }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Todo deleted!" });
      });
});

module.exports = router;
