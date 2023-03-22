const Register = require("../models/Register")
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


exports.signup = async (req, res) => {

    try {
const oldUser = await Register.findOne({email: req.body.email})

if(oldUser) {
    res.send({ error: "User Exists"})
    return;
}

         const password = await bcrypt.hash(req.body.password, saltRounds)
    const data = {...req.body, password}
  const user =  await Register.create(data)
    res.send({status: "ok"})


   
    } catch (error) {
       res.send({status: "error"})   
    }
   
  
}

exports.login = async (req,res) => {
    const users = await Register.findOne({email: req.body.email});
    if(!users) {
        res.status(404).json({ error: "User not found"});

        return;
    }


if( await bcrypt.compare(req.body.password, users.password)) {
const token = await jwt.sign({}, 'JWT_SECRET')
    // res.json ({users, access_token: token})

   if (res.status(201)) {
    return res.json({status: "ok", data: token});
   } else {
    return res.json({status: "error"});
   }
}else{
   return res.json({status:"error", error: "Invalid Password"})
}
  

 }

 exports.join = async (req, res)  => {
     const {token} = req.body
     try {
        const user = jwt.verify(token, JWT_SECRET)
        const useremail = user.email   
    user.findOne({email: useremail}).then((data) => {
        res.send({status: "ok", data: data})
    }).catch((error) =>{
        res.send({status: "error"})
    });
    } 
        catch (error) {
        
     }
 }
