import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch , useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Success from './Success'
import Error from './Error'
import Loading from './Loading'


export default function Checkout({subtotal}) {

  const orderstate= useSelector((state)=> state.placeOrderReducer)
 
  const {loading , error , success} = orderstate
 
  const dispatch = useDispatch()

  function tokenHander(token){
    dispatch(placeOrder(token,subtotal))
    console.log(token)
  }


  return (
    <div>

      {loading && <Loading/>}
      {error && <Error/>}
      {success && <Success success='Your order placed successfully'/>}


      <StripeCheckout 
      
      amount={subtotal*100}
      shippingAddress
      token={tokenHander}
      stripeKey={'pk_test_51KeRR0JO42TJpmFAh6Lk7BIPUEQzHvwnMyXe0orAooVUyPOAS0Zbg29ZfCJX2qtsxPgE32UXTqqa0cjCvUyIJY8200UlMiXlqb'}
      currency='USD'
    
      
      
      >

      <button  style={{marginTop:'150px',marginRight:'50px'}} className='btn'>Pay Now</button>


      </StripeCheckout>




    </div>
  )
}
