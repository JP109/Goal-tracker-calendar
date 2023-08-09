const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
      title: {type: String, required: true},
      description: {type: String},
      date: {type: String},
      checked: {type: Boolean}
});

module.exports = mongoose.model('ToDo', todoSchema);