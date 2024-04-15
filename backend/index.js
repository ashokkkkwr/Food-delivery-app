const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/user')

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)

mongoose.connect('mongodb://localhost:27017/Edit')
.then(()=>{
    app.listen(2000,()=>{
        console.log('listening on port');
    })
}).catch((error)=>{
    console.log(error);
})