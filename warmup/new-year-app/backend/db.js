const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:ashutosh@cluster0.unq1iah.mongodb.net/todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}