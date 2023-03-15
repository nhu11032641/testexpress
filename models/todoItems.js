const mongoose = require('mongoose');

const TodoItemSchma = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})


module.exports = mongoose.model('todo',TodoItemSchma);