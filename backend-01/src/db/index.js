import mongoose from "mongoose"
import {DB_NAME } from "../constants"

const connectDB = aync()=>{
    try {
     const connecionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) 
     console.log(`mongodb connected DB host: ${connecionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB error connection",error)
        process.exit(1)
    }
};

export default connectDB;