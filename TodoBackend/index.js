require("dotenv").config()
const express= require("express");
const cors= require("cors");
const mongoose= require("mongoose");
const PORT=process.env.PORT
const TodoRouter=require("./routes/todo.route");
const connect= require("./config/db");
const app=express(); 
app.use(express.json());
app.use(cors());
app.use("/todo",TodoRouter)

    // res.send("hello there!");

    app.get('/',(req,res)=>res.send('hello'))


app.listen(PORT,async()=>{
try {
    await connect()
 console.log(`listening on ${PORT}`);
} catch (error) {
    console.log(error)
}
    
   
})





