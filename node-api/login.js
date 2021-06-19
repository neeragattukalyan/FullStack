
const express = require("express");
const registerdguys = require("./registrationSchema/registrationSchema");
const router = express.Router();
const loginData = require("./loginSchema/loginschema");
const url = "mongodb://localhost/kalyanfirstdb"

router.get('/', async (req, res) => {
    try {
        console.log(res);
        const userdetails = await loginData.find();
        res.json(userdetails);
    } catch (err) {
        res.json(err);
    }
})

router.post('/',async(req, res) => {
    const userpostDetails = new loginData({
        username: req.body.data.username,
        password: req.body.data.password
    });
    const {username , password} = userpostDetails;
    try{
        let regguys = await registerdguys.find();
        console.log(regguys);
        console.log(username);
        regguys.forEach((obj)=>{
            if (obj.firstname == username){
                res.send("guy is in DB");
                console.log("guy is in DB");
            }else{
                res.send("guy is not in DB");
                console.log("guy is not in db");
            }
        });



    }catch(err){

    }
 
    // try {
    //     const logs = await userpostDetails.save();
    //     res.json(logs);
    // } catch (err) {
    //     res.json(err);
    // }
})

module.exports = router;