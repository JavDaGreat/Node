const allowedOrigins = require("../config/allowedOrigins")

const credential =function(req,res,next){
const orgin= req.header.orgin
if(allowedOrigins.includes(orgin)){
  res.header("Access-Control-Allow-Credentials",true)
}
next()
 
}
module.exports=credential