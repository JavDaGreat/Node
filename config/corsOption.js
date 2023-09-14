const allowedOrigins = require("./allowedOrigins")
const corsOptions ={
  origin:(orgin,callback)=>{
    if(allowedOrigins.indexOf(orgin)!==-1 ||!orgin){
      callback(null,true)
    }else{
      callback(new Error("Not allowed by CORS"))
    }

     
  },
  optionsSuccessStatus:200
}
module.exports=corsOptions