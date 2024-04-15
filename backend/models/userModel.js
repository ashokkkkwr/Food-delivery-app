const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema
const userSchema = new Schema({
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean
    }
   
})


//static signup method
userSchema.statics.signup = async function(email,password,isAdmin){

    //validation
    if(!email ||!password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }



    //this vaneko User ho tara yesari lekhna milxa export muni gareko hunale
    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email already in use')
    }

    //hasing password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    //adding to db
    const user = await this.create({email, password:hash,isAdmin})

    return user
}

//static login method
userSchema.statics.login = async function(email,password,isAdmin){
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    console.log("user data: ", user)
    return user
}



module.exports = mongoose.model('User',userSchema)