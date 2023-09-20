const express = require("express");

const Todo = require('../models/todo');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post('', checkAuth, (req, res, next)=>{
      const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date.replace(/\s/g,''),
            checked: req.body.checked,
            creator: req.userData.userId
      });
      todo.save().then(createdPost => {
            res.status(201).json({
                  message: 'ToDo added successfully!',
                  todoId: createdPost._id
            })
      });
})

router.get("", checkAuth, (req, res, next) => {
      console.log('user:', req.userData.userId)
      if(req.query.date){
            Todo.find({date:req.query.date, creator: req.userData.userId}).then(documents => {
              res.status(200).json({
                message: "Posts fetched successfully!",
                todos: documents
              });
            });           
      }
      else{
            Todo.find({creator: req.userData.userId}).then(documents => {
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
      Todo.deleteOne({ _id: req.query.todoId, creator: req.userData.userId }).then(result => {
      //   console.log(result);
      console.log("BBBB", req.userData.userId, result)
      //   res.status(200).json({ message: "Todo deleted!" });
            if(result.deletedCount > 0){
                  res.status(200).json({message: "Deletion successful!"});
            }else{
                  res.status(401).json({message: "Not authorized!"});
            }
      });
});

module.exports = router;
