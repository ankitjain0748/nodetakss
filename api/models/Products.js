const mongoose=require('mongoose')

const productsSchema=mongoose.Schema({
    name:String,
    desc:String,
    ldesc:String,
    price:String,
    status:{type:String,default:"IN STOCK"}
})


module.exports=mongoose.model('products',productsSchema)