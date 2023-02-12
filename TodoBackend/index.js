const express=require('express')
const cors=require('cors');
const mongoose=require('mongoose');
const todoRoute=require('./routes/todo');
const dotenv=require('dotenv');
dotenv.config()

const app = express()
const PORT= process.env.PORT||8080;
mongoose.connect()
.then(()=>{
    console.log("MongoDB COnnected")
})
.catch((err)=>{
    console.log(err);
    console.log("OOps unable to connect")
})



app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors());

app.get('/',(req,res)=>res.send('Hello! Welcome to The Todo Backend'))

app.get("/todo",todoRoute);


app.listen(PORT,()=>{console.log('server started on port 8080')})