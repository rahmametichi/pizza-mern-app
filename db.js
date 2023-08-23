
const  mongoose = require('mongoose')
require('dotenv').config()

const MONGOURI = process.env.MONGOURI

mongoose.connect(MONGOURI,
    
       { useUnifiedTopology:true ,
            useNewUrlParser : true})

var db = mongoose.connection

db.on('connected',()=>{console.log('DATABASE CONNECTED SUCCESSFULLY')})

db.on('error',()=>{console.log('CONNECTION TO DATABASE FAILED')})

module.exports = mongoose