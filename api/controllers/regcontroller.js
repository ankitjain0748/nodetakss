const Regm = require('../models/reg')
const client = require('../helper/helper.js')
//console.log(client)
exports.Regshow = (async (req, res) => {
  // console.log(req.body)
  const { username, password } = req.body
  const recordcheck = await Regm.findOne({ username: username })
  try {
  
  if (recordcheck == null) {
   
    const record = await new Regm({ username: username, password: password })
    record.save()
    res.json({
      status: client.code201,
      message: client.message201,
      data: record
    })
  } else{
    res.json({
      status: client.code400,
      message: 'wrong candiatiles'
    })

  }
  } catch(error){
  res.json({
    status: client.code400,
    message: client.measage400
  })

}
})



exports.login = (async (req, res) => {
 console.log(req.body)
  const { username, password } = req.body
 try{
  const record = await Regm.findOne({username:username})
  if(record!==null){
    if(record.password==password){
      res.json({
        status:client.code200,
        message:client.message200,
        apidata:record
      })
    }else{
      res.json({
        status:client.code500,
        message: 'wrong candiatiles'
      })
    }
    
  }
  else{
    res.json({
      status:client.code500,
      message: 'wrong candiatiles'
    })
  }
 }catch(error){
  res.json({
    status:client.code500,
    message:client.measage500
  })
 }
  //res.json(record)
})




