const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
   text:{type: String,required: true,}
   },
   {
    timestamps: true,
    versionKey:false,
   });


  

const Todo=mongoose.model("todo",todoSchema);
module.exports = Todo;