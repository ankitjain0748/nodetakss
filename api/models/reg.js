const mongoose=require('mongoose')

const Regschmea=mongoose.Schema({
    username:String,
    password:String,
    email:String

})

module.exports=mongoose.model('reg',Regschmea)

