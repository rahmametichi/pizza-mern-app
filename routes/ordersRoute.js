
const express=require('express')
const router = express.Router()
const { v4 : uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51KeRR0JO42TJpmFA8HS4kdiSMCHvViGDB545Lg9WZ1vvkciiZfTRUlVgzwerVY5u0vmFOknD4bdelwqpeGE7uWYx00dzVC28MN')
const Order = require('../models/orderModel')


router.post('/placeorder',async (req,res)=>{
    const {token,subtotal,currentUser , cartItems} = req.body

   try {
    const customer = await stripe.customers.create({
        email : token.email,
        source : token.id
    })

    const payment =  await stripe.charges.create({
        amount : subtotal*100,
        currency : 'USD',
        customer : customer.id,
        receipt_email : token.email
    } , { 
        idempotencyKey : uuidv4()
    })

    if (payment) {
        const neworeder = new Order({
            name : currentUser.name,
            email : currentUser.email ,
            userid : currentUser._id,
            orderItems : cartItems,
            orderAmount : subtotal,
            shippingAdress : {
                street : token.card.address_line1,
                city : token.card.address_city,
               // country : token.card.address.country,
                pincode : token.card.address_zip

            } , 
            transactionId : payment.source.id
        })
        neworeder.save()
        res.send('ORDER PLACED SUCCESSFULLY')
    }
    else {res.send('PAYMENT FAILED')}


   }
   catch (error){
       console.log(error)
      return res.status(400)
                .json({msg : 'SOMETHING WENT WRONG',error})
   }


})

router.get('/getuserorders/:userid',async (req,res)=>{

    const {userid} = req.params
 
    try {

        const orders = await Order.find({userid:userid}).sort({_id : -1})

      //  res.send(orders)
        res.status(200)
            .json({status : true , msg : 'Orders List' , data : orders})
   
    }
    catch (error){
        
        return res.status(400)
                    .json({msg : 'SOMETHING WENT WRONG'})
    }



})


module.exports = router