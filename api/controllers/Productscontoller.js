const Productsc=require('../models/Products')
const client = require('../helper/helper.js')
const { startSession } = require('mongoose')
exports.Productshow=((req,res)=>{
 //   console.log(req.body)
 const{name,desc,ldesc,price}=req.body
 try{
    const recode= new Productsc({
        name:name,
        desc:desc,
        ldesc:ldesc,
        price:price
    })
     recode.save()
     res.json({
        apidata:recode,
        status:client.code201,
        message:client.message201})
 }catch(error){
    res.json({
        status:client.code400,
        message:client.measage400
    })
 }

 
})

exports.Productsall=(async(req,res)=>{
    try{
        const recodes=  await Productsc.find().limit(20)
        res.json({
            apiData:recodes,
            status:client.code200,
            message:client.message200
        })
    }catch(error){
res.json({
    status:client.code500,
    message:error.measage500
})
    }
 
})

exports.productupdate=(async(req,res)=>{
   // console.log(req.params.id)
   const id=req.params.id
   try{
    const  record=await Productsc.findById(id)
    res.json({
        status:client.code200,
        message:client.message200,
        apidata:record
    })
   }catch(error){

res.json({
    status:client.code400,
    message:client.measage400

})
    

   }
})


exports.productupdateall=(async(req,res)=>{
 //   console.log(req.params.id)
  // console.log(req.body)
   const id=req.params.id
   const{name,desc,ldesc,price,status}=req.body
   try{
    await Productsc.findByIdAndUpdate(id,{
        name:name,desc:desc,ldesc:ldesc,status:status,price:price
    })
    res.json({
        status:client.code200,
        message:client.message
    })
   }catch(error){
   res.json({
    status:client.code500,
    message:client.measage500
   }
    )
   }
})

exports.productfornted=(async(req,res)=>{
try{
    const record=await Productsc.find({status:"IN STOCK"})
    res.json({
        status:client.code200,
        message:client.message200,
        apiData:record
    })
}catch(error){
res.json({
    status:client.code500,
    message:client.measage500
})
}

})

exports.productis=(async(req,res)=>{
 //   console.log(req.body)
 const {ids}=req.body
 try{
    const recor=await Productsc.find({_id:{$in:ids}})
 res.json({
    status:client.code200,
    message:client.message200,
    apiData:recor
 })
 }catch(error){
    res.json({
        status:client.code500,
        message:client.measage500
     })
 }
})