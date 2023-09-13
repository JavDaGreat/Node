const whitelist =["https://www.yourSite.com","http://127.0.0.1:5700","http://localhost:3500"]

const corsOptions ={
  origin:(orgin,callback)=>{
    if(whitelist.indexOf(orgin)!==-1 ||!orgin){
      callback(null,true)
    }else{
      callback(new Error("Not allowed by CORS"))
    }

     
  },
  optionsSuccessStatus:200
}
module.exports=corsOptions