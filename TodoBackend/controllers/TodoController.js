const Todo=require("../models/TodoModel");

const getTodo=async(req,res)=>{
    const todo=await Todo.find()
    res.send(todo);
}
module.exports = {getTodo};