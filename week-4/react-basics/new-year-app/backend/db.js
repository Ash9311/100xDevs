const mongoose = require("mongoose");
const CONNECTION_STRING = require('./config');

mongoose.connect(CONNECTION_STRING);

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}