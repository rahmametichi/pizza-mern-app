

const router = require('express').Router()
const User = require('../models/userModel')

router.post('/register' , async(req,res)=>{

    try {
    const {name,email,password} = req.body;

    if (!name || !email || !password) {
        res.status(400)
            .json({msg:'ALL FIELDS ARE REQUIRED !!!'})
    }

    const existingUser = await User.findOne({email:email})
    if (existingUser){
        res.status(400)
            .json({msg : 'USER ALREADY EXIST !!!!'})
                        }
else {
   // var salt = await bcrypt.genSalt(10);
   // const hashed_password = await bcrypt.hash(password,salt)
    const user= await User.create({
        name : name,
        email : email,
        password:password,
    })
    res.status(200)
        .json({status: true , msg : 'USER CREATED SUCCESSFULLY' , data : user})
    }
    }   catch(err) {
    
        res.status(500).json({status : false , message : err})
    }
    })

router.post('/login',async(req,res)=>{


    const {email,password} = req.body

    try {
        const user = await User.find({email,password})
        if (user.length > 0 ) {

            const currentUser = {
                name : user[0].name , 
                email : user[0].email , 
                isAdmin : user[0].isAdmin,
                _id : user[0]._id
            }
            res.send(currentUser)
        }
        else {
            return res.status(400).json({msg : 'USER LOGIN FAILED'})
        }

    }

    catch (error){

    }




})

    module.exports = router