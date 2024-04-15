const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    restaurant:{
        type:String,
        required:true
    },
    restaurantImage:{
        type:String,
        required:true
    },
    restaurantRate:{
        type:Number,
        required:true
    }

},{timestamps:true})
module.exports = mongoose.model('Edit',productSchema)