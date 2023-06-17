const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const userModel = require("../model/user.model")
const jwt = require("jsonwebtoken")




userRouter.post("/register",async(req,res)=>{
    const {username,email,password} = req.body
    try {
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                res.status(400).send(err.message)
            }
            const newUser = new userModel({username,email,password:hash})
            await newUser.save()
            res.status(200).send("user Register successfully")
        });
    } catch (error) {
        res.status(400).send("user Registeration failed")
    }
})



userRouter.post("/login", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.findOne({email})
        bcrypt.compare(password, user.password, function(err, result) {
           if(result){
            let token = jwt.sign({userId:user._id},`${process.env.secretKey}`)
            res.status(200).send({"msg":"user loggedin successfully",token});
           }else{
            res.status(400).send("wrong credentials");
           }
        });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });





module.exports = userRouter