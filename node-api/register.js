const express = require("express");
const router = express.Router();
const registers =require("./registrationSchema/registrationSchema");

router.get("/" , async(req , res)=>{
try{
const registerdUsrs = await registers.find();
res.json(registerdUsrs);
}catch(err){
res.json(err);
}

})

router.post("/" , async(req,res)=>{
    const regObj = new registers({
      firstname : req.body.data.firstname,
      lastname : req.body.data.lastname,
      email : req.body.data.email,
      password : req.body.data.password,
    })
    try{
   const newRegObj = await regObj.save();
    }catch(err){
 res.json(err);
    }
})

module.exports = router;
