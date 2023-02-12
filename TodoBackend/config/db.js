const mongoose=require("mongoose")
mongoose.set ('strictQuery', true);
const connect=async()=>{ 
    console.log('MongoDB connetes')
    return mongoose.connect(process.env.DB_URL)
}
module.exports=connect;