const mongoose = require('mongoose')

const URI = "mongodb://127.0.0.1:27017/mern_admin";

// mongoose.connect()

const connectDb = async ()=>{
    
    try {
        await mongoose.connect(URI)
        console.log("connection successful to db")
    } catch (error) {
        console.log("connect failed");
        process.exit(0)
    }
}



module.exports = connectDb;