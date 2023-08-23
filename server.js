
const express = require('express')
const app = express()
const db = require('./db.js') 
const Pizza = require("./models/pizzaModel")
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require ('./routes/userRoute')
const orderRoute = require('./routes/ordersRoute')
const cors = require("cors")

app.use(express.json())
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api/orders',orderRoute)

app.use('/api/pizzas',pizzasRoute)

app.use('/api/users' ,userRoute)

const PORT = process.env.PORT || 6000

app.get('/',(req,res)=>{
    res.send(`SERVER IS RUNNING ON PORT ${PORT}`)
})



app.listen(PORT , (err)=>{
    if (err) {console.log(err)}
                    
console.log(`SERVER IS RUNNING ON PORT ${PORT}`) }
)