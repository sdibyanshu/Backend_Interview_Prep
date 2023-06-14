const express =require("express")

const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    
    res.send("data get")
})

app.post("/adddetails",(req,res)=>{
    console.log(req.body)
    res.send("accepted data")
})



app.listen(8080,()=>{
    console.log("server is running at 8080")
})