

const express = require('express') 

const router = express.Router();
const Pizza = require('../models/pizzaModel')

router.get('/getallpizzas', async(req,res)=>{

    try {
        const pizzas = await Pizza.find({})
        res.status(200)
        .json({status : true , message : "Pizzas List" , data : pizzas})
    
    }

    catch (error){

       return res.status(400).json({message : error})
           
    }
    })

 router.post('/createPizza' , async (req,res)=>{

        try {
            const {name,varients,prices,category,image,description} = req.body
          
            const existingPizza = await Pizza.findOne({name:name})
            if (existingPizza){
                res.status(400)
                    .json({msg : 'PIZZA ALREADY EXIST !!!!'})
                                }
          else {
                const pizzas= await Pizza.create({name : name,
                    varients : varients
                    ,prices : prices 
                    ,category : category
                    ,image :image ,
                    description : description})
                res.status(200)
                    .json({status : true , message : "PIZZA CREATED SUCCESSFULLY" , data : pizzas})}

        }
        catch(err) {

            res.status(500)
                .json({status : false , message : err})
        }
    
    })

module.exports = router