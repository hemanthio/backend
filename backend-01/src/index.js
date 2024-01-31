
import dotenv from "dotenv"
import mongoose from 'mongoose'
import { DB_NAME } from './constants';

dotenv.config({
    path: './env'
})








// ;(async ()=>{
//    try{
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error" ,(error)=>{
// console.log("ERR",error);
// throw error
//     })
// app.listen(process.env.PORT,()=>{
//     console.log(`app is listening to ${processs.env.PORT}`);
// })

//     }
//     catch(error){
// console.error("ERROR:",error)
// throw err
//     }
// })()