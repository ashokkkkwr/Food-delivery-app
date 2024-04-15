const express = require('express')
const router = express.Router()
const{getProducts,
addProduct,
getProduct,
deleteProduct,
updateProduct
}=require('../controllers/productController')
const requireAuth = require('../middleware/requireAuth')
//get all prodcuts
router.get('/',getProducts)
//single product
router.get('/:id',getProduct)
//post a new product
router.post('/',addProduct)
//delete a product
router.delete('/:id',deleteProduct)
router.patch('/:id',updateProduct)
module.exports=router