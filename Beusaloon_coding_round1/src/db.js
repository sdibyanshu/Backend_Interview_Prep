const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const connect = async () => {

    console.log("Mongodb database connected succesfully and working")

    return mongoose.connect(db_url)
}

module.exports = connect;