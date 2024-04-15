const Edit = require('../models/ProductModel')
const mongoose = require('mongoose')


//display all product
const getProducts = async(req,res)=>{
    const products = await Edit.find({}).sort({createdAt:-1})
    res.status(200).json(products)
}
//display single product
const getProduct = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Not a valid ID'})
    }
    const product = await Edit.findById(id)
    if(!product){
        return res.status(404).json({error:"No Such Workouts"})
    
    }
    res.status(200).json(product)


}
//create new workout
const addProduct = async(req,res)=>{
    const {name,price,img,category,restaurant,restaurantImage,restaurantRate}=req.body
    try{
        const product = await Edit.create({name,price,img,category,restaurant,restaurantImage,restaurantRate})
        res.status(200).json(product)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
//delete produc
const deleteProduct = async (req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Not a valid ID'})
    }
    const product = await Edit.findOneAndDelete({_id:id})
    if(!product){
        return res.status(400).json({error:'No such products'})

    }
    res.status(200).json(product)
}// controllers/productController.js

const updateProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Not a valid id' });
    }
    try {
        const product = await Edit.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ error: 'No such product' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error updating product:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports={
    getProducts,
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct
}