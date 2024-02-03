import mongoose ,{Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
 username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
 },

 email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
 },
 fullName:{
    type:String,
    required:true,
    trim:true,
    index:true
 },
 avatar:{
    type:String, //cloudarany url
    required:true,

 },
 coverImage:{
    type:String, //cloudary url
 },
 watchHistory:[
    {
type:Schema.Types.ObjectId,
ref:"Video"
 }
],
password:{
    type:String,
    required:[true,"password is required"]
},
refreshToken:{
    type:String,

}


},{timestamps:true})

userSchema.pre("save",async function(next){
    if (!this.ismodified("password")) return next()
        this.password =bcrypt.hash(this.password,10)
        next()
    
   
})

userSchema.methods.isPasswordCorrect = async function 
(password)
 {
  return await  bcrypt.compare(password, this.password)
}


export const User = mongoose.model('User',userSchema)